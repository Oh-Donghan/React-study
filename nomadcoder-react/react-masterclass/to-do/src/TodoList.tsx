import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface IForm {
  toDo: string;
}

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log('add to do', data.toDo);
    // 제출후 input창 비우기 (인풋창 이름, 값)
    setValue('toDo', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a to do',
          })}
          placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
