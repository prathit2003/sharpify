import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  res: NextResponse
): Promise<NextResponse> {
  try {
    const { imageUrl } = await req.json();
    return new Promise<NextResponse>((resolve, reject) => {
      const ws = new WebSocket("ws://localhost:8000/api/formatchange");

      ws.onopen = () => {
        console.log("WebSocket connected. Sending public_id...");
        ws.send(imageUrl);
      };

      ws.onmessage = (event) => {
        console.log("Received response from FastAPI:", event.data);
        ws.close();
        resolve(NextResponse.json({ processed_link: event.data }));
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        ws.close();
        reject(
          NextResponse.json(
            { error: "WebSocket communication failed" },
            { status: 500 }
          )
        );
      };

      ws.onclose = () => {
        console.log("WebSocket closed.");
      };

      setTimeout(() => {
        console.error("WebSocket timeout.");
        ws.close();
        reject(
          NextResponse.json({ error: "WebSocket timeout" }, { status: 504 })
        );
      }, 10000);
    });
  } catch (error) {
    console.error("Invalid request:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
