import variables from 'src/sass/variables.module.scss';
import { BorderGrade } from '../borderGrade';

export const DetectBorderGrade = () => {
    return(
        <BorderGrade grade='Распознать' color={variables.colorFontBright} backgroundColor={variables.colorBackgroundWhite} padding={'9px 24px 11px'}  />
    )
}