import { useState } from "react";
import cx from "clsx";
import styles from "./OpenClosedFilters.module.css";

export default function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);
  // const data = getData();
  // const opendData = data.filter((d) => d.state === 'open');
  // const closedData = data.filter((d) => d.state === 'closed');
  const openModeDataSize = 1;
  const CloseModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={CloseModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
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
