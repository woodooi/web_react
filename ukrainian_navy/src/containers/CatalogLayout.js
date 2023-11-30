import React from "react";
import styled from "styled-components";

import { planes } from "../data";
import { CardItem } from "../components/Card";

export const Layout = ({archangel, cardHomeVersion}) => {
    return (
        <Wrapper>
            <CardItemUl>
            {planes.map(
                (
                    {id, title, vol, desc, price}, 
                    index
                ) => {
                    return (
                        <CardItem key={'iso-' + id}
                         title={title}
                         vol={vol}
                         desc={desc}
                         price={price}
                         img={archangel}
                         cardHomeVersion={cardHomeVersion} />
                    )
                }
            )}
            </CardItemUl>
        </Wrapper>
    )
}
  

const Wrapper = styled.section`
    margin: 0 auto;
`;

const CardItemUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;
`;
