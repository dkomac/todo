import React, { useState, useEffect } from 'react';
import Task from './Task';
import styled from 'styled-components';

import { Button } from './common';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const PaginationButton = styled.button`
  margin: 3px;
  padding: 5px;
`;

const PaginationMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppWrapper = styled.div`
  max-width: 400px;
`;

const Paginator = ({ pageIndex: index, list }) => {
  const [pageIndex, setPageIndex] = useState(index);
  const [items, setItems] = useState([]);
  const size = 3;

  useEffect(() => {
    setItems(list.slice(pageIndex * size, pageIndex * size + size));
  }, [pageIndex, list]);

  const onPrev = () => {
    if (pageIndex <= 0) {
      return;
    }
    const prevPage = pageIndex - 1;
    setPageIndex(prevPage);
  };

  const onNext = () => {
    console.log(pageIndex, Math.round(list.length / size));
    if (pageIndex >= list.length / size - 1) {
      return;
    }
    const nextPage = pageIndex + 1;
    setPageIndex(nextPage);
  };

  return (
    <AppWrapper>
      <TaskContainer>
        {items.map(item => {
          return (
            <Task
              text={item.title}
              key={`task-${item.id}`}
              isDone={item.isDone}
              id={item.id}
            />
          );
        })}
      </TaskContainer>
      <PaginationMenu>
        <PaginationButton onClick={onPrev}>Previous</PaginationButton>
        <div>{pageIndex}</div>
        <PaginationButton onClick={onNext}>Next</PaginationButton>
      </PaginationMenu>
    </AppWrapper>
  );
};
export default Paginator;
