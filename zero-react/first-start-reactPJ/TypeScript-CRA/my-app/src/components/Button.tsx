import styles from "./Button.module.css";

// type Props = {
//   style: React.CSSProperties,
//   children: React.ReactElement,
//   type: 'button' | 'submit',
//   disabled: boolean,
// }

interface Props {
  style: React.CSSProperties,
  children: React.ReactNode,
  type?: 'button' | 'submit',
  disabled?: boolean,
}

export default function Button({ style, children, type = "button", disabled }: Props) {
  return (
    <button
      className={styles.button}
      style={style}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
