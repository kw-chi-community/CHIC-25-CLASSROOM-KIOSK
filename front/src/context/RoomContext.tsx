import { createContext, useContext, useState, ReactNode } from "react";

// RoomContext 타입 정의
interface RoomContextType {
  roomNumber: string;
  setRoomNumber: (room: string) => void;
}

// Context 생성
const RoomContext = createContext<RoomContextType | undefined>(undefined);

// Context Provider
export const RoomProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [roomNumber, setRoomNumber] = useState<string>("101"); // 강의실 호수를  101로 지정

  return (
    <RoomContext.Provider value={{ roomNumber, setRoomNumber }}>
      {children}
    </RoomContext.Provider>
  );
};

// 커스텀 훅 생성 (Context 사용을 쉽게 하기 위함)
export const useRoom = (): RoomContextType => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom must be used within a RoomProvider");
  }
  return context;
};
