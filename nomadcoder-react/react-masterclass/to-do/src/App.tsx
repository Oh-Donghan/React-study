import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// import FormState from './FormState';
import TodoList from './components/ToDoList';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans 3", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
      {/* <FormState /> */}
    </>
  );
}

export default App;
