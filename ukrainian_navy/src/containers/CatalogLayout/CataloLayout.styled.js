import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 0 auto;
`;

export const CardItemUl = styled.ul`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center; 
  grid-auto-flow: row; 

  justify-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 30px;
`;
