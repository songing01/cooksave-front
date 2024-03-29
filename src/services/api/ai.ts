import axios from "axios";

const url = process.env.REACT_APP_CLOVA_API_URL;
const key = process.env.REACT_APP_CLOVA_API_KEY;

//CLOVA OCR 이미지 post
export const postImagetoClova = async (image: File) => {
  const format = image.type.split("/");
  const name = image.name;
  const timestamp = Date.now();

  let formData = new FormData();
  const message = {
    version: "v1",
    requestId: "1",
    timestamp: timestamp,
    lang: "ko",
    images: [{ format: format[1], name: name, templateIds: [0] }],
  };

  const file = image;
  formData.append("message", JSON.stringify(message));
  formData.append("file", file);

  try {
    const response = await axios.post(`${url}`, formData, {
      headers: {
        "X-OCR-SECRET": key,
      },
    });

    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
