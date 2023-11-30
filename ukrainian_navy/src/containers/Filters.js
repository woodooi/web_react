import React from "react";
import styled from "styled-components";
import { CaretDownOutlined } from "@ant-design/icons";

export const Filtered = () => {
  return (
    <Wrapper>
      <FilterBoxSpan>
        <FilterBox>
        Filter Box 1
          <CaretDownOutlined />
        </FilterBox>
        <FilterBox>
        Filter Box 2
        <CaretDownOutlined />
        </FilterBox>
        <FilterBox>
          Filter Box 3
          <CaretDownOutlined />
        </FilterBox>
      </FilterBoxSpan>
      <ApplyButton>Apply</ApplyButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 7%;
`;

const FilterBox = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 20px;
`;

const FilterBoxSpan = styled.span`
  display: flex;
  align-items: center;
`;

const ApplyButton = styled.button`
  width: 10%;
  height: 2.5em;
  color: black;
  padding: 10px 15px;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Filtered;
