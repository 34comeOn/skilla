import variables from 'src/sass/variables.module.scss';
import { DotGrade } from '../dotGrade';

export const PositiveDotGrade = () => {
    return(
        <>
            <DotGrade backgroundColor={variables.colorSuccess} />
            <DotGrade backgroundColor={variables.colorSuccess} />
            <DotGrade backgroundColor={variables.colorSuccess} />
        </>
    )
}