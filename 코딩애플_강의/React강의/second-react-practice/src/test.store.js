import { createSlice } from "@reduxjs/toolkit";

let 변수1 = createSlice({
  // 이름은 변수명과 같을 필요는 없지만 대부분 그냥 통일함.
  name: "변수1",
  initialState: { v1: "vvv", v2: "vvv2" },
  reducers: {
    // 여기서 파라미터 state는 넣어도 되고 안넣어도 된다.
    // 출력해 보면 수정 전의 initialState 값이 출력된다.
    // Array나 Objext형은 이렇게 직접 바꾼다고 적어도 봐준다.
    set변수1(state) {
      return { v1: "vvvbbbb", v2: "vvv2" };
    },
    set변수2(state, action) {
      state.v1 = action.payload;
    },
  },
});
export let { set변수1, set변수2 } = 변수1.actions;

let 변수2 = createSlice({
  name: "변수2",
  initialState: "state 값을 입력하면 됨2",
  reducers: {
    set변수3(state) {
      return "값이 바뀜";
    },
  },
});
export let { set변수3 } = 변수2.actions;

export { 변수1, 변수2 };
