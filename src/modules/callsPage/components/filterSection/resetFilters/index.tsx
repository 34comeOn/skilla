import { useHover } from 'src/myHooks/useHover';
import Close from 'src/accets/icons/close.svg';
import CloseHover from 'src/accets/icons/close-hover.svg';
import variables from 'src/sass/variables.module.scss';
import './style.scss';

export const ResetFilters = () => {
    const closeHover = useHover();

    return(
        <div {...closeHover} className='reset-filters_container'>
             <span style={{color: `${closeHover.ishovered ? variables.colorFontBright : variables.colorFontSecondary}`, userSelect: 'none', cursor: 'pointer'}}>Сбросить фильтры</span>
             <button className='reset-filters_close-button' >
                <img  className='reset-filters_close-icon' src={closeHover.ishovered? CloseHover: Close} alt="close button" width='9px' height='9px' /> 
            </button>
        </div>
    )
}