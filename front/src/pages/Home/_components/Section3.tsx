import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, CalendarCheck, X } from "lucide-react";

const Section3: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleReservationClick = () => {
    setPopupVisible(true); // 팝업 열기
  };

  const closePopup = () => {
    setPopupVisible(false); // 팝업 닫기
  };

  return (
    <div className="flex flex-col items-center justify-center gap-24 h-full">
      <Link
        to="/notice"
        className="flex flex-col items-center hover:text-purple transition-colors duration-200 ease-in-out cursor-pointer"
      >
        <p className="text-xl mb-4">공지사항</p>
        <Bell size={120} strokeWidth={1.5} />
      </Link>
      <div
        className="flex flex-col items-center hover:text-purple transition-colors duration-200 ease-in-out cursor-pointer"
        onClick={handleReservationClick}
      >
        <p className="text-xl mb-4">예약 QR</p>
        <CalendarCheck size={120} strokeWidth={1.5} />
      </div>

      {/* 팝업 구현 */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="relative flex flex-col items-center bg-transparent text-white">
            {/* 닫기 버튼 */}
            <button
              className="fixed top-5 right-5 text-white text-3xl"
              onClick={closePopup}
            >
              <X size={50} />
            </button>
            {/* 팝업 텍스트 */}
            <p className="text-2xl font-bold text-center mb-3">
              QR코드를 스캔해 강의실을 예약하세요.
            </p>
            <p className="text-xl">{"> 강의실 예약 사이트로 이동"}</p>
            {/* QR 코드 */}
            <img
              className="w-80 h-80 mt-4"
              src="/sample/qr-image.png"
              alt="QR Code"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section3;
