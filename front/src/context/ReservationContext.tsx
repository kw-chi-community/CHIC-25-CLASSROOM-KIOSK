import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchReservationSchedules } from "../api/home/fetchReservationSchedules";
import { fetchReservationSchedulesDto } from "../api/home/dto/fetchReservationSchedulesDto";

interface ReservationContextType {
  scheduleData: fetchReservationSchedulesDto[];
  currentStatus: fetchReservationSchedulesDto | null;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

export const ReservationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [scheduleData, setScheduleData] = useState<
    fetchReservationSchedulesDto[]
  >([]);
  const [currentStatus, setCurrentStatus] =
    useState<fetchReservationSchedulesDto | null>(null);

  // 현재 시간을 "HH:mm" 형식으로 가져오는 함수
  const getCurrentTime = (): string => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  // 현재 날짜를 "YYYY-MM-DD" 형식으로 가져오는 함수
  const getCurrentDate = (): string => {
    const now = new Date();
    return now.toISOString().split("T")[0];
  };
  console.log("getCurrentDate"getCurrentDate());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReservationSchedules(
          import.meta.env.VITE_BUILDING_NAME || "",
          import.meta.env.VITE_ROOM_NUMBER || "",
          getCurrentDate()
        );
        setScheduleData(data);

        // 현재 시간과 예약된 시간 비교
        const now = getCurrentTime();
        const activeSession = data.find(
          (session) => session.start_time <= now && session.end_time >= now
        );
        setCurrentStatus(activeSession ?? null);
      } catch (error) {
        console.error("스케줄 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData(); // 첫 실행

    // 현재 시간과 자정까지 남은 시간 계산
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    // 자정에 실행할 setTimeout 설정
    const timeoutId = setTimeout(() => {
      fetchData();
      const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
    }, timeUntilMidnight);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ReservationContext.Provider value={{ scheduleData, currentStatus }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = (): ReservationContextType => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};
