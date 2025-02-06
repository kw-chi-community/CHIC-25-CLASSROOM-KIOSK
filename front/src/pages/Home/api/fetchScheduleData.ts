import { ScheduleDTO } from "../_components/ScheduleDTO";
// import axios from "axios";

// 스케줄 데이터를 불러오는 API 함수
// export const fetchScheduleData = async (
//   roomNumber: string
// ): Promise<ScheduleDTO[]> => {
//   try {
//     // 오늘 날짜를 YYYY-MM-DD 형식으로 변환
//     const today = new Date().toISOString().split("T")[0];

//     const response = await axios.get(`/api/status`, {
//       params: {
//         roomNumber,
//         date: today, // YYYY-MM-DD 형식의 날짜 추가
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching schedule data:", error);
//     return [];
//   }
// };

export const fetchScheduleData = async (
  roomNumber: string
): Promise<ScheduleDTO[]> => {
  try {
    console.log(`Fetching schedule data for room ${roomNumber}...`);

    // Mock 데이터 반환
    return [
      {
        startTime: "00:00",
        endTime: "11:45",
        type: "강의",
        title: "웹서비스설계및실습",
        professor: "김교수",
      },
      {
        startTime: "13:00",
        endTime: "15:00",
        type: "예약",
        title: "동아리 회의",
        reserver: "박OO",
      },
      {
        startTime: "15:30",
        endTime: "17:30",
        type: "강의",
        title: "데이터베이스",
        professor: "이교수",
      },
      {
        startTime: "18:00",
        endTime: "20:00",
        type: "예약",
        title: "CHIC 중간총회",
        reserver: "손O현",
      },
      {
        startTime: "20:30",
        endTime: "23:00",
        type: "강의",
        title: "인공지능 개론",
        professor: "최교수",
      },
      {
        startTime: "20:30",
        endTime: "23:00",
        type: "강의",
        title: "인공지능 개론",
        professor: "최교수",
      },
      {
        startTime: "20:30",
        endTime: "23:00",
        type: "강의",
        title: "인공지능 개론",
        professor: "최교수",
      },
      {
        startTime: "20:30",
        endTime: "23:00",
        type: "강의",
        title: "인공지능 개론",
        professor: "최교수",
      },
    ];
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    return [];
  }
};
