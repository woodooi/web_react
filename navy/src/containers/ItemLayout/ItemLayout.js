import React, { useContext, useEffect, useState } from "react";
import { Wrapper, InfoSpan, ItemDiv, Archangel, Fields, AmountInput, Characteristics, Char1, Char2, PriceDiv, Button, ButtonGray, SeatsSelect } from "./ItemLayout.styled";
import { TextWrapper } from "../globals";
import { useHistory, useParams } from "react-router-dom";
import { DataContext } from "../App";
import { Spin } from "antd";

export const ItemLayout = ({ archangel }) => {
  const { getPlaneById } = useContext(DataContext);
  const [ plane, setPlane ] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlane = await getPlaneById(id);
        if (fetchedPlane) {
          setPlane(fetchedPlane);
        } else {
          console.log("Error fetching a plane");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getPlaneById, id]);

  if (!plane) {
    return <Spin />;
  }

  const handleGoBack = () => {
    history.push('/catalog');
  };

  console.log({plane});

  return (
    <Wrapper>
      <ItemDiv>
        <Archangel src={archangel} alt="archangel" />
        <InfoSpan>
          <Characteristics>
            <Char1>Tank volume: {plane.tank_volume} g</Char1>
            <Char2>beauty: 100%</Char2>
          </Characteristics>
          <TextWrapper>
            <h1>{plane.name}</h1>
            <p>{plane.description}</p>
          </TextWrapper>
          <Fields>
            <span>
              <h1>Amount:</h1>
              <br />
              <AmountInput placeholder="1" type="number" />
            </span>
            <span style={{ margin: '30px' }}>
              <h1>Number of Seats:</h1>
              <br />
              <SeatsSelect />
            </span>
          </Fields>
        </InfoSpan>
      </ItemDiv>
      <PriceDiv>
        <h2>Price: ${plane.price}</h2>
        <span>
          <Button onClick={handleGoBack}>Go Back</Button>
          <ButtonGray>Add to Cart</ButtonGray>
        </span>
      </PriceDiv>
    </Wrapper>
  );
};
