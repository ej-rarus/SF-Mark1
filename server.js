// index.js
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// 포트 설정
const PORT = 3001;

app.use(cors());
// 라우터

// 기본 경로에 대한 요청 처리
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/control', (req, res) => {
    res.sendFile(path.join(__dirname, 'control.html'));
});

app.get('/etc', (req, res) => {
    res.sendFile(path.join(__dirname, 'etc.html'));
});

app.get('/monitor', (req, res) => {
    res.sendFile(path.join(__dirname, 'monitor.html'));
});

app.get('/sign_in', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign_in.html'));
});

app.get('/sign_up', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign_up.html'));
});


// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
