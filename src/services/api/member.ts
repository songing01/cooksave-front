import axios from "axios";
import client from "./client";

//회원가입
type Body = { cooksaveId: string; password: string; passwordCheck?: string };

export const postMemberSignup = async (body: Body) => {
  try {
    const response = await client.post(`/members/signup`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//로그인
export const postMemberLogin = async (body: Body) => {
  try {
    const response = await client.post(`/members/login`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//토큰 리프레시
export const postMemberRefresh = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/members/refresh`,
      {
        refreshToken: refreshToken,
      },
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//예산설정
export const patchMemberBudget = async (budget: number) => {
  try {
    const response = await client.patch(`/members/budget`, { budget: budget });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
