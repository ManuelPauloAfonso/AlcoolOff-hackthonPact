import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  },
});

export const generateResponse = async (message) => {
  try {
    const response = await instance.post("", {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for Alcoolismo Alentejo.",
        },
        { role: "user", content: message },
      ],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error response:", error.response?.data || error.message);
    return "";
  }
};
