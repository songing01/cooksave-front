# 쿡세이브 (COOK-SAVE)
식재료 관리를 통한 1인 가구의 식비 절감 지원 웹앱 서비스 <br/>
https://www.cooksave.co.kr/

## 💚 기능 소개
![010](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/50b0e3b2-8047-4fed-8e76-7f45f15d8ada)
![011](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/e9bb9642-1e73-475e-8723-81ed1f7d54fd)
![012](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/d3db07cd-4dd4-4bd3-912b-c0e0d567f791)
![013](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/dada89db-77c3-48c9-9116-165d0e1b32e4)
![014](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/70582f36-22a4-4183-9a5e-0a3973d2d5ea)
![015](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/0dbe0741-60b7-46a7-b938-45866ea127c0)

## 💚 Architecture
![016](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/79829662/a544f67f-f164-4718-9839-1a6e53698fee)

| BE | FE | AI |
|:---:|:---:|:---:|
| - TypeScript + React <br/> - Recoil <br/> - Axios <br/> - react-router-dom <br/> - styled-components | - TypeScript + React <br/> - Recoil <br/> - Axios <br/> - react-router-dom <br/> - styled-components | - TypeScript + React <br/> - Recoil <br/> - Axios <br/> - react-router-dom <br/> - styled-components |

## 💚 ABOUT SOURCE CODE
### FE
src/assets - 이미지 파일 모음 <br/>
src/components - UI 컴포넌트 모음 <br/>
src/pages - 화면별 레이아웃 모음 <br/>
src/router - 비로그인 유저 접근 제한 등의 라우팅 관련 코드 <br/>
src/services/api - API 요청 함수 모음 <br/>
src/services/store - Recoil 전역 상태 관리 함수 모음 <br/>
src/style - 글로벌 스타일 및 CSS 기본 설정 <br/>
src/type - 오브젝트 별 타입 지정 <br/>

### BE

### AI
weights/ - best weight checkpoints이 저장되는 폴더 <br/>
app.py - flask sever에 대한 코드 <br/>
requirement.txt - pip install로 설치해야하는 라이브러리 모음 <br/>
train.py - 모델 학습 코드  <br/>
uwsgi - flask server connection을 위한 코드 <br/>
yolov8n.pt - pre-trained model <br/>


### web-view
안드로이드 웹뷰를 통해 구현한 웹을 안드로이드 앱 내에서 실행할 수 있도록 합니다.<br/>
app/src/main/java/com/example/cooksave_webview/MainActivity.kt - 디바이스로부터 이미지 업로드, 메타태그, 로컬 저장소 허용 등 관련 코드


## 💚 HOW TO BUILD
1. 프론트엔드 repo
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front 으로 프로젝트 폴더를 로컬에 다운로드합니다.
- 다운받은 폴더를 에디터에서 열고, npm i 를 입력하여 필요한 패키지를 설치합니다.
- npm start로 로컬에서 프로젝트를 실행합니다.

2. 백엔드 repo
3.  AI repo 
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-ai.git <br/>

[GPU 사용시] <br/>

(1) 가상환경 세팅 <br/>
cd {가상환경을 설치할 경로} <br/>
python -m venv {가상환경이름} <br/>
source ./venv/bin/activate <br/><br/>

(2) 필요한 라이브러리 설치<br/>
pip install requirement.txt <br/><br/>

(3) 데이터 셋 다운로드 <br/>
(recommended) roboflow에서 costom data 제작 후 yolo format으로 불러오기 <br/><br/>

(4) 모델 학습 진행 <br/>
python train.py <br/><br/>

(5) AI flask server 실행 <br/>
python app.py <br/><br/>



4. 프론트엔드 안드로이드 웹뷰 repo
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-webview 으로 프로젝트 폴더를 로컬에 다운로드합니다.
- 안드로이드 스튜디오에서 다운 받은 프로젝트 파일을 엽니다.
- Run 'app' 버튼을 통해 에뮬레이터를 실행합니다.


## 💚 HOW TO INSTALL
#### 웹 사용시
  - 브라우저를 통해 https://www.cooksave.co.kr/ 에 접속합니다.
#### 프로그레시브 웹앱 사용시
- iOS - 브라우저에서 https://www.cooksave.co.kr/ 에 접속한 뒤 '홈화면에 추가'를 누르면 앱으로 설치됩니다.
- And - 브라우저에서 https://www.cooksave.co.kr/ 에 접속한 뒤 '설치'를 누르면 앱으로 설치됩니다.
#### 안드로이드 앱 사용시
- APK 파일을 다운로드하여 안드로이드 디바이스에 설치합니다.

## 💚 HOW TO TEST
위의 환경 설치방법에 따라 서비스를 시작한뒤, 테스트 계정으로 로그인합니다. <br/>
ID: cookingmama PW: 1234 <br/>
아래 첨부한 서비스 사용 설명서를 참조하여 각 기능을 테스트해봅니다.
//파일첨부

## 💚 DESCRIPTION OF SAMPLE DATA


## 💚 DESCRIPTION OF OPEN SOURCE


## 💚 팀원 소개 
| BE | FE & DESIGN | AI |
|:---:|:---:|:---:|
|<img width="150" src="https://avatars.githubusercontent.com/u/89539031?v=4" />|<img width="150" src="https://avatars.githubusercontent.com/u/79829662?v=4" />| <img  width="150" src="https://avatars.githubusercontent.com/u/63354176?v=4"/> |
| 차소연  | 송지민 | 최예은 |
| [Soyeon-Cha](https://github.com/Soyeon-Cha) |[songing01](https://github.com/songing01) | [yenncye](https://github.com/yenncye)|
