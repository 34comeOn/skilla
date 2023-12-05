import { styled } from "styled-components";

type TstyledBorderGrade = {
    color: string,
    $backgroundColor: string,
    $padding?: string,
}

export const StyledBorderGrade = styled.div<TstyledBorderGrade>`
    min-width: 56px;
    min-height: 26px;
    padding: 4px 6px;
    padding: ${props => props.$padding};
    background-color: ${props => props.$backgroundColor};
    border: 1px solid ${props => props.color};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${props => props.color};
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
`