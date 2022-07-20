import { atom } from "recoil";
import { sessionStorageEffect } from "./utils/sessionStorageEffect";

const userState = atom({
  key: "userState",
  default: {},
  effects: [sessionStorageEffect("userState")],
});
