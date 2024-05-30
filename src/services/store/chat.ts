import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
});

export const chatListState = atom({
  key: "chatListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const chatLoadingState = atom({
  key: "chatLoadingState",
  default: false,
});
