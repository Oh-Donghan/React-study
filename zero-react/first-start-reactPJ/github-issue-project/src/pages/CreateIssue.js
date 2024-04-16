import { useRef } from "react";
import cx from "clsx";
import styles from "./CreateIssue.module.css";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { useForm, useUser } from "../Hooks";
import axios from "axios";
import { GITHUB_API } from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const user = useUser();

  console.log({ user });

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: "", body: "" },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/Oh-Donghan/React-study/issues`,
          inputValues,
          {
            headers: {
              Authorization: process.env.REACT_APP_GITHUB_TOKEN,
              "Content-Type": "application/json",
            },
          },
        ),
      validate,
      onErrors: () => console.log("error"),
      refs: { title: inputRef, body: textareaRef },
      onSuccess: (result) => {
        console.log({ result });
        navigate("/", { replace: true });
      },
    },
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Title"
            value={inputValues.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            ref={textareaRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "#31b231",
                color: "white",
                padding: "6px 10px",
              }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function validate(values) {
  let errors = {};
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }
  return errors;
}
