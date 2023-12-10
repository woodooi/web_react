import React, { useState, createContext, useContext } from "react";
import { ApplyButton, FilterBoxSpan, Wrapper } from "./Filters.styled";
import { Sort } from './Sort/Sort';
import { FilterByPrice } from './FilterBy/FilterByPrice';
import { DisplayContext } from "../Catalog/Catalog";
import { DataContext } from "../App";

export const FilterValues = createContext();

export const Filtered = () => {

  const planes = useContext(DataContext);
  const sortedByPricePlanes = planes.slice().sort((a, b) => (a.price - b.price))
  const MAX = sortedByPricePlanes.pop().price;
  const MIN = sortedByPricePlanes[0].price;

  const { handleSlider, handlePriceSort, handleVolumeSort } = useContext(DisplayContext);
  const [ filterValues, setFilterValues ] = useState([false, false]);
  const [ sliderValues, setSliderValues ] = useState([MIN, MAX])
  console.log(sliderValues);

  const handleSort = (index) => {
      setFilterValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = !newValues[index];
        return newValues;
      })
  }

  const handleSliderFilter = (values) => {
      setSliderValues(values)
  }

  handleSlider(sliderValues);

  return (
    <FilterValues.Provider value={{MAX, MIN, filterValues, handleSort, sliderValues, handleSliderFilter}}>
      <Wrapper>
        <FilterBoxSpan>
          <FilterByPrice />
          <Sort />
        </FilterBoxSpan>
        <ApplyButton onClick={() => {
          filterValues[0] && handlePriceSort();  
          filterValues[1] && handleVolumeSort();
        }}>Apply</ApplyButton>
      </Wrapper>
    </FilterValues.Provider>
  );
};
