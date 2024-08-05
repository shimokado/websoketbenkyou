// socket.ioを使ってサーバーと通信する
// サーバーからのメッセージを受け取り、画面に表示する
// サーバーにメッセージを送信する

const socket = io();

// サーバーにメッセージを送信する
function sendMessage() {
  const message = document.querySelector('#message').value;
  socket.emit('new message', message);
}

// サーバーからのメッセージを受け取り、画面に表示する
socket.on('new message', message => {
  const messageUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.textContent = message;
  messageUl.appendChild(li);
});