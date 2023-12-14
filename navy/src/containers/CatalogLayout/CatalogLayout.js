import React, { useContext } from "react";
import { CardItemUl, Wrapper } from "./CataloLayout.styled";
import { Spin } from "antd";

import { CardItem } from "../../components/Card/Card";
import { DataContext } from "../App";


export const Layout = ({ archangel }) => {

    const { planes } = useContext(DataContext);

    if (planes.length === 0 ) {
        return <Spin />;
      } 
    return (
        <Wrapper>
            <CardItemUl>
                {planes.map(
                    (plane) => {
                        return (
                            <CardItem key={'iso-' + plane.id}
                                id={plane.id}
                                title={plane.name}
                                vol={plane.tank_volume}
                                desc={plane.description}
                                price={plane.price}
                                img={archangel} />
                        )
                    }
                )}
            </CardItemUl>
        </Wrapper>
    )
}
