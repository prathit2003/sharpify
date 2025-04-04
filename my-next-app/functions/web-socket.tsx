import axios from "axios";

const callbackend = async (
  route: string | null,
  imageUrl: string,
  formatofimage: string | null
): Promise<string | null> => {
  try {
    const requestBody: { image_url: string; formatofimage?: string } = {
      image_url: imageUrl,
    };
    if (!route) {
      throw new Error("Route cannot be null");
    }
    if (formatofimage) {
      requestBody.formatofimage = formatofimage;
    }
    const response = await axios.post(
      `http://localhost:8000/api/${route}`,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log(response?.data);
    console.log(response.data.url);
    return response.data.url;
  } catch (error: any) {
    console.error(error.response?.data);
  }
  return null;
};
export default callbackend;
