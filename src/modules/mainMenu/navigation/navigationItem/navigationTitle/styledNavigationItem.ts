import { styled } from "styled-components";
import variables from 'src/sass/variables.module.scss';

type TstyledNavigationItem ={
    $active: boolean,
}

export const StyledNavigationItem = styled.a<TstyledNavigationItem>`
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: ${(props => (props.$active)? variables.colorFontWhite : variables.colorFontLight)};
`