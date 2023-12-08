import { Bar } from "../bar";
import { StatResult } from "../statResult";
import './style.scss';

type TstatItem = {
    title: string, 
    result: string,
    resultColor: string,
    progressRatio: number,
}

export const StatItem = ({title, result, resultColor, progressRatio}: TstatItem) => {
    return(
        <li>
            <span className="stat-item__title">{title}</span>
            <StatResult result={result} resultColor={resultColor}/>
            <Bar progressRatio={progressRatio} resultColor={resultColor}/>
        </li>
    )
}