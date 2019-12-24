import React, { useReducer } from 'react';
import Paginator from './components/Paginator';
import AddOrEditModal from './components/AddOrEditModal';
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

// const AppContainer = styled.div``;
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case 'check':
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
}

const initialState = {
  pageIndex: 0,
  isModalOpen: false,
  list: [
    { title: 'task2', isDone: false, id: 'task2' },
    { title: 'potato is the key of life', isDone: true, id: 'task1' },
    {
      title: 'this is some copy pasta, read this hahaa. send help',
      isDone: false,
      id: 'task3'
    },
    { title: 'task4', isDone: false, id: 'task4' },
    { title: 'task5', isDone: false, id: 'task5' },
    { title: 'task6', isDone: false, id: 'task6' },
    { title: 'task7', isDone: false, id: 'task7' },
    { title: 'task8', isDone: false, id: 'task8' },
    { title: 'task9', isDone: false, id: 'task9' },
    { title: 'task10', isDone: false, id: 'task10' },
    { title: 'task11', isDone: false, id: 'task11' }
  ]
};

export const Context = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { pageIndex, list, isModalOpen } = state;
  console.log(list);
  return (
    // <AppContainer>
    <Context.Provider value={dispatch}>
      <GlobalStyle />
      <button onClick={() => console.log(state)}>test</button>
      {isModalOpen && <AddOrEditModal />}
      <Paginator {...state} />
    </Context.Provider>
    // </AppContainer>
  );
};

export default App;
