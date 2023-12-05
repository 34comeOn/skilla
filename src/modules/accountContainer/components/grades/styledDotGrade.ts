import { styled } from "styled-components";

type TstyledDotGrade = {
    $backgroundColor: string,
}

export const StyledDotGrade = styled.div<TstyledDotGrade>`
    width: 8px;
    height: 8px;
    background-color: ${props => props.$backgroundColor};
    border-radius: 50%;
    margin-right: 2px;
`