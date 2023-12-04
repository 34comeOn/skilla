import variables from 'src/sass/variables.module.scss';
import { BorderGrade } from '../borderGrade';

export const PositiveBorderGrade = () => {
    return(
        <BorderGrade grade='Отлично' color={variables.colorSuccess} backgroundColor={variables.colorBackgroundGood}   />
    )
}