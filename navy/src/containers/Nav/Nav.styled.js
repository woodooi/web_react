import styled, { css } from 'styled-components';
import { SmallLogo } from '../globals';
import { SearchOutlined } from '@ant-design/icons';

export const Wrapper = styled.section`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const NavUl = styled.ul`
  width: 440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  font-size: 16px;
  width: 8em;
  height: 2.3em;
  background-color: lightgray;
  border-radius: 18px;
  border: 0;
  cursor: pointer;
`;

export const SmallLogoHeader = styled(SmallLogo)`
  margin-right: 9%;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;

  ${(props) =>
    !props.$isVisible &&
    css`
      visibility: hidden;
    `}
`;

export const SearchIcon = styled(SearchOutlined)`
  padding-right: 15px;
  color: gray;
`;

export const SearchBar = styled.input`
  height: 85%;
  border-radius: 20px;
`;
