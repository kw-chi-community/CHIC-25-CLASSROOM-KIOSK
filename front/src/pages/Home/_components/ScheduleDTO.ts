export interface ScheduleDTO {
  start: string; // 시작 시간 (HH:mm)
  end: string; // 종료 시간 (HH:mm)
  type: "강의" | "예약"; // 강의 or 예약
  title: string; // 강의 또는 예약 제목
  professor?: string; // 강의인 경우 교수 이름
  reserver?: string; // 예약인 경우 예약자 이름
}
