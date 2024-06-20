/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

// react-memo는 react.js한테 prop 이 바뀌지 않는다면
// 컴포넌트를 렌더링 하지 말라고 한다!
function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  // console.log(toDo);

  return (
    <Draggable draggableId={toDoId + ''} index={index}>
      {(magic, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default memo(DraggableCard);

const Card = styled.div<{ $isDragging: boolean }>`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$isDragging ? '#74b9ff' : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.$isDragging ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 0.2s ease-in-out;
`;
