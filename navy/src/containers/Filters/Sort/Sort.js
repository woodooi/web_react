import React, { useState, useContext } from "react";
import { FilterBox } from "../FilterBy/FilterByPrice.styled";
import { CaretDownOutlined } from "@ant-design/icons";
import { AbsoluteSpan, AbsoluteButton, Wrapper } from "./Sort.styled";
import { FilterValues } from "../Filters";

export const Sort = () => {

  const [showSortBox, setShowSortBox] = useState(false);

  const handleClick = () => {
    setShowSortBox(!showSortBox);
  };

  return (
    <Wrapper>
      <FilterBox type='button' onClick={handleClick}>
        Sort by:
        <CaretDownOutlined />
      </FilterBox>
      {showSortBox && <SortBox />}
    </Wrapper>
  );
}

const SortBox = () => {

  const { handleSort } = useContext(FilterValues);

  return (
    <AbsoluteSpan>
      <AbsoluteButton onClick={() => handleSort(0)}>Price</AbsoluteButton>
      <AbsoluteButton onClick={() => handleSort(1)}>Tank Volume</AbsoluteButton>
    </AbsoluteSpan>
  );
};
