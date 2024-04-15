import { Route, Routes } from "react-router-dom";
import Issue from "./pages/Issue";
import CreateIssue from "./pages/CreateIssue";
import PullRequest from "./pages/PullRequest";
import Code from "./pages/Code";
import Security from "./pages/Security";
import Actions from "./pages/Actions";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import Header from "./Header";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
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
