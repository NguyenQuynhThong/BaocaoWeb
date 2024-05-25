document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form được gửi đi mặc định

    // Lấy giá trị từ ô nhập liệu
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    // Kiểm tra nếu tên đăng nhập và mật khẩu không rỗng
    if (newUsername.trim() !== "" && newPassword.trim() !== "") {
        // Hiển thị thông báo đăng ký thành công
        document.getElementById("registration-success").innerText = "Đăng ký thành công!";

        // Tạo đối tượng user chứa thông tin đăng ký
        var user = {
            username: newUsername,
            password: newPassword
        };

        // Lưu thông tin đăng ký vào local storage hoặc database
        // Ở đây chỉ là một ví dụ đơn giản, bạn cần thay đổi để lưu vào cơ sở dữ liệu thực tế
        localStorage.setItem("registeredUser", JSON.stringify(user));

        // Xóa giá trị từ ô nhập liệu
        document.getElementById("new-username").value = "";
        document.getElementById("new-password").value = "";
    } else {
        // Hiển thị thông báo lỗi nếu có ô nhập liệu trống
        document.getElementById("registration-error").innerText = "Tên đăng nhập và mật khẩu không được để trống.";
    }
});
