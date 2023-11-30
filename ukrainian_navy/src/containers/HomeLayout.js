import React from 'react';
import { CardItem } from '../components/Card';
import styled from 'styled-components';
import { TextWrapper } from './globals';
import { planes } from '../data';

export const Layout = ({ logo, archangel}) => {
  // Select the first three items from the planes array
  const selectedPlanes = planes.slice(0, 3);

  return (
    <Wrapper>
      <LayoutDiv>
        <Logo src={logo} alt="" />
        <TextWrapper>
          <h1>Heading</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </TextWrapper>
      </LayoutDiv>
      <CardList>
        {selectedPlanes.map((plane) => (
          <CardItem
            key={`card-${plane.id}`}
            title={plane.title}
            vol={plane.vol}
            desc={plane.desc}
            price={plane.price}
            img={archangel}
            cardHomeVersion={false}
          />
        ))}
      </CardList>
      <ViewMoreDiv>
        <ViewMore>View More</ViewMore>
      </ViewMoreDiv>
    </Wrapper>
  );
};

// ... (rest of your styled components)

const LayoutDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ViewMoreDiv = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const ViewMore = styled.button`
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

const CardList = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.section`
  padding-top: 100px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 600px;
  height: 20em;
`;
