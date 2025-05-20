import { fetchReservationNoticeDetailDto } from "./dto/fetchReservationNoticeDetailDto";

export const fetchReservationNoticeDetail = async (noticeId: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/notice-detail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: noticeId }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || "데이터를 가져오는 데 실패했습니다."
      );
    }

    const data: fetchReservationNoticeDetailDto = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch reservation notice detail", error);
    throw error;
  }
};
