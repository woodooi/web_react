import styled from "styled-components";

export const Wrapper = styled.section`
    padding-top: 40px;
    margin: 0 auto;
`;

export const InfoSpan = styled.span`
`;

export const AmountInput = styled.input`
    border: 2px solid black;
    height: 35px;
    border-radius: 10px;
    text-align: center;
`;

export const SeatsSelect = styled.select`
    width: 135px;
    border: 2px solid black;
    height: 35px;
    border-radius: 10px;
`

export const Fields = styled.div`
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const PriceDiv = styled.div`
    margin: 0 auto;
    padding-top: 60px;
    max-width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button`
    border: 2px solid;
    width: 150px;
    height: 50px;
    border-radius: 12px;
    background-color: white;
    color: black;
    font-size: 13px;
    margin-left: 20px;
`;

export const ButtonGray = styled(Button)`
    border-color: #444444;
    background-color: #444444;
    color: white;
`;

export const ItemDiv = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
`;

export const Archangel = styled.img``;

export const Characteristics = styled.span`
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const Char1 = styled.h2`
    border: 1px solid;
    width: 110px;
    height: 23px;
    border-radius: 12px;
    background-color: green;
    color: #FAFAFA;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Char2 = styled(Char1)`
    font-style: 10px;
    margin-left: 16px;
    background-color: #3D3D3D;
`
