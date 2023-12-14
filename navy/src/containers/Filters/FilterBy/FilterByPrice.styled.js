import styled from "styled-components";
import { AbsoluteSpan } from "../Sort/Sort.styled";

export const FilterBox = styled.button`
  width: 150px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;
`;

export const AbsoluteSliderSpan = styled(AbsoluteSpan)`
  height: 65px;
  align-items: normal;

  h2 {
    font-size: 10px;
  }
`;
