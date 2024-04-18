import dayjs from "dayjs";
import { STATE, type ListItem } from '../model/issues';
import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge, { BadgeProps } from "./Badge";

interface Props {
  checked: boolean;
  onClickCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickTitle?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  data: ListItem;
}

export default function ListItem({
  checked,
  onClickCheckBox,
  onClickTitle,
  data,
}: Props) {
  const badges = data.labels as BadgeProps[];
  const state = data.state === STATE.OPEN ? "opened" : "closed";
  const date = data.state === "open" ? data.created_at : data.closed_at;

  return (
    <ListItemLayout checked={checked} onClick={onClickCheckBox}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((props, idx) => <Badge key={`${idx}`} {...props} />)}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
}
