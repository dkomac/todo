import React, { useState, useEffect, useContext } from 'react';
import { Input } from './common';
import styled from 'styled-components';
import { Context } from './../App';

const SearchContainer = styled.div`
  padding: 10px 0;
`;

const Searchbar = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: 'search', payload: searchString });
  }, [searchString]);

  return (
    <SearchContainer>
      <span>Search</span>
      <Input
        value={searchString}
        onChange={e => {
          setSearchString(e.target.value);
        }}
      />
    </SearchContainer>
  );
};

export default Searchbar;
