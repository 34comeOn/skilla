import { CurrentDate } from '../currentDate';
import { Search } from '../search';
import { Statistics } from '../statistics';
import './style.scss';

export const Header = () => {
    return(
        <div className='header__container'>
            <CurrentDate />
            <Statistics />
            <Search />
            <div>Search</div>
            <div>Partner Select</div>
            <div>Account select</div>
        </div>
    )
}