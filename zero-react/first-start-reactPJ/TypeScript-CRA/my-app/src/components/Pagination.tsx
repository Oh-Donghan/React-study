import styles from "./Pagination.module.css";
import cx from "clsx";

interface OnClickProps {
  onClick: (page: number) => void;
}

interface Props extends OnClickProps{
  maxPage: number;
  currentPage: number;
}

export default function Pagination({
  maxPage,
  currentPage,
  onClick,
}: Props) {
  return (
    <div>
      <button
        type='button'
        className={cx(styles.quickButton, styles.button, {
          [styles.disabled]: currentPage === 1,
        })}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, index) => (
        <PageButton
          key={index + 1}
          number={index + 1}
          onClick={onClick}
          selected={index + 1 === currentPage}
        />
      ))}
      <button className={cx(styles.quickButton, styles.button)}>
        {"Next >"}
      </button>
    </div>
  );
}

interface PageButtonProps extends OnClickProps {
  number: number;
  selected: boolean;
}

function PageButton({ number, onClick, selected }: PageButtonProps) {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}
