import React from 'react';
import { Wrapper } from './Home.styled';

//components
import { Navigation } from '../Nav/Nav';
import { Layout } from '../HomeLayout/HomeLayout';
import { Footer } from '../Footer/Footer';

//images
function Home({logo, archangel}) {

    return (
        <Wrapper>
            <Navigation logo={logo} searchBarVisible={false} />
            <Layout logo={logo} archangel={archangel}/>
            <Footer logo={logo}/>
        </Wrapper>
    );
};

export default Home;
