require('dotenv').config();
const express = require('express');
const cors = require('cors');

// DB 연결
const { userDB, classDB, noticeDB, studentDB } = require('./db/mongodb');

const app = express();
app.use(cors());
app.use(express.json());

// 라우터 등록
app.use("/api", require("./routes/classroomReservation.js"));

// 서버 실행
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});