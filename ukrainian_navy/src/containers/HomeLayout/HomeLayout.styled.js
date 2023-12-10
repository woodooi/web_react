import styled from 'styled-components';

export const LayoutDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ViewMoreDiv = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

export const ViewMore = styled.button`
  font-size: 16px;
  color: white;
  font-weight: bolder;
  width: 9em;
  height: 3em;
  background-color: #333333;
  border-radius: 8px;
  border: #111111;
  cursor: pointer;
`;

export const CardList = styled.ul`
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 80px;
  justify-items: center;
`;

export const Wrapper = styled.section`
  padding-top: 100px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 600px;
  height: 20em;
`;

export const Cover = styled.img`
  width: 300px;
  height: 300px;
`
