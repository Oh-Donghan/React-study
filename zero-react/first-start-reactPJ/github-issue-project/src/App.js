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
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <Footer />
    </QueryClientProvider>
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
/*
 * Context API - 전역적인 정보를 prop drilling 없이 사용할때
 * -> 굳이 사용하지 않아도 된다면,
 * hooks로 빼내어 사용한다.
 * -> hooks로 선언한 부분이 반복적으로 네트워크 콜을 유발한다면,
 * cache를 통해서 개선해볼 수 있을 것.
 */
