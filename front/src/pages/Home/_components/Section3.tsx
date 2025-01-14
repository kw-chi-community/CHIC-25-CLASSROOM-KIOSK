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
    <div>
      <div>
        <p>공지사항</p>
        <Link to="/notice">
          <ImgButton imgSrc="/path/to/notice-icon.png" />
        </Link>
      </div>
      <div>
        <p>예약하기</p>
        <ImgButton
          imgSrc="/path/to/reservation-icon.png"
          onClick={handleReservationClick}
        />
      </div>

      {/* 팝업 구현 */}
      {isPopupVisible && (
        <div>
          <div>
            <p>예약 팝업 내용입니다.</p>
            <button onClick={closePopup}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section3;
