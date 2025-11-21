// File: index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

// Cấu hình CORS: Cho phép mọi nguồn (Frontend của bạn) gọi API
app.use(cors());
app.use(express.json());

// Kiểm tra API Key và khởi tạo Gemini
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ LỖI: Thiếu biến môi trường GEMINI_API_KEY.");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Endpoint kiểm tra trạng thái Server
app.get('/', (req, res) => {
  res.send('Server Proxy Gemini đã hoạt động thành công! 🚀');
});

// Endpoint chính để gọi API Gemini
app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Thiếu nội dung prompt." });
    }

    // GỌI MODEL CHÍNH XÁC
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    
    const result = await model.generateContent(prompt);
    const text = result.response.text;

    // Trả về kết quả theo định dạng mà Frontend mong đợi
    res.json({
      candidates: [{
          content: {
            parts: [{ text: text }]
          }
      }]
    });

  } catch (error) {
    console.error("Lỗi khi gọi Gemini:", error);
    // Trả về lỗi 500 nếu có bất kỳ vấn đề nào xảy ra (ví dụ: API Key sai)
    res.status(500).json({ 
      error: error.message || "Lỗi Server nội bộ. Vui lòng kiểm tra API Key hoặc Render Logs.",
      details: error.toString() 
    });
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy tại cổng ${port}`);
});
