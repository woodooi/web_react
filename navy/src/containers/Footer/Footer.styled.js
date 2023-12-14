import styled from 'styled-components'
import { SmallLogo } from '../globals';
import Icon from '@ant-design/icons';

export const SmallLogoFooter = styled(SmallLogo)`
    align-self: center;
    margin: 0;
`

export const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IconBase = styled(Icon)`
    margin: 0 12px;
    font-size: 30px;
    color: ${({color}) => color};
`

export const IconWrapper = styled.div`
    margin-right: 24px;
`

export const Wrapper = styled.div`
    padding-top: 100px;
`;

export const Text = styled.div`

    margin-left: 38px;

    h1 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
`;

export const FooterSpan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
`

export const HorizontalLine = styled.p`  
    border-top: 1px solid black;
    width: 1380px;
    margin: 24px auto;
`;
