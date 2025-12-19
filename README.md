HiHi Spelling - Luyện Chính Tả & Gõ Máy (Realtime Sync)
HiHi Spelling là một ứng dụng web Single Page Application (SPA) hiện đại giúp người dùng luyện tập kỹ năng gõ phím, chính tả và phát âm đa ngôn ngữ. Ứng dụng tích hợp công nghệ đồng bộ thời gian thực (Realtime Sync), bảng xếp hạng trực tuyến và giao diện Glassmorphism đẹp mắt.

✨ Tính Năng Nổi Bật
1. 🎮 Chế Độ Luyện Tập Đa Dạng
Ứng dụng cung cấp 4 chế độ rèn luyện phù hợp với mọi nhu cầu:

Nhìn & Chép (Read & Write): Luyện tốc độ gõ và độ chính xác qua văn bản hiển thị.

Nghe & Chép (Listen & Write): Ẩn văn bản, luyện kỹ năng nghe (Dictation) thông qua giọng đọc AI.

Nghe - Nhìn - Chép: Kết hợp cả thính giác và thị giác để tối ưu hóa việc học từ vựng.

Luyện Đọc (Read Only - Voice Recognition): Sử dụng Micro để chấm điểm phát âm của người dùng so với văn bản gốc.

2. 🌍 Hỗ Trợ Đa Ngôn Ngữ & Dịch Thuật
Hỗ trợ luyện tập các ngôn ngữ: Tiếng Việt, Tiếng Anh (Mỹ), Tiếng Indonesia, Tây Ban Nha, Ý, và Latin.

Tích hợp từ điển: Hover (di chuột) vào từ vựng để xem nghĩa tiếng Việt ngay lập tức (sử dụng API dịch thuật).

Text-to-Speech (TTS): Hỗ trợ giọng đọc Google (chuẩn bản xứ) và giọng đọc hệ thống (System Voice) với khả năng điều chỉnh tốc độ đọc (0.75x - 1.5x).

3. 🏆 Gamification & Bảng Xếp Hạng Realtime
Hệ thống tính điểm thông minh: Dựa trên WPM (Words Per Minute), độ chính xác (Accuracy), và điểm siêng năng (thời gian luyện tập).

Leaderboard: Bảng xếp hạng đồng bộ thời gian thực qua Firebase Realtime Database.

Cấp độ (Ranking): Tự động phong cấp hiệu từ Tân binh đến Huyền Thoại dựa trên tốc độ gõ.

Reset định kỳ: Dữ liệu bảng xếp hạng được tổ chức theo từng tháng.

4. 💻 Giao Diện & Trải Nghiệm (UI/UX)
Glassmorphism Design: Giao diện kính mờ hiện đại, hiệu ứng nền Aurora chuyển động.

Hiệu ứng hạt (Particles): Tạo cảm giác sinh động.

Karaoke Highlighting: Chữ đổi màu theo giọng đọc (trong chế độ nghe).

Dark/Light Mode: Chuyển đổi giao diện Sáng/Tối linh hoạt.

Responsive: Tương thích tốt trên cả máy tính và điện thoại di động.

5. 🔐 Hệ Thống Tài Khoản
Đăng nhập nhanh qua Google (Firebase Auth).

Chế độ Khách (Guest) cho người dùng muốn trải nghiệm nhanh không cần lưu thành tích lâu dài.

🛠 Công Nghệ Sử Dụng
Dự án được xây dựng thuần túy với HTML/CSS/JS mà không cần framework nặng nề, đảm bảo tốc độ tải trang siêu nhanh.

Frontend:

HTML5, CSS3 (CSS Variables, Animations, Flexbox/Grid).

JavaScript (ES6 Modules).

Thư viện: Chart.js (biểu đồ), Animate.css (hiệu ứng), FontAwesome (icon).

Backend / Cloud:

Firebase Authentication: Quản lý đăng nhập Google.

Firebase Realtime Database: Lưu trữ điểm số và đồng bộ bảng xếp hạng.

Firebase Analytics: Theo dõi lượt truy cập.

API Khác:

Web Speech API: Nhận diện giọng nói (Speech-to-Text) và tổng hợp giọng nói (Text-to-Speech).

Google Translate TTS: API giọng đọc không chính thức (có fallback sang System Voice).

MyMemory Translation API: Dịch từ vựng thời gian thực.

🚀 Hướng Dẫn Cài Đặt & Chạy
Do dự án là một file HTML duy nhất (index.html) nhưng có sử dụng các module ES6 và Firebase Auth, bạn cần chạy qua một local server (môi trường http:// hoặc https://, không chạy trực tiếp file://).

Cách 1: Sử dụng VS Code (Khuyên dùng)
Tải file index.html về máy.

Cài đặt Extension Live Server trong VS Code.

Chuột phải vào file index.html chọn "Open with Live Server".

Cách 2: Sử dụng Python
Nếu bạn đã cài Python, mở terminal tại thư mục chứa file và chạy:

Bash

python -m http.server 8000
Sau đó truy cập: http://localhost:8000

Cách 3: Deploy lên Firebase Hosting
Cài đặt Firebase CLI: npm install -g firebase-tools

Đăng nhập: firebase login

Khởi tạo: firebase init (Chọn Hosting).

Copy file index.html vào thư mục public (đổi tên thành index.html nếu cần).

Deploy: firebase deploy

📖 Hướng Dẫn Sử Dụng
Thiết lập:

Chọn ngôn ngữ muốn luyện (Ví dụ: Tiếng Indonesia).

Chọn chế độ chơi (Ví dụ: Nghe & Chép).

Chọn nguồn bài mẫu hoặc tự nhập văn bản của bạn (Paste bài thơ/văn vào ô nhập).

Bắt đầu: Nhấn nút "Bắt đầu luyện tập".

Trong khi chơi:

Gõ lại nội dung vào ô input.

Nếu sai, chữ sẽ hiện màu đỏ. Nếu đúng, chữ hiện màu xanh.

Sử dụng nút "Gợi ý" (bóng đèn) nếu bí từ (sẽ bị trừ điểm).

Kết thúc:

Xem thống kê WPM, độ chính xác.

Hệ thống tự động lưu điểm lên BXH nếu bạn đã đăng nhập.

🤝 Đóng Góp (Contributing)
Dự án được phát triển bởi Hải. Mọi đóng góp, báo lỗi hoặc yêu cầu tính năng mới đều được hoan nghênh.

Mở Pull Request.

📄 License
Dự án này được chia sẻ miễn phí cho mục đích học tập.

Made with ❤️ by Hải
