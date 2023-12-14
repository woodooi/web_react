import React, { useContext } from 'react';
import { Wrapper, NavUl, SmallLogoHeader, NavButton, 
         SearchBarWrapper, SearchBar, SearchIcon } from './Nav.styled';
import { useHistory } from 'react-router-dom';

import { DisplayContext } from "../Catalog/Catalog"

export const Navigation = ({ logo, searchBarVisible }) => {

  const history = useHistory();

  function handleCatalogButton() {
    history.push('/catalog')
  };

  function handleHomeButton(){
    history.push('')
  }

  const { handleSearch } = useContext(DisplayContext) || {};

  return (
    <Wrapper>
      <SmallLogoHeader src={logo} alt="" />
      <NavUl>
        <li><NavButton onClick={handleHomeButton}>Home</NavButton></li>
        <li><NavButton onClick={handleCatalogButton}>Catalog</NavButton></li>
        <li><NavButton>Cart</NavButton></li>
      </NavUl>
      <SearchBarWrapper $isVisible={searchBarVisible}>
        <SearchIcon />
        <SearchBar onChange={(e) => handleSearch(e.target.value)} placeholder="Search for a plane"/>
      </SearchBarWrapper>
    </Wrapper>
  );
};
