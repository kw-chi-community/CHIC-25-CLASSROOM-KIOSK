import { fetchReservationSchedulesDto } from "./dto/fetchReservationSchedulesDto";

export const fetchReservationSchedules = async (
  building: string,
  room: string,
  date: string
) => {
  try {
    const response = await fetch("/api/classroom-reservation", {
      method: "POST",
      body: JSON.stringify({ building, room, date }),
    });

    if (!response.ok) {
      throw new Error("데이터를 가져오는 데 실패했습니다.");
    }

    const data: fetchReservationSchedulesDto[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch reservation notices:", error);
    throw error;
  }
};
