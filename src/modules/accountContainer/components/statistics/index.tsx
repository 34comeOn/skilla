import { STATISTIC_DATA } from '../../../../constants';
import { StatItem } from '../statItem';
import './style.scss';


export const Statistics = () => {
    return(
        <ul className='header__statistics' style={{listStyle: 'none'}}>
            {STATISTIC_DATA && STATISTIC_DATA.map(({title, result, resultColor, progressRatio}, index)=>{
                return(
                    <div key={index} style={{marginLeft: `${(index === 0)? '0' : '56px'}`}}>
                        <StatItem title={title} result={result} resultColor={resultColor} progressRatio={progressRatio}/>
                    </div>
                )
            })}
            
        </ul>
    )
}