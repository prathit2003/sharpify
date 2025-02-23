import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await prisma.session.deleteMany({
      where: { expires: { lt: new Date() } },
    });

    res.status(200).json({ message: "Expired sessions cleaned up" });
  } catch (error) {
    console.error("Failed to clean up sessions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
