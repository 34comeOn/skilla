import { CALLS_SELECT_DATA, ERRORS_SELECT_DATA, PERFORMERS_SELECT_DATA, GRADES_SELECT_DATA, TYPES_SELECT_DATA, SOURSES_SELECT_DATA } from 'src/constants';
import { StockSelect } from '../../select/stockSelect';
import './style.scss';

export const SelectsBlock = () => {
    return(
        <div className='selects-block_container'>
            <StockSelect data={TYPES_SELECT_DATA} />
            <StockSelect data={PERFORMERS_SELECT_DATA} />
            <StockSelect data={CALLS_SELECT_DATA} />
            <StockSelect data={SOURSES_SELECT_DATA} />
            <StockSelect data={GRADES_SELECT_DATA} />
            <StockSelect data={ERRORS_SELECT_DATA} />
        </div>
    )
}