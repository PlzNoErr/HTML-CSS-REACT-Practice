import { configureStore } from "@reduxjs/toolkit";
import { 변수1, 변수2 } from "./test.store";

export default configureStore({
  reducer: {
    // 마찬가지로 보통 그냥 변수명하고 이름을 같게 사용함.
    변수1: 변수1.reducer,
    변수2: 변수2.reducer,
  },
});
