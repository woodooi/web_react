import {YoutubeOutlined, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined} from '@ant-design/icons';
import React from 'react'
import { Wrapper, Text, FooterDiv, IconWrapper, 
         IconBase, FooterSpan, HorizontalLine, SmallLogoFooter } from './Footer.styled';

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
