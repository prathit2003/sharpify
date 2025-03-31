import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  res: NextResponse
): Promise<NextResponse> {
  try {
    const { imageUrl } = await req.json();
    return new Promise<NextResponse>((resolve, reject) => {
      const ws = new WebSocket("ws://localhost:8000/ws");

      ws.onopen = () => {
        ws.send(imageUrl);
      };

      ws.onmessage = (event) => {
        console.log("Received:", event.data);
        ws.close();
        resolve(NextResponse.json({ processed_link: event.data }));
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
        reject(
          NextResponse.json(
            { error: "WebSocket communication failed" },
            { status: 500 }
          )
        );
      };

      setTimeout(() => {
        reject(
          NextResponse.json({ error: "WebSocket timeout" }, { status: 504 })
        );
      }, 10000);
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
