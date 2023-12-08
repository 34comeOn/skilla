import styled from "styled-components";

type TprogressRatio = {
    $progressRatio: number;
    $resultColor: string;
  }

export const StyledBar = styled.div<TprogressRatio>`
    width: ${props => props.$progressRatio*156}px;
    margin-top: -6px;
    z-index: 1;
    height: 6px;
    border-radius: 12px;
    background-color: ${props => props.$resultColor};
`