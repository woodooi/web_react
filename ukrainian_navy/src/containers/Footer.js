import Icon, {YoutubeOutlined, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined} from '@ant-design/icons';
import React from 'react'
import styled from 'styled-components'
import { SmallLogo } from './globals';

export const Footer = ({logo}) => {
    return (
        <Wrapper>
            <FooterDiv>
                <Text>
                    <h1>Heading</h1>
                    <p>In publishing and graphic design, Lorem i<br /> commonly used to demonstrate the visual form of
                    <br />Lorem ipsum may be used</p>
                </Text>
                <SmallLogoFooter src={logo} alt=""/>
                <IconWrapper>
                    <IconBase component={YoutubeOutlined} color='red'/>
                    <IconBase component={TwitterOutlined} color='lightblue'/>
                    <IconBase component={GooglePlusOutlined} color='darkred'/>
                    <IconBase component={LinkedinOutlined} color='darkblue'/>
                </IconWrapper>
            </FooterDiv>
            <FooterSpan>
                <HorizontalLine />
                <p style={{ 
                }}>2020 IoY, Copyright All Rights Reserved, be be be</p>
            </FooterSpan>
        </Wrapper>
    );
}

const SmallLogoFooter = styled(SmallLogo)`
    align-self: center;
    margin: 0;
`

const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IconBase = styled(Icon)`
    margin: 0 12px;
    font-size: 30px;
    color: ${({color}) => color};
`

const IconWrapper = styled.div`
    margin-right: 24px;
`

const Wrapper = styled.div`
    padding-top: 100px;
`;

const Text = styled.div`

    margin-left: 38px;

    h1 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
`;

const FooterSpan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
`

const HorizontalLine = styled.p`  
    border-top: 1px solid black;
    width: 1380px;
    margin: 24px auto;
`;
