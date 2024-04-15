import styles from "./Header.module.css";
import Button from "./components/Button";
import Space from "./components/Space";
import Tabs from "./components/Tabs";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <div className={styles.names}>
          <span>dong_oh / </span>
          <span>github-issue</span>
        </div>
        <div className={styles.buttons}>
          <Button
            style={{
              fontSize: "13px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Watch
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "13px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Fork <div className={styles.circle}>5</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "13px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Star
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
