import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './common';

import { Context } from '../App';

const Modal = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  color: #666565;
  margin-top: 0;
`;

const ActionContainer = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;

const AddContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
`;

const AddNewTaskModal = () => {
  const dispatch = useContext(Context);
  const [newTask, setNewTask] = useState('');
  return (
    <Modal>
      <AddContainer>
        <Title>Add A new task</Title>
        <Input
          type="text"
          placeholder="Enter title of the task"
          value={newTask}
          onChange={e => {
            setNewTask(e.target.value);
          }}
        />
        <ActionContainer>
          <Button
            onClick={() => {
              dispatch({ type: 'add', payload: newTask });
            }}
          >
            save
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: 'toggleModal', payload: false });
            }}
          >
            cancel
          </Button>
        </ActionContainer>
      </AddContainer>
      <Overlay />
    </Modal>
  );
};

export default AddNewTaskModal;
