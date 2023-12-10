import React, {createContext} from 'react';
import { CardImage, CardPrice, CardWrapper, ViewMore } from './Card.styled';
import { useHistory } from 'react-router-dom';

export const CardItemContext = createContext();

export const CardItem = ({id, title, vol, desc, price, img}) => {

    const history = useHistory();

    const handleButtonClick = () => {
      history.push(`catalog/${id}`);
    };

  return (
      <CardWrapper>
        <b>Item</b>
        <CardImage src={img} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        <p style={{textAlign: 'left'}}>Tank volume of this beauty is {vol} pounds</p>
        <CardPrice>
          <h1>Price:</h1>
          <p>{price} $</p>
        </CardPrice>
        <ViewMore onClick={() => handleButtonClick()}>View More</ViewMore>
      </CardWrapper>
  ) 
};
