import { fetchReservationNoticeDetailDto } from "./dto/fetchReservationNoticeDetailDto";

// 임시 데모 데이터
const mockNoticeDetails: Record<string, fetchReservationNoticeDetailDto> = {
  "1": {
    id: "1",
    type: false,
    title: "2024-1학기 강의실 사용 수칙 안내",
    contents:
      "1. 강의실 내 취식 금지\n2. 강의실 사용 후 정리 필수\n3. 강의실 내 기물 파손 시 즉시 신고\n\n* 위 수칙을 위반할 경우 강의실 사용이 제한될 수 있습니다.",
    created_at: "2024-03-15",
  },
  "2": {
    id: "2",
    type: false,
    title: "강의실 냉난방 시설 공사 안내",
    contents:
      "3월 20일부터 3월 22일까지 냉난방 시설 교체 공사가 진행됩니다.\n\n공사 기간 동안 소음이 발생할 수 있으며, 냉난방 사용이 제한됩니다.\n\n불편을 끼쳐 죄송합니다.",
    created_at: "2024-03-14",
  },
  "3": {
    id: "3",
    type: true,
    title: "프로젝터 리모컨 위치 변경",
    contents:
      "프로젝터 리모컨이 강단 좌측 서랍으로 위치가 변경되었습니다.\n\n사용 후 반드시 제자리에 보관해주시기 바랍니다.",
    created_at: "2024-03-13",
  },
  "4": {
    id: "4",
    type: true,
    title: "강의실 의자 교체 완료",
    contents:
      "노후화된 의자 교체가 완료되었습니다.\n\n새로운 의자는 이동식이므로 사용 시 주의해주시기 바랍니다.\n\n강의실 사용 후에는 원래 자리로 정리해주세요.",
    created_at: "2024-03-10",
  },
  "5": {
    id: "5",
    type: true,
    title: "강의실 콘센트 증설",
    contents:
      "학생들의 요청으로 강의실 내 콘센트가 추가 설치되었습니다.\n\n각 열마다 2개의 콘센트가 추가되었으니 많은 이용 바랍니다.",
    created_at: "2024-03-08",
  },
};

export const fetchReservationNoticeDetail = async (noticeId: string) => {
  // API 호출을 시뮬레이션하기 위한 지연
  return new Promise<fetchReservationNoticeDetailDto>((resolve, reject) => {
    setTimeout(() => {
      const notice = mockNoticeDetails[noticeId];
      if (notice) {
        resolve(notice);
      } else {
        reject(new Error("공지사항을 찾을 수 없습니다."));
      }
    }, 500); // 0.5초 지연
  });
};
