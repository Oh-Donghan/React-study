import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import { useRecoilState } from 'recoil';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { toDoState } from './atoms';
import Board from './components/Board';

// react-beautiful-dnd를 쓰면 에러가 나서 @hello-pangea/dnd로 바꿔서 인스톨함
// npm install @hello-pangea/dnd
function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;

    // Delete movement
    if (destination.droppableId === 'delete') {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        sourceBoard.splice(source.index, 1);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
        };
      });
      return;
    }

    // same board movement.
    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        // 1) Delete item on source.index
        boardCopy.splice(source.index, 1);
        // 2) Put back the item on the destination.index
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }

    // cross board movement.
    if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        // 1) Delete item on source.index
        sourceBoard.splice(source.index, 1);
        // 2) Put back the item on the destination.index
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
          <DeleteDrop>
            <Droppable droppableId='delete'>
              {(magic, snapshot) => (
                <div ref={magic.innerRef} {...magic.droppableProps}>
                  {snapshot.isDraggingOver
                    ? 'Release to delete'
                    : 'Drag here to delete'}
                  {magic.placeholder}
                </div>
              )}
            </Droppable>
          </DeleteDrop>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const DeleteDrop = styled.div`
  margin-top: 30px;
  width: 200px;
  line-height: 60px;
  text-align: center;
  height: 60px;
  background-color: #fff;
  border-radius: 5px;
`;
