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
| - Spring Boot <br/> - MySQL <br/> - EC2 <br/> - RDS <br/> - ELB | - TypeScript + React <br/> - Recoil <br/> - Axios <br/> - react-router-dom <br/> - styled-components | - flask <br/> - yolov8 <br/> - opencv <br/> - tencent-cloud |

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
scripts - 배포 스크립트 <br/>
src/main/java/CookSave/CookSaveback/Heart - 레시피 저장 기능 코드 <br/>
src/main/java/CookSave/CookSaveback/History - 요리 내역 관련 기능 코드 <br/>
src/main/java/CookSave/CookSaveback/HistoryIngredient - 요리 내역의 재료 관련 기능 코드 <br/>
src/main/java/CookSave/CookSaveback/Ingredient - 재료 관련 기능 코드 <br/>
src/main/java/CookSave/CookSaveback/Member - 회원 관련 기능 코드 <br/>
src/main/java/CookSave/CookSaveback/Recipe - 레시피 관련 기능 코드 <br/>
src/main/java/CookSave/CookSaveback/RecipeTag - 레시피 재료 태그 관련 코드 <br/>
src/main/java/CookSave/CookSaveback/Tag - 재료 태그 관련 코드 <br/>
src/main/java/CookSave/CookSaveback/global - 기능에서 참고하는 코드 <br/>
src/main/java/CookSave/CookSaveback/utils - jwt 관련 코드 <br/>

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
#### 1. 프론트엔드 repo
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front 으로 프로젝트 폴더를 로컬에 다운로드합니다.
- 다운받은 폴더를 에디터에서 열고, npm i 를 입력하여 필요한 패키지를 설치합니다.
- npm start로 로컬에서 프로젝트를 실행합니다.

#### 2. 백엔드 repo
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-back 으로 프로젝트 폴더를 로컬에 다운로드합니다.
- 다운로드 받은 폴더의 build.gradle 파일을 에디터에서 열고 build 하여 필요한 라이브러리들을 다운로드합니다.
- 필요한 정보를 application.yml 파일에 작성합니다.
- run으로 로컬에서 프로젝트를 실행합니다.

#### 3.  AI repo 
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-ai.git <br/>

[GPU 사용 시] <br/>

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

#### 4. 프론트엔드 안드로이드 웹뷰 repo
- git clone https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-webview 으로 프로젝트 폴더를 로컬에 다운로드합니다.
- 안드로이드 스튜디오에서 다운 받은 프로젝트 파일을 엽니다.
- Run 'app' 버튼을 통해 에뮬레이터를 실행합니다.


## 💚 HOW TO INSTALL
#### 웹 사용 시
  - 브라우저를 통해 https://www.cooksave.co.kr/ 에 접속합니다.
#### 프로그레시브 웹앱 사용 시
- iOS - 브라우저에서 https://www.cooksave.co.kr/ 에 접속한 뒤 '홈화면에 추가'를 누르면 앱으로 설치됩니다.
- And - 브라우저에서 https://www.cooksave.co.kr/ 에 접속한 뒤 '설치'를 누르면 앱으로 설치됩니다.
#### 안드로이드 앱 사용 시
- APK 파일을 다운로드하여 안드로이드 디바이스에 설치합니다.

## 💚 HOW TO TEST
위의 환경 설치방법에 따라 서비스를 시작한뒤, 테스트 계정으로 로그인합니다. <br/>
ID: cookingmama PW: 1234 <br/>
아래 첨부한 서비스 사용 설명서를 참조하여 각 기능을 테스트해봅니다.
//파일첨부

## 💚 DESCRIPTION OF SAMPLE DATA 

![image](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/63354176/4120f37f-7cda-4681-8351-9ed32a231e01)  
저희는 직접 식재료 데이터를 구글 이미지 검색 및 대형 온라인 몰에서 크롤링하여 제작하였습니다. <br/>
20가지의 식재료를 100장씩 크롤링 한 후 flip, 90 rotate, shear 등의 data augmentation을 통해 전체 20,000장으로 데이터를 증강시켰습니다. <br/>
![image](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/63354176/5cd0d88d-1c43-4e7e-857d-4b7964297981)
sample data로 양파와 당근이 함께 있는 사진을 input으로 주었을 때, 다음과 같이 잘 인식됨을 확인할 수 있습니다. <br/><br/>


## 💚 DESCRIPTION OF OPEN SOURCE
### 1. Object Detection <br/>
[🚀Yolo Model Github](https://github.com/ultralytics/ultralytics)
![image](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/63354176/04ddb78e-c4c9-4181-8b94-2f60fe8bc226)

YOLO(You Only Look Once) 모델은 객체 탐지를 위해 사용되는 유명한 딥러닝 모델로, 매우 빠르고 정확하게 이미지를 분석하여 객체를 탐지할 수 있습니다. YOLO 모델은 크게 세 가지 특징을 가지고 있습니다:
1) End-to-End 학습: YOLO는 이미지를 입력받아 단 한 번의 전방 패스를 통해 객체를 탐지합니다. 이는 다른 객체 탐지 모델들과 비교했을 때 매우 빠르며, 실시간 객체 탐지에 적합합니다.
2) 전체 이미지 고려: YOLO는 이미지를 전체적으로 보고 예측을 하기 때문에 문맥을 잘 파악할 수 있습니다. 이는 작은 객체를 탐지하는 데 유리하며, 객체 간의 상호작용을 더 잘 이해할 수 있습니다.
3) 단일 신경망: YOLO는 단일 신경망을 사용하여 경계 상자와 클래스 확률을 동시에 예측합니다. 이로 인해 모델이 간단하고 효율적입니다.
<br/>
저희는 그 중 yolov5와 yolov8 모델을 custom dataset 비교 학습을 진행하였고, 학습 속도와 정확도가 더 높은 버전 8로 식재료 인식 기능을 개발하였습니다.
<br/><br/>

### 2. OCR <br/>
[🍀Naver Clova AI](https://clova.ai/ocr/)
![image](https://github.com/EWHA-CAPSTONE-COOKSAVE/cooksave-front/assets/63354176/33e624a3-3aea-4d22-af8f-29c8b86014be)

네이버 클로바 영수증 모델은 영수증의 유형과 패턴을 자동 분석하여 매장 정보, 결제 내역, 지불 방식 등 영수증의 기재된 정보를 추출합니다.<br/>
클로바 ocr 모델 이외에도 easyocr, tesseractocr 등 다양한 ocr 모델을 비교하였고 한국어에 높은 정확도를 보이는 네이버 클로바 OCR을 선택하여 영수증 및 구매내역 인식 식재료 등록 기능을 개발하였습니다.<br/>
<br/><br/>


## 💚 팀원 소개 
| BE | FE & DESIGN | AI |
|:---:|:---:|:---:|
|<img width="150" src="https://avatars.githubusercontent.com/u/89539031?v=4" />|<img width="150" src="https://avatars.githubusercontent.com/u/79829662?v=4" />| <img  width="150" src="https://avatars.githubusercontent.com/u/63354176?v=4"/> |
| 차소연  | 송지민 | 최예은 |
| [Soyeon-Cha](https://github.com/Soyeon-Cha) |[songing01](https://github.com/songing01) | [yenncye](https://github.com/yenncye)|
