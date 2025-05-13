import { fetchReservationNoticesDto } from "./dto/fetchReservationNoticesDto";

// 임시 데모 데이터
const mockNotices: fetchReservationNoticesDto[] = [
  {
    id: "1",
    type: false, // 중요 공지
    title: "2024-1학기 강의실 사용 수칙 안내",
    created_at: "2024-03-15",
  },
  {
    id: "2",
    type: false, // 중요 공지
    title: "강의실 냉난방 시설 공사 안내",
    created_at: "2024-03-14",
  },
  {
    id: "3",
    type: true, // 일반 공지
    title: "프로젝터 리모컨 위치 변경",
    created_at: "2024-03-13",
  },
  {
    id: "4",
    type: true, // 일반 공지
    title: "강의실 의자 교체 완료",
    created_at: "2024-03-10",
  },
  {
    id: "5",
    type: true, // 일반 공지
    title: "강의실 콘센트 증설",
    created_at: "2024-03-08",
  },
];

export const fetchReservationNotices = async () => {
  // API 호출을 시뮬레이션하기 위한 지연
  return new Promise<fetchReservationNoticesDto[]>((resolve) => {
    setTimeout(() => {
      resolve(mockNotices);
    }, 500); // 0.5초 지연
  });
};
