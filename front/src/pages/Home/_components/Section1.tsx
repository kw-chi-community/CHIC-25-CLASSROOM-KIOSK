import { useState, useEffect } from "react";
import { fetchScheduleData } from "../api/fetchScheduleData";
import { useRoom } from "../../../context/RoomContext"; // 전역 roomNumber 사용

// 강의 및 예약 데이터 타입 정의
interface ScheduleEntry {
  start: string;
  end: string;
  type: "강의" | "예약";
  title: string;
  professor?: string;
  reserver?: string;
}

const Section1: React.FC = () => {
  const { roomNumber } = useRoom(); // 전역 상태에서 roomNumber 가져오기
  const [currentStatus, setCurrentStatus] = useState<ScheduleEntry | null>(
    null
  );
  const [scheduleData, setScheduleData] = useState<ScheduleEntry[]>([]);

  // 현재 시간을 "HH:mm" 형식으로 가져오는 함수
  const getCurrentTime = (): string => {
    const now = new Date();
    return (
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0")
    );
  };

  // API를 호출하여 scheduleData를 불러오는 함수
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchScheduleData(roomNumber);
      setScheduleData(data);
    };

    fetchData();
  }, [roomNumber]); // roomNumber가 변경될 때마다 API 호출

  // 현재 시간과 예약된 시간 비교
  useEffect(() => {
    const now = getCurrentTime();

    const activeSession = scheduleData.find(
      (session) => session.start <= now && session.end >= now
    );

    setCurrentStatus(activeSession ?? null);
  }, [scheduleData]); // scheduleData가 변경될 때마다 실행

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
