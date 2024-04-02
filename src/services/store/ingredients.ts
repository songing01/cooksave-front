import { atom } from "recoil";

//새롭게 등록 및 수정할 식재료 목록
export const newListState = atom({
  key: "newListState",
  default: [] as any,
});

//내가 가진 식재료 전체목록
export const myListState = atom({
  key: "myListState",
  default: [] as any,
});
