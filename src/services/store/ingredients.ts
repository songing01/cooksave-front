import { atom } from "recoil";

//새롭게 등록 및 수정할 식재료 목록
export const newListState = atom({
  key: "newListState",
  default: [] as any,
});

//내가 가진 식재료 전체목록
export const myListState = atom({
  key: "myListState",
  default: [
    { iconId: 1, name: "테스트1", price: 111, date: "2023.01.01", amount: 1 },
    { iconId: 2, name: "테스트2", price: 222, date: "2023.02.02", amount: 2 },
  ] as any,
});
