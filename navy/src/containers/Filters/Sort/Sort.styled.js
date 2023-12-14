import styled from "styled-components";

export const AbsoluteSpan = styled.span`
    position: absolute;
    top: 100%; 
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 150px; 
    padding: 10px; 
    background-color: #F2F2F2;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 999; 
`;

export const Wrapper = styled.div`
    position: relative;
    display: inline-block; 
`;

export const AbsoluteButton = styled.button`
    width: 125px;
    height: 40px;
    transition: transform 0.3s ease; 
    text-align: start;
    padding-left:10px;

    :hover {
        transform: scale(1.5);
    }
`;
