import { RiChatNewLine } from 'react-icons/ri';
import { ChangeEvent, FormEvent } from 'react';
import styles from './TodoInput.module.css';
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from '../Todo/TodoProvider';

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: event.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputState.text) {
      return;
    }

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text,
      },
    });

    inputDispatch({
      type: 'clear',
    });
  };

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder='Todo'
          value={inputState.text}
          onChange={handleInputChanged}
        />
        <button type='submit' className={styles.enter}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
