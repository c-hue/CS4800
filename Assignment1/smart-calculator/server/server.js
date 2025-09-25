import express from "express";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/api/ai", async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });
    const reply = completion.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "AI request failed." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));