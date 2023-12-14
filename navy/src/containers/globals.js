import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Calibri;
        list-style-type: none;
    }
`

export const TextWrapper = styled.span`

    max-width: 700px;
    margin: 0;
    align-self: center;

    h1 {
        font-size: 36px;
    }

    p {
        font-size: 24px;
    }
`;

export const SmallLogo = styled.img`
    margin-left: 5%;
    width: 60px;
    height: 35px;
    border-radius: 8px;
`;


export default GlobalStyle;
