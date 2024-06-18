import { useForm } from 'react-hook-form';

/* export default function TodoList() {
  const [toDo, setToDo] = useState('');
  const [toDoError, setToDoError] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDoError('');
    setToDo(value);
  };

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(toDo);
    if (toDo.length < 10) {
      return setToDoError('To do should be longer');
    }
    console.log('submit');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder='Write a to do' />
        <button>Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
} */

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

export default function ToDoListForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          margin: '50px auto',
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', { required: true })}
          placeholder='First Name'
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: true })}
          placeholder='Last Name'
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', { required: true, minLength: 10 })}
          placeholder='User Name'
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', { required: true, minLength: 5 })}
          placeholder='Password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder='Password1'
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
