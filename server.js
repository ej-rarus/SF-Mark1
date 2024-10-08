// index.js
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// 포트 설정
const PORT = 3001;

app.use(cors());
// 라우터

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로에 대한 요청 처리

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });



// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
