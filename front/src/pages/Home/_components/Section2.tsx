import { useEffect, useState } from "react";
import { useRoom } from "../../../context/RoomContext";
import { fetchScheduleData } from "../api/fetchScheduleData";

// 강의 및 예약 데이터 타입 정의
interface ScheduleEntry {
  start: string;
  end: string;
  type: "강의" | "예약";
  title: string;
  professor?: string;
  reserver?: string;
}

const Section2: React.FC = () => {
  const { roomNumber } = useRoom();
  const [scheduleData, setScheduleData] = useState<ScheduleEntry[]>([]);

  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  // API 호출하여 scheduleData 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchScheduleData(roomNumber);
      setScheduleData(data);
    };

    fetchData();
  }, [roomNumber]);

  return (
    <div className="p-6">
      <p className="text-lg font-semibold mb-4 text-center">
        [새빛관 {roomNumber}호] {today} 강의실 이용 시간표
      </p>
      <ul className="space-y-2">
        {scheduleData.length > 0 ? (
          scheduleData.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-4 items-center p-4 border rounded-lg bg-white shadow-sm"
            >
              <span className="font-medium text-lg">
                {item.start}~{item.end}
              </span>
              <span
                className={`px-3 py-1 text-white rounded-3xl text-sm font-semibold text-center w-16 ${
                  item.type === "강의" ? "bg-blue-500" : "bg-orange-400"
                }`}
              >
                {item.type}
              </span>
              <span className="font-medium text-lg text-center">
                {item.title}
              </span>
              <span className="text-gray-600 text-lg text-right">
                {item.type === "강의" ? item.professor : item.reserver}
              </span>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-600 p-4">
            강의실 일정이 없습니다.
          </li>
        )}
      </ul>
    </div>
  );
};

export default Section2;
