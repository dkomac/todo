import React, { useState, useEffect } from 'react';
import Task from './Task';
import styled from 'styled-components';

import { Button } from './common';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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
  const PAGE_SIZE = 5;

  useEffect(() => {
    setItems(
      list.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE)
    );
  }, [pageIndex, list]);

  const onPrev = () => {
    if (pageIndex <= 0) {
      return;
    }
    const prevPage = pageIndex - 1;
    setPageIndex(prevPage);
  };

  const onNext = () => {
    if (pageIndex >= list.length / PAGE_SIZE - 1) {
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
        <Button onClick={onPrev}>Previous</Button>
        <div>{pageIndex}</div>
        <Button onClick={onNext}>Next</Button>
      </PaginationMenu>
    </AppWrapper>
  );
};
export default Paginator;
