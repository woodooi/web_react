import React from 'react';
import styled, { css } from 'styled-components';

export const CardItem = ({id, title, vol, desc, price, img, cardHomeVersion}) => {
  return (
      <CardWrapper isVisible={cardHomeVersion}>
        <b>Item</b>
        <CardImage src={img} alt="" isVisible={cardHomeVersion}/>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p style={{textAlign: 'left'}}>Tank volume of this beauty is {vol} pounds</p>
        <CardPrice isVisible={cardHomeVersion}>
          <h1>Price:</h1>
          <p>{price} $</p>
        </CardPrice>
        <ViewMore isVisible={cardHomeVersion}>View More</ViewMore>
      </CardWrapper>
    ) 
  };

const CardPrice = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    !props.isVisible &&
    css`
      visibility: hidden;
    `}
`

const CardWrapper = styled.div`
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

  ${(props) =>
    !props.isVisible &&
    css`
      border: 0;
    `}
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;

  ${(props) =>
    !props.isVisible &&
    css`
      width: 300px;
    `}
`;

const ViewMore = styled.button`
  font-size: 12px;
  color: white;
  font-weight: bolder;
  width: 9em;
  height: 1.7em;
  background-color: #333333;
  border-radius: 8px;
  border: #111111;
  cursor: pointer;

  ${(props) =>
    !props.isVisible &&
    css`
      visibility: hidden;
    `}
`;
