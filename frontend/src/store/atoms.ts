import { atom } from "recoil";

export const donation = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const outListAtom = atom({
  key: "outList", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
