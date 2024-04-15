import axios from "axios";
import styles from "./ListContainer.module.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import OpenClosedFilters from "./components/OpenClosedFilters";
import ListFilter from "./components/ListFilter";
import Pagination from "./components/Pagination";
import { GITHUB_API } from "./api";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open ");
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const [params, setParams] = useState();
  const maxPage = 10;

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params: params,
    });
    setList(data.data);
  }

  useEffect(() => {
    getData({ page: page, state: isOpenMode ? "open" : "closed", ...params });
  }, [page, isOpenMode, params]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "#31b231",
              color: "white",
              padding: "6px 16px",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter
              onChangeFilter={(params) => {
                // 필터링된 요소에 맞게 데이터를 불러오기
                // const data = getData('필터링된 정보');
                // setList(data);
                setParams(params);
              }}
            />
          </ListItemLayout>
          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          onClickPageButton={(pageNumber) => setPage(pageNumber)}
          maxPage={maxPage}
        />
      </div>
    </>
  );
}
