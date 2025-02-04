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
    <div className="flex flex-col items-center justify-center gap-20 h-full">
      <div className="flex flex-col items-center">
        <p className="text-lg mb-4">공지사항</p>
        <Link to="/notice" className="w-24 h-24">
          <ImgButton imgSrc="/image/notice-icon.png" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg mb-4">예약 QR</p>
        <div className="w-24 h-24">
          <ImgButton
            imgSrc="/image/reservation-icon.png"
            onClick={handleReservationClick}
          />
        </div>
      </div>

      {/* 팝업 구현 */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <p>큐알코드를 찍어 강의실 예약 사이트로 이동하세요!</p>
            <img
              className="mb-2 m-auto"
              src="/sample/qr-image.png"
              alt="QR Code"
            />
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm mt-3"
              onClick={closePopup}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section3;
