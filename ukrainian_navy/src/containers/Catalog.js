import React from "react";
import styled from "styled-components";

import { Navigation } from './Nav';
import { Layout } from "./CatalogLayout";
import { Footer } from "./Footer";
import { Filtered } from './Filters'

function Catalog({logo, archangel}) {
    return (
        <Wrapper>
            <Navigation logo={logo} searchBarVisible={true} />
            <Filtered />
            <Layout archangel={archangel} cardHomeVersion={true}/>
            <Footer logo={logo} />
        </Wrapper>
    );
}

const Wrapper = styled.section`

`;

export default Catalog;