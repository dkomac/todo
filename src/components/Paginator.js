import React, { useState, useEffect, useContext } from 'react';
import Task from './Task';
import styled from 'styled-components';
import { Context } from './../App';
import Searchbar from './Searchbar';
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
  align-items: baseline;
`;

const AppWrapper = styled.div`
  max-width: 400px;
  margin: 10px auto;
`;

const CreateNewButton = styled(Button)`
  margin-right: auto;
`;

const Paginator = ({ pageIndex: index, list, searchTerm }) => {
  const [pageIndex, setPageIndex] = useState(index);
  const [items, setItems] = useState([]);
  const dispatch = useContext(Context);
  const PAGE_SIZE = 5;

  useEffect(() => {
    setItems(
      list
        .filter(item => item.title.includes(searchTerm))
        .slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE)
    );
  }, [pageIndex, list, searchTerm]);

  const onPrev = () => {
    if (pageIndex <= 0) {
      return;
    }
    const prevPage = pageIndex - 1;
    setPageIndex(prevPage);
  };

  const onNext = () => {
    if (pageIndex > list.length / PAGE_SIZE - 1) {
      return;
    }
    const nextPage = pageIndex + 1;
    setPageIndex(nextPage);
  };

  return (
    <AppWrapper>
      <Searchbar />
      <PaginationMenu>
        <CreateNewButton
          onClick={() => {
            dispatch({ type: 'toggleModal', payload: true });
          }}
        >
          Add a new task
        </CreateNewButton>
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
