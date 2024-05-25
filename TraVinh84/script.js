document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form được gửi đi mặc định

    // Lấy giá trị từ ô nhập liệu
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === "admin" && password === "12345") {
        // Nếu đúng, chuyển hướng đến trang chính
        window.location.href = "dashboard.html";
    } else {
        // Nếu sai, hiển thị thông báo lỗi
        document.getElementById("error-message").innerText = "Tên đăng nhập hoặc mật khẩu không đúng.";
    }
});
