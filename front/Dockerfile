# 1. Node.js 베이스 이미지 설정
FROM node:18

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 설치
COPY package*.json ./
RUN npm install --force

# 4. 앱 소스 복사 및 빌드
COPY . .
RUN npm run build

# 5. 정적 파일 제공을 위한 serve 설치
RUN npm install -g serve

# 6. 포트 오픈 및 앱 실행
EXPOSE 3001
CMD ["serve", "-s", "dist", "-l", "3001"]