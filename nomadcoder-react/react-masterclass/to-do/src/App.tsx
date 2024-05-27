import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import ToDoListForm from './TodoList'

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
`

function App() {

  return (
    <>
      <GlobalStyle />
      <ToDoListForm />
    </>
  )
}

export default App
