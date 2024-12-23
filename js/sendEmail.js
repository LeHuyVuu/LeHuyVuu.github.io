(function () {
    emailjs.init("PL8gMYLSA7J6k-atS"); // Khởi tạo EmailJS với Public Key
})();

function sendEmail() {
    // Hiển thị loader
    document.getElementById("loader").style.display = "flex";

    // Lấy dữ liệu từ các trường trong form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        document.getElementById("loader").style.display = "none";
        return;
    }

    // Gửi email qua EmailJS
    emailjs.send("service_p1co6e9", "template_8lnoa8h", {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(function (response) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset(); // Reset form
        document.getElementById("loader").style.display = "none"; // Ẩn loader
    })
    .catch(function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Check the console for more details.");
        document.getElementById("loader").style.display = "none"; // Ẩn loader
    });
}
