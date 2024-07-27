// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

/*
  // * 리덕스를 쓸때 단점
  // 액션 타입의 오타가 날 확률이 높다 (충돌할 경우도 있음)
  // 데이터 양이 많을 수록 상태 객체도 커지게되서 코드가 길어지고, 파일이 커진다.
  
  const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
      // *** 리덕스뿐만 아니라 상태를 변경할 때는 절대 원본 상태 객체를 직접 수정하면 안된다.
      // 상태의 불변성을 유지하기 위해, 항상 새로운 객체를 생성하여 반환해야 한다.
      // 이를 통해 상태 변경을 감지할 수 있고, 리렌더링을 최적화할 수 있다.
      // 아래 코드처럼 기존 상태의 복사본을 만들고 필요한 부분만 변경한 후, 새로운 객체를 반환.
      return {
        ...state, // 기존 상태 객체의 모든 속성을 복사
        counter: state.counter + 1, // counter 속성만 업데이트
      // 위 두 로직이 아래처럼 명시적으로 지정하는것과 똑같은 내용(스프레드연산자를 써서 간결한게 장점)
      };
    }

    if (action.type === 'increase') {
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    }

    if (action.type === 'decrement') {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    }

    if (action.type === 'toggle') {
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    }

    return state;
  };

  const store = createStore(counterReducer);

  export default store;
*/
