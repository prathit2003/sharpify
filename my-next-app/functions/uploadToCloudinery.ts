import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});


const uploadToCLoudinery = async (file: string) => {
  const timestamp: number = Math.floor(Date.now() / 1000);
  const folder: string = "uploaded_images"

  try {
    const signature = cloudinary.utils.api_sign_request(
      {
        folder,
        overwrite: true,
        use_filename: true,
        unique_filename: true,
      },
      process.env.CLOUDINARY_API_SECRET!
    );
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder,
      timestamp,
      signature,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      overwrite: true,
      use_filename: true,
      unique_filename: true,
    });
    console.log(uploadResponse);
    console.log(uploadResponse.public_id);
    const publicId = uploadResponse.public_id;
    return publicId;

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload file");
  }
}
export default uploadToCLoudinery;