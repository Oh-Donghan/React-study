import styled from 'styled-components';
import Circle from './Circle';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {

  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
  };
  
  return (
    <Container>
      <Circle $borderColor='yellow' $bgColor='teal' />
      <Circle text='im here' $bgColor='tomato' />
      <H1>Hello!!</H1>
      <Dummy text='hello!' />
        <button onClick={onClick}>click me</button>
    </Container>
  );
}

export default App;
