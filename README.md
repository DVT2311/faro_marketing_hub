# FARO MKT Hub

Ứng dụng quản lý công việc nội bộ cho phòng Marketing của **FARO Coffee Inspiration**: kế hoạch campaign, giao việc, ngân sách, hợp tác và báo cáo tháng nằm chung một nơi.

## Vấn đề

Trước đây công việc marketing nằm rải rác ở nhiều nơi: kế hoạch trong file Excel, giao việc qua tin nhắn, ngân sách đề xuất và duyệt qua lời nói, báo cáo tháng tổng hợp thủ công. Hệ quả:

- BOD khó nắm nhanh tháng này đang chạy campaign gì, ai đang quá tải, việc nào trễ.
- Nhân sự không rõ việc nào được giao cho mình, hạn khi nào, đã được nhận hay chưa.
- Ngân sách đề xuất, duyệt và chi không để lại dấu vết; kế toán đối soát vất vả.
- Các chương trình hợp tác (collab) không có nơi theo dõi hạng mục và người phụ trách.
- Cuối tháng mất nhiều thời gian gom số liệu bài đăng, lượt xem, tỷ lệ tương tác để làm báo cáo.

## Giải pháp

Một ứng dụng web dùng được trên máy tính, tablet và điện thoại, chia quyền theo vai trò (BOD, Trưởng nhóm, Nhân sự marketing, Kế toán…).

| Khu vực | Giải quyết |
|---|---|
| **Tổng quan** | KPI tháng, tiến độ campaign, ngân sách còn lại, trạng thái từng nhân sự (trống lịch / đang xử lý / có việc trễ). |
| **Campaign** | Brief, thời gian, Lead, team, mục tiêu; xoá chủ động khi không còn dùng. |
| **Triển khai** | Giao việc kèm hạn chót, nhân sự xác nhận nhận việc, báo hoàn thành, trưởng nhóm duyệt hoặc trả lại. |
| **Ngân sách** | PIC của campaign đề xuất → BOD duyệt → PIC ghi nhận từng khoản chi → Kế toán đối soát có xác nhận; BOD bỏ đối soát phải ghi lý do và kế toán được báo để xem lại. |
| **Partnership** | Theo dõi chương trình hợp tác theo nhãn hàng, thời gian, hạng mục và PIC; PIC cập nhật tình trạng kèm kết quả (ghi chú, link, hình ảnh). |
| **Báo cáo** | Ghi nhận bài đăng theo nền tảng, tổng hợp view và tương tác theo campaign / nhân sự, chốt số liệu tháng, xuất file. |
| **Tài khoản** | Tạo tài khoản, cấp mật khẩu tạm, bắt đổi mật khẩu lần đầu, khoá tài khoản, tuỳ chỉnh vai trò và quyền. |
| **Thông báo** | Mỗi người thấy đúng việc cần mình xử lý: việc mới được giao, sắp đến hạn, khoản chờ duyệt, khoản cần đối soát… |

## Xem bản demo

Mở `index.html` bằng trình duyệt (hoặc qua GitHub Pages nếu đã bật). Bản demo chạy với dữ liệu mẫu, thay đổi không được lưu lại.

| Vai trò | Tên đăng nhập | Mật khẩu |
|---|---|---|
| BOD | `bod` | `faro123` |
| Trưởng nhóm | `hai` | `faro123` |
| Nhân sự marketing | `ngan`, `tho`, `tram.anh`… | `faro123` |
| Kế toán | `ketoan` | `faro123` |

> Bản công khai dùng font thay thế. Font thương hiệu (TT Norms Pro Serif, URW DIN) không được đính kèm vì giấy phép không cho phép phân phối trên web; máy nào đã cài sẵn các font này sẽ tự hiển thị đúng.

## Lộ trình

Bản hiện tại là bản demo để BOD và team dùng thử, góp ý. Bước tiếp theo là xây bản chính thức có cơ sở dữ liệu riêng của công ty, đăng nhập theo tài khoản nội bộ, thông báo đẩy về điện thoại và báo cáo theo mẫu KPI của phòng.

---
© 2026 FARO Coffee Inspiration · Phòng Marketing
