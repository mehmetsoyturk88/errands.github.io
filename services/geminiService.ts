import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedLyrics } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBandLyrics = async (mood: string, topic: string): Promise<GeneratedLyrics> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Write a short rock song verse and chorus about "${topic}" with a "${mood}" mood. Give it a title.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ["title", "content"]
        },
        systemInstruction: "You are the lead songwriter for a gritty, alternative rock band. Your lyrics are metaphorical, raw, and emotional. Keep it under 15 lines."
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedLyrics;
    }
    throw new Error("No text returned from model");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
