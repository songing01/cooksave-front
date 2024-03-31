import { atom } from "recoil";

export const newListState = atom({
  key: "newListState",
  default: [] as any,
});
