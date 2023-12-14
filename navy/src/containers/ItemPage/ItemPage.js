import React from "react";

import { Wrapper } from "./ItemPage.styled"
import { Navigation } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";
import { ItemLayout } from "../ItemLayout/ItemLayout"


const ItemPage = ({logo, archangel}) => {

    return (
      <Wrapper>
        <Navigation logo={logo} searchBarVisible={false} />
        <ItemLayout archangel={archangel}/>
        <Footer logo={logo} />
      </Wrapper>
    );
}

export default ItemPage