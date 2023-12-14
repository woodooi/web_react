import React, { useState, createContext, useContext, useEffect } from "react";
import { ApplyButton, FilterBoxSpan, Wrapper } from "./Filters.styled";
import { Sort } from './Sort/Sort';
import { FilterByPrice } from './FilterBy/FilterByPrice';
import { DisplayContext } from "../Catalog/Catalog";
import { DataContext } from "../App";
import { Planes } from "../../data"
import { Spin } from "antd";

export const FilterValues = createContext();

export const Filtered = () => {

  const { planes, filterPlane, handleSetPlanes } = useContext(DataContext);
  const { handleSlider, handlePriceSort, handleVolumeSort } = useContext(DisplayContext);

    const sortedByPricePlanes = Planes.slice().sort((a, b) => (a.price - b.price))
    const MAX = sortedByPricePlanes.pop().price;
    const MIN = sortedByPricePlanes[0].price;

    const [ filterValues, setFilterValues ] = useState([false, false]);
    const [ sliderValues, setSliderValues ] = useState([MIN, MAX])

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

  useEffect(() => {
    handleSlider(sliderValues);
  }, [sliderValues, handleSlider]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlanes = await filterPlane({filterValues, sliderValues});
        if (fetchedPlanes.length === 0) {
          return <Spin />
        } else {
          handleSetPlanes(fetchedPlanes);
        }
      } catch (error) {
        console.error("Error fetching planes:", error);
      }
    };
  
    fetchData();
  }, [filterValues, sliderValues]);

  if (planes.length === 0) {
    return <Spin />
  }
  
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
