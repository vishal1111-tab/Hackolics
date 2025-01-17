let api ="AIzaSyDgZYqkSYqAo28fc7JPgRu6qEYKYlevYMA";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai";
  
//   const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(api);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 50,
    responseMimeType: "text/plain",
  };
  
  async function run(promt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(promt);
    return result.response.text()
  }
  
  export default run;