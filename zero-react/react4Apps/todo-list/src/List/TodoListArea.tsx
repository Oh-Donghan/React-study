import { ReactNode } from 'react';
import { useTodoState } from '../Todo/TodoProvider';

interface TodoListAreaProps {
  children: ReactNode;
}

// HOC: High Order Component
// 원하는 영역을 한번 감싸고, 상위에서 내용을 결정해서 
// 하위에 넘겨주는 방식
const TodoListArea = (props:TodoListAreaProps) => {
  const todoState = useTodoState()
  
  if (todoState.todos.length < 1) {
    return null;
  }
  
  return (
    <>
      {props.children}
    </>
  )
}

export default TodoListArea;