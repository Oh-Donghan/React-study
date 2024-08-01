const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

/* ** 리덕스의 상태 관리 흐름 **
	1.	리듀서 함수를 정의하고, 이를 사용하여 스토어를 생성합니다.
	2.	구독 함수를 정의하고, 스토어에 구독합니다.
	3.	필요한 액션을 정의합니다.
	4.	액션을 디스패치하여 상태를 변경합니다.
	5.	구독된 함수가 호출되어 변경된 상태에 따라 필요한 작업을 수행합니다.

  이 과정을 통해 리덕스의 상태 관리 흐름이 완성됩니다.
*/
