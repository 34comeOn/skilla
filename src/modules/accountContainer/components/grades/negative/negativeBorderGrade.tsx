import variables from 'src/sass/variables.module.scss';
import { BorderGrade } from '../borderGrade';

export const NegativeBorderGrade = () => {
    return(
        <BorderGrade grade='Плохо' color={variables.colorBad} backgroundColor={variables.colorBackgroundBad}   />
    )
}