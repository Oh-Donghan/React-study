import styles from "./App.module.css";
import Header from "./Header";
import ListContainer from "./ListContainer";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;

/*
 * Hook 사용 규칙
 * 1. 최상위에서 호출되어야 한다.
 * 2. 오직 리액트 함수에서만 Hook을 호출해야한다.
 */
/*
// useEffect //
 * mount - 리액트 컴포넌트가 그려질때, 렌더될때
 * unmount - 리액트 컴포넌트가 사라질때, 지워질때
 * update - 특정 값이 변해서 리액트 컴포넌트가 다시 그려질때
*/
