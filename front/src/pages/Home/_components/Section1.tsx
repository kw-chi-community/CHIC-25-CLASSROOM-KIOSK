import { useReservation } from "../../../context/ReservationContext";

const Section1: React.FC = () => {
  const { currentStatus } = useReservation();

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
              currentStatus.type === "reservation" ? "bg-yellow" : "bg-purple"
            }`}
          >
            {currentStatus.type === "reservation" ? "예약" : "강의"}
          </span>
          <span className="font-medium text-xl">
            {" "}
            {currentStatus.type === "reservation"
              ? currentStatus.purpose
              : currentStatus.subject}
          </span>
        </div>
      ) : (
        <div className="text-center text-xl font-semibold">
          지금은 사용자가 없습니다. QR코드를 스캔해 강의실을 예약하세요.
        </div>
      )}
    </div>
  );
};

export default Section1;
