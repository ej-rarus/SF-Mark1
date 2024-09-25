// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // dotenv 패키지 불러오기
const path = require('path');


const app = express();

// 포트 설정
const PORT = 80;
app.use(cors()); // CORS 오류 대응

// HTML 파일을 서비스할 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, 'public')));


// 라우터

// 기본 경로에 대한 요청 처리
app.get('/', (req, res) => {
    res.send('Express 서버가 실행 중입니다!');
});

app

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
