import { styled } from "styled-components";

type TstyledBorderGrade = {
    color: string,
    $backgroundColor: string,
}

export const StyledBorderGrade = styled.div<TstyledBorderGrade>`
    min-width: 56px;
    min-height: 26px;
    padding: 4px 6px;
    background-color: ${props => props.$backgroundColor};
    border: 1px solid ${props => props.color};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;
`