import axios, { AxiosInstance } from "axios";
import { postMemberRefresh } from "./member";

const client: AxiosInstance = axios.create();
client.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}`;
client.defaults.withCredentials = true;

const token: string | null = localStorage.getItem("token");

client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

//엑세스 토큰 재발급을 위한 refreshClient 생성
export const refreshClient = axios.create();

refreshClient.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}`;
refreshClient.defaults.withCredentials = true;

// client의 api 콜을 인터셉트
client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log("3");
    //기존에 수행하려고 했던 API 설정 정보
    const originalConfig = error.config;

    //토큰 만료일때 (조건문 테스트 해봐야함)
    if (error.response.data && error.response.data.status === 500) {
      //토큰 재발급
      postMemberRefresh()
        .then(res => {
          if (res.status === 200) {
            //로컬스토리지 저장 후 새로고침
            localStorage.setItem("token", res.data.accessToken);

            //client의 api 콜 헤더에 재발급 받은 token 넣기
            originalConfig.headers[
              "Authorization"
            ] = `Bearer ${res.data.accessToken}`;

            client.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
            //실행하던 api 이어서 실행
            console.log("4");
            return client(originalConfig);
          }
        })
        .catch(err => {
          // 토큰 재발급 실패할 경우 (refreshToken 만료)
          console.log("리프레시 토큰 만료", err);
          //만료된 토큰 제거
          //localStorage.removeItem("token");
          //localStorage.removeItem("refreshToken");
          //window.location.replace("/auth/login");
        });
    }
    return Promise.reject(error);
  },
);

export default client;
