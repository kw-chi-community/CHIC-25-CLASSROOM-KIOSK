import { fetchReservationSchedulesDto } from "./dto/fetchReservationSchedulesDto";

export const fetchReservationSchedules = async (
  building: string,
  room: string,
  date: string
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/classroom-reservation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ building, room, date }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || "데이터를 가져오는 데 실패했습니다."
      );
    }

    const data: fetchReservationSchedulesDto[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch reservation notices:", error);
    throw error;
  }
};
