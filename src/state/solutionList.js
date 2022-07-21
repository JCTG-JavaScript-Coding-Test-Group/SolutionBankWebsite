import { atom } from "recoil";
import { localStorageEffect } from "./utils/storageEffect";

const solutionListState = atom({
  key: "solutionListState",
  default: [],
  effects: [localStorageEffect("solutionListState")],
});
export default solutionListState;
