import { useState } from "react";
import { Link } from "react-router-dom";
import ImgButton from "../../../components/ImgButton";

const Section3: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleReservationClick = () => {
    setPopupVisible(true); // 팝업 열기
  };

  const closePopup = () => {
    setPopupVisible(false); // 팝업 닫기
  };

  return (
    <div className="flex flex-col items-center justify-center gap-36 h-full">
      <div className="flex flex-col items-center">
        <p className="text-xl mb-4">공지사항</p>
        <Link to="/notice" className="w-28 h-28">
          <ImgButton imgSrc="/image/notice-icon.png" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl mb-4">예약 QR</p>
        <div className="w-28 h-28">
          <ImgButton
            imgSrc="/image/reservation-icon.png"
            onClick={handleReservationClick}
          />
        </div>
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
              ✖
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
