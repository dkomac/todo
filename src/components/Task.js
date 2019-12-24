import React, { useContext } from 'react';
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

import { Context } from './../App';

const Task = ({ text, isDone, id }) => {
  const dispatch = useContext(Context);
  return (
    <TaskContainer>
      <Checkbox
        type="checkbox"
        checked={isDone}
        onChange={e => {
          dispatch({ type: 'check', payload: id });
        }}
      />
      <Title>{text}</Title>
    </TaskContainer>
  );
};
export default Task;
