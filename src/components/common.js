import React from 'react';
import styled from 'styled-components';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

export const Button = styled.button`
  margin: 3px;
  :hover {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid gainsboro;
  width: 100%;
  font-size: 15px;
  :focus { {
    outline: none;
  }
`;

export const IconButton = ({ type, onClick }) => {
  const getIcon = type => {
    switch (type) {
      case 'right':
        return MdChevronRight;
      case 'left':
        return MdChevronLeft;
    }
  };

  let Icon = getIcon(type);
  return (
    <Button onClick={onClick}>
      <Icon />
    </Button>
  );
};
