import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './common';
import { Context } from './../App';

const TaskContainer = styled.div`
  display: flex;
  min-width: 300px;
  width: 100%;
  min-height: 50px;
  flex-direction: row;
  justify-content: space-inbetween;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 15px;
  margin: 0;
  font-weight: normal;
`;

const Checkbox = styled.input`
  transform: scale(1.5);
  margin-right: 20px;
`;

const ActionsContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;

const Task = ({ text, isDone, id }) => {
  const dispatch = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(text);

  const hangleInput = event => setTaskTitle(event.target.value);

  const renderTitle = renderTextField => {
    return renderTextField ? (
      <Input type="text" value={taskTitle} onChange={hangleInput} />
    ) : (
      <Title>{text}</Title>
    );
  };

  const renderEditButtonOrSave = isEditing => {
    return isEditing ? (
      <Button
        onClick={() => {
          setIsEditing(false);
          dispatch({ type: 'edit', payload: { id, title: taskTitle } });
        }}
      >
        save
      </Button>
    ) : (
      <Button
        onClick={() => {
          setIsEditing(true);
        }}
      >
        edit
      </Button>
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
        {renderEditButtonOrSave(isEditing)}
        <Button
          onClick={() => {
            dispatch({ type: 'delete', payload: id });
          }}
        >
          delete
        </Button>
      </ActionsContainer>
    </TaskContainer>
  );
};
export default Task;
