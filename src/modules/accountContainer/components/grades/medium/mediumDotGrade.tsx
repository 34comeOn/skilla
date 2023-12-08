import variables from 'src/sass/variables.module.scss';
import { DotGrade } from '../dotGrade';

export const MediumDotGrade = () => {
    return(
        <>
            <DotGrade backgroundColor={variables.colorBackgroundMedium} />
            <DotGrade backgroundColor={variables.colorBackgroundMedium} />
        </>
    )
}