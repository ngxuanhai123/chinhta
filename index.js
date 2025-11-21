// File: index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Kiểm tra API Key và khởi tạo Gemini
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ LỖI: Chưa cấu hình biến môi trường GEMINI_API_KEY!");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
  res.send('Hello! Server is running... 🚀');
});

app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Sử dụng tên model ổn định, thư viện mới sẽ xử lý tốt
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    
    const result = await model.generateContent(prompt);
    const text = result.response.text;

    res.json({
      candidates: [{
          content: {
            parts: [{ text: text }]
          }
      }]
    });

  } catch (error) {
    console.error("Lỗi khi gọi Gemini:", error);
    res.status(500).json({ 
      error: error.message || "Lỗi Server nội bộ (Kiểm tra lại API Key hoặc Code Server)",
      details: error.toString() 
    });
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy tại cổng ${port}`);
});
