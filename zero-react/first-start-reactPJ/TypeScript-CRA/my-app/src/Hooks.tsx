import axios from 'axios';
import { useState } from 'react';
import { GITHUB_API } from './api';
import { useQuery } from 'react-query';

interface Props {
  initialValues: Record<string, string>;
  validate: (value: Record<string, string>) => Record<string, string>;
  refs: Record<string, React.MutableRefObject<HTMLInputElement>>;
  onSuccess: (result: string) => void;
  onErrors: () => void;
  onSubmit: () => Promise<string>;
}

// useForm
export function useForm({
  initialValues,
  validate,
  refs,
  onSuccess, // 성공했을때
  onErrors, // 에러가 났을때
  onSubmit, // 값이 전달될때 어떤 함수/네트워크를 호출할지
}: Props) {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(e: React.ChangeEvent<{ name: string; value: string }>) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult);

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);
      onErrors();
      refs[key].current.focus();
      // ref control
      setIsSubmitting(false);
      return;
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (error) {
        console.log({ error });
        onErrors();
      }
      return;
    }
  }

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
}

async function getUserInfo() {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      Authorization: import.meta.env.REACT_APP_GITHUB_TOKEN!,
      'Content-Type': 'application.json',
    },
  });

  return data.data;
}

// useUser
export function useUser() {
  return useQuery(['userInfo'], () => getUserInfo());
}
