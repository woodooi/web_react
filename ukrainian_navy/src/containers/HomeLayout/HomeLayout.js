import React from 'react';
import { TextWrapper } from '../globals';
import { LayoutDiv, Wrapper, CardList, ViewMoreDiv, ViewMore, Logo, Cover } from './HomeLayout.styled';
import kema from '../../img/kema.jpg';
import rtl from '../../img/rtl.jpg';
import mop from '../../img/mop.jpg';
import ajfa from '../../img/ajfa.jpg';
import tba from '../../img/tba.jpg';
import load from '../../img/load.jpg';
import rl from '../../img/rl_.jpg';
import sta from '../../img/sta.jpg';
import dm from '../../img/dm.jpg';
import htsd from '../../img/htsd.jpg';
import seasons  from '../../img/72.jpg';
import { useState } from 'react';

export const Layout = ({ logo }) => {
  
  const [coverIdx, setCoverIdx] = useState(3);

  const coverList = [kema, rtl, mop, ajfa, tba, load, rl, sta, dm, htsd, seasons];

  const handleViewMore = () => {
    setCoverIdx(prev => prev + 3);
  };

  return (
    <Wrapper>
      <LayoutDiv>
        <Logo src={logo} alt="" />
        <TextWrapper>
          <h1>Heading</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </TextWrapper>
      </LayoutDiv>
      <CardList>
        {coverList.slice(0, coverIdx).map((image) => (
          <Cover src={image} alt='metal' />
        ))}
      </CardList>
      <ViewMoreDiv>
        <ViewMore onClick={handleViewMore}>View More</ViewMore>
      </ViewMoreDiv>
    </Wrapper>
  );
};
