import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, //배포 후 삭제
});

export const sendMessage = async (content: string) => {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content }],
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
