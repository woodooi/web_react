import React from 'react';
import styled from 'styled-components';

//components
import { Navigation } from './Nav';
import { Layout } from './HomeLayout';
import { Footer } from './Footer';

//images
function Home({logo, archangel}) {
    return (
        <Wrapper>
            <Navigation logo={logo} searchBarVisible={false}/>
            <Layout logo={logo} archangel={archangel}/>
            <Footer logo={logo}/>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin: 0 auto;
`

export default Home;
