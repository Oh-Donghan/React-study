import styles from "./Pagination.module.css";
import cx from "clsx";

export default function Pagination({
  maxPage,
  currentPage,
  onClickPageButton,
}) {
  return (
    <div>
      <button
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
          onClick={onClickPageButton}
          selected={index + 1 === currentPage}
        />
      ))}
      <button className={cx(styles.quickButton, styles.button)}>
        {"Next >"}
      </button>
    </div>
  );
}

function PageButton({ number, onClick, selected }) {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}
