// import axios from "axios";

// ScheduleEntry 타입 정의
interface ScheduleEntry {
  start: string; // 시작 시간 (HH:mm)
  end: string; // 종료 시간 (HH:mm)
  type: "강의" | "예약"; // 강의 or 예약
  title: string; // 강의 또는 예약 제목
  professor?: string; // 강의인 경우 교수 이름
  reserver?: string; // 예약인 경우 예약자 이름
}

// 스케줄 데이터를 불러오는 API 함수
// export const fetchScheduleData = async (
//   roomNumber: string
// ): Promise<ScheduleEntry[]> => {
//   try {
//     const response = await axios.get(`/api/schedule?roomNumber=${roomNumber}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching schedule data:", error);
//     return [];
//   }
// };

export const fetchScheduleData = async (
  roomNumber: string
): Promise<ScheduleEntry[]> => {
  try {
    console.log(`Fetching schedule data for room ${roomNumber}...`);

    // Mock 데이터 반환
    return [
      {
        start: "09:00",
        end: "11:45",
        type: "강의",
        title: "웹서비스설계및실습",
        professor: "김교수",
      },
      {
        start: "13:00",
        end: "15:00",
        type: "예약",
        title: "동아리 회의",
        reserver: "박OO",
      },
      {
        start: "15:30",
        end: "17:30",
        type: "강의",
        title: "데이터베이스",
        professor: "이교수",
      },
      {
        start: "18:00",
        end: "20:00",
        type: "예약",
        title: "CHIC 중간총회",
        reserver: "손O현",
      },
      {
        start: "20:30",
        end: "22:00",
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
