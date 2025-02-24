import { NextResponse } from "next/server";
import uploadToCloudinery from "../../../functions/uploadToCloudinery";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { file, userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }


    const public_id = await uploadToCloudinery(file);

    return new Promise<NextResponse>((resolve, reject) => {
      const ws = new WebSocket("ws://localhost:8000/api/backgroundremove");

      ws.onopen = () => {
        ws.send(public_id);
      };

      ws.onmessage = async (event) => {
        console.log("Received:", event.data);
        const processed_link = event.data;

        try {

          await prisma.image.update({
            where: { userId },
            data: { updatedUrl: processed_link },
          });

          ws.close();
          resolve(NextResponse.json({ processed_link }));
        } catch (dbError) {
          console.error("Database Error:", dbError);
          ws.close();
          reject(NextResponse.json({ error: "Database update failed" }, { status: 500 }));
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
        reject(NextResponse.json({ error: "WebSocket communication failed" }, { status: 500 }));
      };

      setTimeout(() => {
        reject(NextResponse.json({ error: "WebSocket timeout" }, { status: 504 }));
      }, 10000);
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
