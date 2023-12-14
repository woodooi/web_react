import React, {useState, createContext} from "react";
import { Navigation } from "../Nav/Nav";
import { Layout } from "../CatalogLayout/CatalogLayout";
import { Footer } from "../Footer/Footer";
import { Filtered } from '../Filters/Filters'

// контекст для передачі значень та функцій для зміни значень 

export const DisplayContext = createContext()

function Catalog({logo, archangel}) {

    // стейти для зміни пошукової стрічки і типу сортування у Filtered та Navigation
    // і їх передачі до Layout

    const [search, setSearch] = useState("");
    const [priceSort, setPriceSort] = useState(false)
    const [volumeSort, setVolumeSort] = useState(false)
    const [sliderFilter, setFilterSlider] = useState([0, Infinity])

    function handleSlider(values) {
        setFilterSlider(values)
    }

    function handleVolumeSort() {
        setVolumeSort(prev => !prev)
    }

    function handlePriceSort() {
        setPriceSort(prev => !prev)
    }
  
    function handleSearch(str) {
      setSearch(str);
    }
  
    return (
        <DisplayContext.Provider value = {{search, priceSort, volumeSort, sliderFilter,
                                           handleSearch, handlePriceSort, handleVolumeSort, handleSlider}}>
            <Navigation logo={logo} searchBarVisible={true} />
            <Filtered />
            <Layout archangel={archangel} />
            <Footer logo={logo} />
        </DisplayContext.Provider>
    );
}

export default Catalog;