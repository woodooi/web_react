import styled from 'styled-components';

export const CardPrice = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 206px;
  height: 330px;

  border: 1px solid black;
  border-radius: 10px;

  h1 {
    font-size: 18px;
  }
  p {
    text-align: center;
    font-size: 10px;
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ViewMore = styled.button`
  font-size: 12px;
  color: white;
  font-weight: bolder;
  width: 9em;
  height: 1.7em;
  background-color: #333333;
  border-radius: 8px;
  border: #111111;
  cursor: pointer;
`;
