import styles from "./Badge.module.css";

export interface BadgeProps {
  name: string;
  color: string;
}

export default function Badge({ name, color }: BadgeProps) {
  return (
    <span className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  );
}
