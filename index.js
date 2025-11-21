// File: index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

// Cấu hình CORS để cho phép Frontend (file HTML của bạn) gọi vào
app.use(cors());
app.use(express.json());

// Kiểm tra xem API Key có tồn tại không
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ LỖI: Chưa cấu hình biến môi trường GEMINI_API_KEY trên Render!");
}

// Khởi tạo Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
  res.send('Hello! Server HiHi is running... 🚀');
});

app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Thiếu nội dung prompt" });
    }

    // QUAN TRỌNG: Dùng đúng tên model là 'gemini-1.5-flash'
    // Thư viện @google/generative-ai bản mới trong package.json sẽ hỗ trợ cái này.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Trả về đúng cấu trúc JSON mà Frontend mong đợi
    res.json({
      candidates: [
        {
          content: {
            parts: [{ text: text }]
          }
        }
      ]
    });

  } catch (error) {
    console.error("Lỗi khi gọi Gemini:", error);
    res.status(500).json({ 
      error: error.message || "Lỗi Server nội bộ",
      details: error.toString() 
    });
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy tại cổng ${port}`);
});
