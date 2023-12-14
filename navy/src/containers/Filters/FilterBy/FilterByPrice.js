import React, { useContext } from "react";
import { FilterBox, AbsoluteSliderSpan } from "./FilterByPrice.styled";
import { CaretDownOutlined } from "@ant-design/icons";
import { Wrapper } from "../Sort/Sort.styled";
import { Slider } from "antd";
import { FilterValues } from "../Filters";
import { useState } from "react";

export const FilterByPrice = () => {

  const [ showSortBox, setShowSortBox ] = useState(false);

  const handleClick = () => {
    setShowSortBox(!showSortBox);
  };

  return (
    <Wrapper>
      <FilterBox type='button' onClick={handleClick}>
        Filter By Price:
        <CaretDownOutlined />
      </FilterBox>
      {showSortBox && <SliderBox />}
    </Wrapper>
  );
}

const SliderBox = () => {

  const { MAX, MIN, sliderValues, handleSliderFilter } = useContext(FilterValues);

  return (
    <AbsoluteSliderSpan>
      <Slider min={MIN} max={MAX} 
              disabled={false} range={true}
              value={sliderValues}
              onChange={((values) => handleSliderFilter(values))}/>
      <h2>{sliderValues[0]}$ --- {sliderValues[1]}$</h2>
    </AbsoluteSliderSpan>
  );
};