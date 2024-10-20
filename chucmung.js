// Mảng chứa các lời chúc
const messages = [
    'Chúc cô Ánh có một ngày 20/10 thật hạnh phúc và tràn đầy niềm vui!',
    'Chúc cô Ánh luôn xinh đẹp, tự tin và yêu đời!',
    'Mong cô Ánh luôn mạnh mẽ, thành công và yêu thương bản thân mình!',
    'Chúc cô Ánh một ngày 20/10 thật ngọt ngào và đáng nhớ!',
    'Chúc cô Ánh luôn toả sáng và đạt được mọi ước mơ trong cuộc sống!',
];

// Hàm hiển thị tất cả lời chúc
function displayMessages() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = ''; // Xóa nội dung cũ
    
    let messageIndex = 0; // Bắt đầu từ lời chúc đầu tiên
    
    // Hàm để hiển thị từng lời chúc một
    function showMessage() {
        if (messageIndex < messages.length) {
            let currentMessage = messages[messageIndex]; // Lời chúc hiện tại
            let i = 0;
            
            // Hàm để hiện từng chữ trong lời chúc
            function typeEffect() {
                if (i < currentMessage.length) {
                    messageElement.textContent += currentMessage.charAt(i);
                    i++;
                    setTimeout(typeEffect, 50); // Tốc độ gõ từng chữ
                } else {
                    messageElement.textContent += '\n'; // Xuống dòng sau khi hoàn thành lời chúc
                    messageIndex++; // Chuyển sang lời chúc tiếp theo
                    setTimeout(showMessage, 500); // Chờ 500ms rồi hiển thị lời chúc tiếp theo
                }
            }

            typeEffect();
        }
    }

    showMessage(); // Bắt đầu hiển thị lời chúc
}

// Khi trang được tải, gọi hàm để hiển thị lời chúc
window.onload = displayMessages;
