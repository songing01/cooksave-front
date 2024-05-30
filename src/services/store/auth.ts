import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLoginState",
  default: !!localStorage.getItem("token"),
});
