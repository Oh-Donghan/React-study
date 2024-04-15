import { useState } from "react";
import cx from "clsx";
import styles from "./OpenClosedFilters.module.css";

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      />
      <OpenClosedFilter
        // size={CloseModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  );
}
