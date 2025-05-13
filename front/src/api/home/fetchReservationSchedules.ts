import { fetchReservationSchedulesDto } from "./dto/fetchReservationSchedulesDto";

// 임시 데이터
const mockData: fetchReservationSchedulesDto[] = [
  {
    type: "lecture",
    start_time: "09:00",
    end_time: "10:15",
    subject: "웹 프로그래밍",
    professor: "김교수",
  },
  {
    type: "reservation",
    start_time: "10:30",
    end_time: "12:00",
    purpose: "팀 프로젝트 회의",
    user: "이학생",
  },
  {
    type: "lecture",
    start_time: "13:00",
    end_time: "14:15",
    subject: "소프트웨어 공학",
    professor: "박교수",
  },
  {
    type: "reservation",
    start_time: "15:00",
    end_time: "16:30",
    purpose: "스터디 모임",
    user: "최학생",
  },
  {
    type: "lecture",
    start_time: "15:30",
    end_time: "18:15",
    subject: "알고리즘",
    professor: "정교수",
  },
  {
    type: "reservation",
    start_time: "18:30",
    end_time: "20:00",
    purpose: "취업 준비 모임",
    user: "박학생",
  },
];

export const fetchReservationSchedules = async (
  building: string,
  room: string,
  date: string
) => {
  // API 호출 정보를 콘솔에 출력
  console.log(`Fetching schedules for ${building} ${room} on ${date}`);

  // 실제 API 호출 대신 임시 데이터 반환
  return new Promise<fetchReservationSchedulesDto[]>((resolve) => {
    setTimeout(() => {
      console.log(`Returning mock data for ${building} ${room}`);
      resolve(mockData);
    }, 500);
  });

  // 실제 API 구현시 아래 코드 사용
  /*
  try {
    const response = await fetch("/api/classroom-reservation", {
      method: "POST",
      body: JSON.stringify({ building: _building, room: _room, date: _date }),
    });

    if (!response.ok) {
      throw new Error("데이터를 가져오는 데 실패했습니다.");
    }

    const data: fetchReservationSchedulesDto[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch reservation notices:", error);
    throw error;
  }
  */
};
