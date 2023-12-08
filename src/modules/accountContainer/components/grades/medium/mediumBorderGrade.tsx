import variables from 'src/sass/variables.module.scss';
import { BorderGrade } from '../borderGrade';

export const MediumBorderGrade = () => {
    return(
        <BorderGrade grade='Хорошо' color={variables.colorFontDark} backgroundColor={variables.colorBackgroundHover}   />
    )
}