import { useHover } from 'src/myHooks/useHover';
import Close from 'src/accets/icons/close.svg';
import CloseHover from 'src/accets/icons/close-hover.svg';
import variables from 'src/sass/variables.module.scss';
import './style.scss';
import { useCallsPageStore } from '../../callsTable/callsPageStore';

export const ResetFilters = () => {
    const closeHover = useHover();

    const resetFilters = useCallsPageStore(state => state.resetFiltersResult);

    return(
        <div onClick={()=> resetFilters()} {...closeHover} className='reset-filters_container'>
             <span style={{color: `${closeHover.ishovered ? variables.colorFontBright : variables.colorFontSecondary}`, userSelect: 'none', cursor: 'pointer'}}>Сбросить фильтры</span>
             <button  className='reset-filters_close-button' >
                <img  className='reset-filters_close-icon' src={closeHover.ishovered? CloseHover: Close} alt="close button" width='9px' height='9px' /> 
            </button>
        </div>
    )
}