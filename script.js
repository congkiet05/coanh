document.getElementById('btnCheckPassword').addEventListener('click', function() {
    const correctPassword = 'coanhcute'; // Mật khẩu đúng
    const inputPassword = document.getElementById('passwordInput').value;
    
    // Nếu mật khẩu đúng, chuyển sang trang chúc mừng
    if (inputPassword === correctPassword) {
        window.location.href = 'chucmung.html'; // Chuyển đến trang chúc mừng
    } else {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Mật khẩu không đúng. Vui lòng thử lại.';
        messageElement.style.color = '#ff0000'; // Đổi màu thông báo lỗi
    }
});
