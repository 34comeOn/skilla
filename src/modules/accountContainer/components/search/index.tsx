import SearchIcon from 'src/accets/icons/search.svg';
import './style.scss';

export const Search = () => {
    return(
        <div className='header__search'>
            <img src={SearchIcon} alt="search icon" />
        </div>
    )
}