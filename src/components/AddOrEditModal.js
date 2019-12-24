import React from 'react';
import styled from 'styled-components';

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

const AddOrEditContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AddOrEditModal = () => {
  return (
    <Modal>
      <AddOrEditContainer>
        <input type="text" />
        <button>save</button>
      </AddOrEditContainer>
      <Overlay />
    </Modal>
  );
};

export default AddOrEditModal;
