import React, { useContext } from "react";
import { CardItemUl, Wrapper } from "./CataloLayout.styled";

import { CardItem } from "../../components/Card/Card";
import { DisplayContext } from "../Catalog/Catalog";
import { DataContext } from "../App";


export const Layout = ({ archangel }) => {

    const planes = useContext(DataContext);
    const { sliderFilter, search, priceSort, volumeSort } = useContext(DisplayContext) || {};

    return (
        <Wrapper>
            <CardItemUl>
                {planes.sort(
                        (a, b) => (priceSort ? a.price - b.price : 0)
                    ).sort(
                        (a, b) => (volumeSort ? a.vol - b.vol : 0)
                    ).filter((item) => {
                        return item.price >= sliderFilter[0] && item.price <= sliderFilter[1];
                    }
                    ).filter((item) => {
                        return search.toLowerCase() === ''
                        ? item
                        : item.title.toLowerCase().includes(search.toLowerCase())
                    }).map(
                    (
                        { id, title, vol, desc, price },
                    ) => {
                        return (
                            <CardItem key={'iso-' + id}
                                id={id}
                                title={title}
                                vol={vol}
                                desc={desc}
                                price={price}
                                img={archangel} />
                        )
                    }
                )}
            </CardItemUl>
        </Wrapper>
    )
}
