import React, { useReducer } from 'react';
import Paginator from './components/Paginator';
import AddNewTaskModal from './components/AddNewTaskModal';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: monospace;
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        searchTerm: action.payload
      };
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
    case 'delete':
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      };
    case 'add':
      const newTask = {
        title: action.payload,
        isDone: false,
        id: Date.now()
      };
      return {
        ...state,
        isModalOpen: false,
        list: [newTask, ...state.list]
      };
    case 'edit':
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title
            };
          }
          return item;
        })
      };
    case 'toggleModal':
      return {
        ...state,
        isModalOpen: action.payload
      };
    default:
      return state;
  }
}

const initialState = {
  pageIndex: 0,
  isModalOpen: false,
  searchTerm: '',
  list: [
    { title: 'Spend a Weekend in Vegas.', isDone: false, id: 'task2' },
    { title: 'Perform at a Stand Up Comedy Club.', isDone: true, id: 'task1' },
    {
      title: 'Learn How to Do a Backflip.',
      isDone: false,
      id: 'task3'
    },
    { title: 'Go to Disney Land Paris.', isDone: false, id: 'task4' },
    {
      title: 'Cook 30 Recipes from 30 Different Countries in 30 Days.',
      isDone: false,
      id: 'task5'
    },
    { title: 'Become a Farmer.', isDone: false, id: 'task6' },
    {
      title: 'Bake a Cake For Someone For No Reason.',
      isDone: false,
      id: 'task7'
    },
    { title: 'Taste 1,000 Different Wines.', isDone: false, id: 'task8' },
    { title: 'Attend a Costume Party.', isDone: false, id: 'task9' },
    { title: 'Have a 24 Hour Movie-Marathon.', isDone: false, id: 'task10' },
    { title: 'Have a Lucid Dream.', isDone: false, id: 'task11' }
  ]
};

const NewTaskContainer = styled.div``;

export const Context = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isModalOpen } = state;
  return (
    <Context.Provider value={dispatch}>
      <GlobalStyle />
      <NewTaskContainer></NewTaskContainer>
      {isModalOpen && <AddNewTaskModal />}
      <Paginator {...state} />
    </Context.Provider>
  );
};

export default App;
