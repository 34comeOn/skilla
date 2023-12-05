import variables from 'src/sass/variables.module.scss';
import { DotGrade } from '../dotGrade';

export const NegativeDotGrade = () => {
    return(
        <DotGrade backgroundColor={variables.colorBad} />
    )
}