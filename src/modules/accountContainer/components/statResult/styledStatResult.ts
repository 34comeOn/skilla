import styled from "styled-components";
import variables from '../../../../sass/variables.module.scss';

type TresultColor = {
    $resultColor: string
}

export const StyledStatResult = styled.span<TresultColor>`
    color: ${variables.colorSuccess};
    color: ${props => props.$resultColor};
    margin-left: 3px;
    letter-spacing: -0.7px;
`