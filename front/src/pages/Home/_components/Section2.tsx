import { useReservation } from "../../../context/ReservationContext";

const Section2: React.FC = () => {
  const { scheduleData } = useReservation();

  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  // 사용자 이름을 익명화하는 함수
  const anonymizeUser = (name: string) => {
    if (!name) return name;
    return name[0] + "O".repeat(name.length - 1);
  };

  // 현재 시간을 "HH:mm" 형식으로 가져오는 함수
  const getCurrentTime = (): string => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  // 일정이 종료되었는지 확인하는 함수
  const isScheduleEnded = (endTime: string): boolean => {
    return endTime < getCurrentTime();
  };

  // 현재 진행 중인 일정인지 확인하는 함수
  const isCurrentlyActive = (startTime: string, endTime: string): boolean => {
    const currentTime = getCurrentTime();
    return startTime <= currentTime && currentTime <= endTime;
  };

  // 일정 항목의 스타일을 결정하는 함수
  const getScheduleItemStyle = (item: (typeof scheduleData)[0]): string => {
    if (isScheduleEnded(item.end_time)) {
      return "opacity-20 bg-white";
    }
    if (isCurrentlyActive(item.start_time, item.end_time)) {
      return item.type === "lecture" ? "bg-purple/20" : "bg-yellow/20";
    }
    return "bg-white";
  };

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <p className="text-xl font-semibold mb-8 text-center">
        [{import.meta.env.VITE_BUILDING_NAME}{" "}
        {import.meta.env.VITE_ROOM_NUMBER || "101호"}] {today} 강의실 이용
        시간표
      </p>

      {/* 스크롤이 필요한 리스트 영역 */}
      <div className="w-full max-w-5xl h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-lg border border-gray p-2">
        <ul className="space-y-2">
          {scheduleData.length > 0 ? (
            scheduleData.map((item, index) => (
              <li
                key={index}
                className={`grid grid-cols-4 items-center p-4 border border-gray rounded-lg shadow-sm ${getScheduleItemStyle(
                  item
                )}`}
              >
                <span className="font-medium text-lg">
                  {item.start_time}~{item.end_time}
                </span>
                <span
                  className={`px-3 py-1 text-white rounded-3xl text-sm font-semibold text-center w-16 ${
                    item.type === "lecture" ? "bg-purple" : "bg-yellow"
                  }`}
                >
                  {item.type === "lecture" ? "강의" : "예약"}
                </span>
                <span className="font-medium text-lg text-center">
                  {item.type === "lecture" ? item.subject : item.purpose}
                </span>
                <span className="text-lg text-right">
                  {item.type === "lecture"
                    ? item.professor
                    : anonymizeUser(item.user)}
                </span>
              </li>
            ))
          ) : (
            <li className="text-center p-4">강의실 일정이 없습니다.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Section2;
