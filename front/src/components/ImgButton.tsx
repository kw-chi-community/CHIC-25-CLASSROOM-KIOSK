import React from "react";

interface ImgButtonProps {
  imgSrc: string; // 버튼에 들어갈 이미지
  onClick?: () => void; // 버튼 클릭 시 동작
}

const ImgButton: React.FC<ImgButtonProps> = ({ imgSrc, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={imgSrc} alt="버튼 이미지" />
    </button>
  );
};

export default ImgButton;
