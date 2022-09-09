# 🌏 구해줘, 지구!
인공지능 활용 생활 폐기물 이미지 인식을 통한 올바른 분리배출 방법 안내 서비스

- 팀명 : 사이버다인   
- 서비스 설명 : 카메라를 사용한 분리 배출 AI 웹 서비스  
- 인공지능 기술 : 이미지 처리  

<br><br>
# 목차 
1. [프로젝트 소개](#1-프로젝트-소개)  
2. [프로젝트 목표](#2-프로젝트-목표)  
3. [프로젝트 기능 설명](#3-프로젝트-기능-설명)
4. [팀원 역할 분담](#4-팀원-역할-분담)
5. [트러블 슈팅](#5-트러블-슈팅)


<br><br>
# 1. 프로젝트 소개
## 사용 데이터 셋  
📒 [AI Hub 생활 폐기물 이미지 데이터 셋](https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=140)

<br>  

## 기술 스택

#### 프론트엔드
1. [Next.js](https://nextjs.org/)
2. [Typescript](https://www.typescriptlang.org/)
3. [styled-component](https://styled-components.com/)
4. [mui](https://mui.com/)
5. [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) 
6. [recoil](https://recoiljs.org/)  

#### 백엔드
1. [Express.js](https://expressjs.com/)
2. [PostgreSQL](https://www.postgresql.org/)
3. [sequelize](https://sequelize.org/)
4. [multer](https://www.npmjs.com/package/multer)
5. [aws-sdk](https://aws.amazon.com/sdk-for-javascript/)
6. [node-worker-threads-pool](https://www.npmjs.com/package/node-worker-threads-pool)

#### 인공지능
1. [Tensorflow](https://www.tensorflow.org/)
2. [Pytorch](https://pytorch.org/)
3. [YOLOv5](https://github.com/ultralytics/yolov5)
        

<br>  

## 와이어 프레임

🌱 [피그마 링크](https://www.figma.com/file/dSjdmhOweLps5vP9zIfsme/Wireframe?node-id=0%3A1)

<br>  
 
## 스토리 보드 및 유저 시나리오
📍 [구글 시트 링크](https://docs.google.com/spreadsheets/d/1Gv8fvA-80mt02lMYLZNUqs3o3ZKHG1Lz3iDeypcRL3A/edit#gid=0)

<br>  

## 페이지 구조도
📍 [피그마 링크](https://www.figma.com/file/dSjdmhOweLps5vP9zIfsme/Wireframe?node-id=323%3A1979)

<br>  

## API 명세서
📍 [api 명세서](https://documenter.getpostman.com/view/19591285/UzBiQUw9#644af286-9b0d-4bdf-8ec2-d11a18e508f3) 


<br><br>  
# 2. 프로젝트 목표
2013년 기준 우리나라는 OECD 국가 중 재활용을 잘 하는 국가 2위이지만 실질적인 재활용은 제대로 이루어지고 있지 않다. 이는 실질적인 재활용 비율이 아닌 재활용 참여 비율이기 때문이며 실질적인 재활용률은 40%도 되지 않는다.  
이 상황의 원인은 생활쓰레기에 대한 분리배출 방법에 많은 사람들이 어려움을 느끼기 때문이다. 따라서, 생활 쓰레기에 대한 정확한 정보를 제공하고 분리배출 방법을 보다 쉽게 접할 수 있게 하여 분리수거 문제를 해결하려 한다. 더 나아가, 보다 깨끗한 환경과 지속 가능한 지구가 될 수 있도록 한다.
    

<br><br>   
# 3. 프로젝트 기능 설명
📍 [노션 링크](https://www.notion.so/9f43c7605d17420b9d60db9f72be499f)

### 분리배출 하러가기
인공지능 활용 생활폐기물 이미지 인식을 통한 분리배출 방법을 안내해 줍니다. 카테고리 선택을 통한 분리배출 방법 안내 보기도 가능합니다.

### 우리동네 대형폐기물 신고하기
사용자 위치 인식 혹은 선택을 통한 지자체별 대형폐기물 또는 생활 가전 폐기물 신고 사이트를 안내해줍니다. 
(납부 필증 사이트 연결, 무료 수거 서비스 안내)

### 퀴즈 풀기 및 포인트 적립
분리배출 퀴즈 참여에 따른 포인트를 적립합니다. 게임을 통해 분리배출 방법에 친숙해질 수 있을 것입니다. 더 나아가 마이페이지에서 포인트 적립 정도를 확인할 수 있으며, 포인트에 따른 식물의 성장 모습을 볼 수 있습니다. 

### 중고마켓
무한 스크롤 형태의 게시글을 확인 할 수 있습니다.


<br><br>  
## 4. 팀원 역할 분담

| 이름   | 역할              | 세부사항 |
| ------ | ----------------- |---------|
| 김성훈 | 인공지능 |1. 인공지능 모델 선정 <br>2. 데이터 검증 및 전처리<br>3. 하이퍼파라미터 튜닝<br>4. 모델 학습 모니터링 <br>5. 자바스크립트 용 모델 배치 코드 작성 
| 박진아 | 프론트엔드 |1. 와이어 프레임 및 페이지구조도 작성<br>2. 구현<br>- [분리배출 안내 화면 (drag&drop, 카메라 외)]<br>- [중고 마켓 (무한 스크롤)]<br>- [마이페이지 (포인트 적립 시각화)]<br>- [소셜 로그인 (kakao)]<br>3. 최종 서비스 소개서 작성  
| 신도희 | 팀장/백엔드 |1. DB 설계 및 관리<br>2. API 구현 [User/ Quiz/ Point]<br>3. 배포<br>4. 중간 발표 
| 안민영 | 프론트엔드 |1. 아이디어 기획 <br>2. 와이어 프레임 작성<br>3. 구현 <br>- [Intro]<br>- [로그인&회원가입]<br>- [퀴즈]<br>- [대형 폐기물 신고 사이트 안내 (Kakao Map API)]<br>- [모바일 반응형 구현]   
| 윤성준 | 인공지능 |1. 인공지능 모델 선정 <br>2. 데이터 검증 및 전처리<br>3. 하이퍼파라미터 튜닝<br>4. 모델 학습 모니터링 <br>5. 자바스크립트 용 모델 배치 코드 작성 
| 이하은 | 백엔드 |1. DB 설계 및 관리<br>2. API 구현 [RecycleInfo/ Post/ Comment] <br>3. 최종 발표 



<br><br>  
# 5. 트러블 슈팅
📍 [노션 링크](https://www.notion.so/f0d68092dfde4d0f991c7116b3512ad6)

1. 무한스크롤 구현 (프론트)
2. 분리 배출 결과 정보 표현 (프론트)
3. 응답 데이터 구성 문제 (백)
4. 복잡한 쿼리 작성 (백)
5. 데이터 전처리 문제 (인공지능)
6. 하이퍼파라미터 튜닝 자원 문제
