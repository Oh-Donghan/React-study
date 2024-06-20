import {
  DragDropContext,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { toDoState } from './atoms';
import DraggableCard from "./components/DraggableCard";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // 드래그한 목적지가 없으면 리턴 (안하면 destination을 부를때 에러가남)
    if (!destination) return;
    
    setToDos(oldToDos => {
      const toDosCopy = [...oldToDos];
      // 1) Delete item on source.index
      // console.log('Delete item on', source.index);
      // console.log(toDosCopy);
      toDosCopy.splice(source.index, 1);
      // console.log('Delete item');
      // console.log(toDosCopy);
      // 2) Put back the item on the destination.index
      // console.log('Put back', draggableId, 'on ', destination.index);
      toDosCopy.splice(destination?.index, 0, draggableId);
      // console.log(toDosCopy);
      return toDosCopy;
    });
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId='one'>
              {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  {toDos.map((toDo, index) => (
                    <DraggableCard key={toDo} index={index} toDo={toDo} />
                  ))}
                  {magic.placeholder}
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    /* font-weight: 300; */
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color: black;
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 30px 10px 20px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;


