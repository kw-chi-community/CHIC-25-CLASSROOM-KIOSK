# 🖥️ 라즈베리파이 기반 키오스크 시스템 및 강의실 예약·관리 웹 플랫폼 (키오스크 Repo)

## 소개

'라즈베리파이 기반 키오스크 시스템 및 강의실 예약·관리 웹 플랫폼'의 키오스크 레포지토리 입니다.

## 페이지 구성

- 홈
  - 강의실 사용 현황
  - 관리실 예약 페이지와 연결되는 QR
- 공지

## 기술 스택

**Front**: React, TypeScript, tailwindCSS, Vite  
**Beckend**: Node JS


## 💡 실행 방법 안내

### 1. 레포지토리 클론

```bash
git clone https://github.com/kw-chi-community/CHIC-25-CLASSROOM-KIOSK.git
cd CHIC-25-CLASSROOM-KIOSK
```

### 2. Docker 컨테이너 실행

```bash
docker compose up
```

### 3. 서비스 접속

http://localhost:3000

컨테이너가 이상하게 동작하거나 캐시 문제로 잘 안 될 경우:
```bash
docker compose down --volumes --remove-orphans
docker compose build --no-cache
docker compose up
```
