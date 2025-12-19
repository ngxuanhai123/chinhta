# HiHi Spelling Master – Luyện Chính Tả & Ngoại Ngữ (Sync Realtime)

[![HiHi Spelling](https://img.shields.io/badge/HiHi-Spelling_Master-00d2ff?style=for-the-badge&logo=appveyor)](https://ngxuanhai123.github.io/hihi-spelling/)  
![Version](https://img.shields.io/badge/Version-1.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

**HiHi Spelling** là một ứng dụng web miễn phí giúp bạn luyện gõ chính tả, luyện nghe và luyện đọc ngoại ngữ một cách thú vị và hiệu quả. Ứng dụng hỗ trợ đồng bộ realtime với Firebase, bảng xếp hạng hàng tháng và nhiều tính năng hiện đại.

🌐 **Truy cập ngay**: [https://ngxuanhai123.github.io/chinhta/](https://ngxuanhai123.github.io/chinhta/)  
(hoặc mở file `index.html` trực tiếp trên máy)

## Tính năng nổi bật

- **Hỗ trợ nhiều ngôn ngữ**: Tiếng Việt, Tiếng Anh (Mỹ), Tiếng Indonesia, Tây Ban Nha, Ý, Latin
- **4 chế độ luyện tập**:
  - Nhìn & Chép (read-write)
  - Nghe & Chép (listen-write)
  - Nghe - Nhìn - Chép (read-listen-write)
  - Luyện Đọc to (read-only – dùng mic nhận diện giọng nói)
- **Giọng đọc AI chất lượng cao**:
  - Google TTS (chuẩn, rõ ràng)
  - System Voice (giọng máy local)
  - Điều chỉnh tốc độ đọc: chậm – chuẩn – nhanh – rất nhanh
- **Hiệu ứng Karaoke** khi nghe: từ đang đọc sẽ được highlight
- **Dịch tự động**:
  - Dịch toàn bộ đoạn văn sang tiếng Việt (khi luyện ngoại ngữ)
  - Hover vào từ → hiện nghĩa tiếng Việt realtime
- **Thống kê chi tiết**:
  - Tốc độ gõ (WPM)
  - Độ chính xác (%)
  - Điểm số (dựa trên ký tự đúng + điểm siêng năng theo thời gian – phạt khi dùng gợi ý)
- **Bảng xếp hạng realtime** (dùng Firebase):
  - Xếp hạng theo tổng điểm tích lũy hàng tháng
  - Tự động reset BXH mỗi tháng mới
  - Hiển thị WPM cao nhất, độ chính xác cao nhất
- **Đăng nhập Google** để lưu thành tích và đua top (hoặc chơi khách không cần đăng nhập)
- **Giao diện đẹp mắt**:
  - Glassmorphism + Aurora background
  - Hiệu ứng particle bay nhẹ
  - Chế độ Dark/Light
  - Responsive hoàn hảo trên mobile & desktop

## Công nghệ sử dụng

- HTML5, CSS3 (Glassmorphism, Animation)
- Vanilla JavaScript (ES6+)
- Firebase Authentication + Realtime Database (lưu & đồng bộ BXH)
- Web Speech API (SpeechSynthesis & SpeechRecognition)
- Google Translate TTS (qua translate.googleapis.com)
- MyMemory Translation API (dịch nghĩa từ)
- Chart.js (chuẩn bị cho biểu đồ tiến bộ trong tương lai)
- Font Awesome, Google Fonts (Poppins & Quicksand)

## Cách sử dụng

1. Mở trang web (link trên hoặc file `index.html`)
2. Nếu lần đầu → hiện modal đăng nhập:
   - Đăng nhập Google → lưu thành tích & đua top
   - Hoặc nhập tên khách → chơi ngay không lưu
3. Chọn ngôn ngữ, chế độ chơi, giọng đọc
4. Nhập văn bản hoặc nhấn **"Bài mẫu"** để lấy đoạn văn kinh điển (thơ, văn trong SGK và thế giới)
5. Nhấn **Bắt đầu luyện tập**
6. Gõ / nghe / đọc theo chế độ đã chọn
7. Xem kết quả → điểm sẽ tự động lưu lên BXH nếu đã đăng nhập
8. Chuyển sang tab **BXH** để xem thành tích cá nhân và top server

## Dữ liệu mẫu có sẵn

Ứng dụng có sẵn nhiều đoạn văn/thơ nổi tiếng cho từng ngôn ngữ:
- Tiếng Việt: Tây Tiến, Tràng Giang, Ông đồ, Quê hương, Đây thôn Vĩ Dạ…
- Tiếng Anh: The Road Not Taken, Hamlet, Daffodils…
- Các ngôn ngữ khác: trích dẫn kinh điển

## Tác giả

Ứng dụng được làm từ ❤️ bởi **Xuân Hải**  
Liên hệ: [https://ngxuanhai123.github.io/](https://ngxuanhai123.github.io/)

## Giấy phép

Dự án sử dụng giấy phép **MIT** – bạn có thể tự do sử dụng, chỉnh sửa, phân phối.

---

**HiHi Spelling – Luyện gõ chuẩn, nghe rõ, đọc to – Đua top cùng cả nước!** ✨
