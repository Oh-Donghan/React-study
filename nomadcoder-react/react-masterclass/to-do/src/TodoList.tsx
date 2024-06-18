import { useForm } from 'react-hook-form';

// React Hook Form을 사용한 경우
function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register('email')} placeholder='Email' />
        <input {...register('firstName')} placeholder='First Name' />
        <input {...register('lastName')} placeholder='Last Name' />
        <input {...register('username')} placeholder='Username' />
        <input {...register('password')} placeholder='Password' />
        <input {...register('password1')} placeholder='Password1' />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

// React Hook Form 을 사용하지 않은경우 (로그인 형식을 만들려면 더많은 input과 state가 필요하다)
// export default function TodoList() {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError('');
//     setToDo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('To do should be longer');
//       }
//     console.log('submit');
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder='Write a to do' />
//         <button>Add</button>
//         {' '}{toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }
