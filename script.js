// Tắt thông báo
for (let i = 0; i < 3; i++) {
    document.querySelectorAll('.close')[i].onclick = function() {
        document.querySelectorAll('.notice')[i].style.display = 'none';
    }
}

// // Hàm để cuộn trang xuống vị trí mục cuối cùng
// function scrollToBottom() {

//     // Lấy đối tượng mục cuối cùng theo id
//     let lastItem = document.querySelectorAll('.NhanHao')[words.length - 3];

//     lastItem.scrollIntoView({ behavior: "smooth" });
// }

// // Cuộn trang xuống phần tải về
// function scrollToBottomDown() {

//     // Lấy đối tượng mục cuối cùng theo id
//     let lastItem = document.querySelector('.down');

//     lastItem.scrollIntoView({ behavior: "smooth" });
// }