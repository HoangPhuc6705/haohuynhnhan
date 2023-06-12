// Tắt thông báo
for (let i = 0; i < 2; i++) {
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

for (let i = 0; i < 14; i++) {
    const inner = document.createElement('div');
    document.querySelectorAll('.NhanHao')[i].appendChild(inner);
}

// get the elements from the document
var container = document.querySelector('html');
var button = document.querySelector('.fullscrhover');

// define a function to toggle fullscreen mode
function toggleFullscreen() {
  // check if the document is in fullscreen mode
  if (document.fullscreenElement) {
    // exit fullscreen mode
    document.exitFullscreen();
  } else {
    // request fullscreen mode for the container element
    container.requestFullscreen();
  }
}
