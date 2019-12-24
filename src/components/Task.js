import React, { useContext, useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin: 0;
  font-family: monospace;
  font-weight: normal;
`;

const Checkbox = styled.input`
  transform: scale(1.5);
  margin-right: 20px;
`;

const ActionsContainer = styled.div``;

import { Context } from './../App';

const Task = ({ text, isDone, id }) => {
  const dispatch = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(0);

  const renderTitle = renderTextField => {
    return renderTextField ? (
      <input
        type="text"
        value={text}
        onChange={e => {
          setTaskTitle(e.target.value);
          console.log(taskTitle);
        }}
      />
    ) : (
      <Title>{text}</Title>
    );
  };

  return (
    <TaskContainer>
      <Checkbox
        type="checkbox"
        checked={isDone}
        onChange={e => {
          dispatch({ type: 'check', payload: id });
        }}
      />
      {renderTitle(isEditing)}
      <ActionsContainer>
        <button
          onClick={() => {
            console.log('yes');
            setIsEditing(true);
          }}
        >
          edit
        </button>
        <button
          onClick={() => {
            console.log('delete');
            dispatch({ type: 'delete', payload: id });
          }}
        >
          delete
        </button>
      </ActionsContainer>
    </TaskContainer>
  );
};
export default Task;
