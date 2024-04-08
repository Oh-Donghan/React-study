import React from "react";
import styles from './BottomButton.module.css';

export default function BottomButton(props) {
  return <button onClick={props.onClick} className={styles.button}>{props.children}</button>;
}
