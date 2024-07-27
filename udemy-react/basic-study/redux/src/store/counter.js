import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// * 리덕스툴킷은 리덕스를 포함하기 때문에 리덕스가 설치되어 있다면 삭제하자!
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // 리덕스툴킷의 createSlice를 쓰면 기존상태를 바꿀 수 없기 때문에
      // 이렇게 간단히 사용할 수 있다. (자동으로 원래 있는 상태를 복제하기 때문)
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;