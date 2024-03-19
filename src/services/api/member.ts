import client from "./client";
import SignUp from "@pages/Auth/SignUp";

//회원가입
type SignUp = { username: string; password: string; passwordCheck: string };

export const postMemberSignup = async (body: SignUp) => {
  try {
    const response = await client.post(`/members/signup`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//로그인
type Login = {
  username: string;
  password: string;
};

export const postMemberLogin = async (body: Login) => {
  try {
    const response = await client.post(`/members/signup`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//토큰 리프레시
export const postMemberRefresh = async () => {
  try {
    const response = await client.post(`/members/refresh`);
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
