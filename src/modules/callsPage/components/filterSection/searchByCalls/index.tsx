import { useState } from 'react';
import { useHover } from 'src/myHooks/useHover';
import SearchIcon from 'src/accets/icons/search.svg';
import SearchIconHover from 'src/accets/icons/search-hover.svg';
import Close from 'src/accets/icons/close.svg';
import CloseHover from 'src/accets/icons/close-hover.svg';
import { PatternFormat } from 'react-number-format';
import './style.scss';

export const SearchByCalls = () => {
    const [isSearchInputShown, setIsSearchInputShown] = useState(false);
    const hover = useHover();
    const closeHover = useHover();

    const toggleHandler = () => {
        setIsSearchInputShown(!isSearchInputShown)
    }

    return(
        <div className='search-calls_container'>
            {!isSearchInputShown && <div onClick={toggleHandler} {...hover} className='search-calls_caption-box'>
               {!hover.ishovered && <img className='search-calls_caption-icon' src={SearchIcon} alt="search icon" width='16px' height='16px' />}
               {hover.ishovered && <img className='search-calls_caption-icon' src={SearchIconHover} alt="use search icon" width='16px' height='16px' />}
                <span>Поиск по звонкам</span>
            </div>}
            {isSearchInputShown && <div className='search-calls_input-box'>
                <img className='search-calls_input-search-icon' src={SearchIcon} alt="input search icon" width='16px' height='16px' />
                <PatternFormat className='search-calls_input' format="+7 (###) ### ## ##" allowEmptyFormatting mask=" " />
                <button className='search-calls_close-button' onClick={toggleHandler}><img {...closeHover} className='search-calls_close-icon' src={closeHover.ishovered? CloseHover: Close} alt="close button" width='14px' height='14px' /> </button>
            </div>}
        </div>
    )
}