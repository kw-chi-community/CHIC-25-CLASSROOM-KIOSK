const Section2: React.FC = () => {
  const roomNumber = import.meta.env.VITE_ROOM_NUMBER;

  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  const scheduleData = [
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

  return (
    <div className="p-6">
      <p className="text-lg font-semibold mb-4 text-center">
        [새빛관 {roomNumber}호] {today} 강의실 이용 시간표
      </p>
      <ul className="space-y-2">
        {scheduleData.map((item, index) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Section2;
