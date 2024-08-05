const port = 7700;

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

//サーバーを作成
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ルートにアクセスした時にpublicディレクトリを公開
app.use(express.static('public'));

// クライアントからの接続を待つ
io.on('connection', socket => {
    // クライアント接続ログと接続者のIDを表示
    console.log("クライアントが接続しました: " + socket.id);

    // クライアントからのメッセージを受信
    socket.on('new message', message => {
        console.log('新しいメッセージが届きました: ' + message);
        // すべてのクライアントにメッセージを送信
        io.emit('new message', message);
    });
});

// サーバーを起動
server.listen(port, () => {
    console.log('サーバーを起動しました。:' + port);
});