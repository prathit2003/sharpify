import { v2 as cloudinary } from "cloudinary";
import axios from "axios";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
// Configure Cloudinary

export async function POST(req: NextRequest) {
  try {
    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
    const { imageUrl, cropArea } = await req.json();
    const { x, y, width, height } = cropArea;

    if (!imageUrl || !x || !y || !width || !height) {
      return NextResponse.json(
        { error: "Missing imageUrl or cropArea" },
        { status: 400 }
      );
    }

    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data);
    const image = sharp(imageBuffer);
    const metadata = await image.metadata();

    if (
      !metadata.width ||
      !metadata.height ||
      x < 0 ||
      y < 0 ||
      width <= 0 ||
      height <= 0 ||
      x + width > metadata.width ||
      y + height > metadata.height
    ) {
      return NextResponse.json(
        { error: "Invalid crop area", x, y, width, height, metadata },
        { status: 400 }
      );
    }

    const croppedImageBuffer = await image
      .extract({ left: x, top: y, width, height })
      .toBuffer();

    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!preset) {
      return NextResponse.json(
        { error: "Missing upload preset" },
        { status: 500 }
      );
    }
    const uploadResponse: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "uploaded_images", upload_preset: preset },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(croppedImageBuffer);
    });

    return NextResponse.json(
      { croppedImageUrl: uploadResponse.secure_url },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
