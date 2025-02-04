import { useState, useEffect } from "react";

// 강의 및 예약 데이터 타입 정의
interface ScheduleEntry {
  start: string; // 시작 시간 (HH:mm)
  end: string; // 종료 시간 (HH:mm)
  type: "강의" | "예약"; // 강의 or 예약
  title: string; // 강의 또는 예약 제목
  professor?: string; // 강의인 경우 교수 이름
  reserver?: string; // 예약인 경우 예약자 이름
}

const Section1: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<ScheduleEntry | null>(
    null
  );

  // 현재 시간을 "HH:mm" 형식으로 가져오는 함수
  const getCurrentTime = (): string => {
    const now = new Date();
    return (
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0")
    );
  };

  // 강의실 예약 데이터
  const scheduleData: ScheduleEntry[] = [
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

  useEffect(() => {
    const now = getCurrentTime();

    // 현재 시간과 예약된 시간 비교
    const activeSession = scheduleData.find(
      (session) => session.start <= now && session.end >= now
    );

    setCurrentStatus(activeSession ?? null);
  }, []);

  return (
    <div
      className={`flex items-center h-full ${
        currentStatus ? "justify-start px-10" : "justify-center"
      }`}
    >
      {currentStatus ? (
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-xl">사용중</span>
          <span
            className={`px-5 py-1 text-white rounded-3xl text-base font-semibold ${
              currentStatus.type === "강의" ? "bg-blue-500" : "bg-orange-400"
            }`}
          >
            {currentStatus.type}
          </span>
          <span className="font-medium text-xl">{currentStatus.title}</span>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-xl font-semibold">
          지금은 사용자가 없습니다. QR코드를 스캔해 강의실을 예약하세요.
        </div>
      )}
    </div>
  );
};

export default Section1;
