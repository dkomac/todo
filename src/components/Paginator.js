import React, { useState, useEffect, useContext } from 'react';
import Task from './Task';
import styled from 'styled-components';
import { Context } from './../App';

import { Button, IconButton } from './common';

const BUTTON_TYPE = {
  LEFT: 'left',
  RIGHT: 'right',
  DELETE: 'delete',
  EDIT: 'edit'
};

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
  const dispatch = useContext(Context);
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

  console.log(BUTTON_TYPE);

  return (
    <AppWrapper>
      <PaginationMenu>
        <Button
          onClick={() => {
            dispatch({ type: 'toggleModal', payload: true });
          }}
        >
          Add a new task
        </Button>
        <IconButton onClick={onPrev} type={BUTTON_TYPE.LEFT} />
        <div>Page: {pageIndex}</div>
        <IconButton onClick={onNext} type={BUTTON_TYPE.RIGHT} />
      </PaginationMenu>

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
    </AppWrapper>
  );
};
export default Paginator;
