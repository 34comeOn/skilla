import { ACCOUNT_IP_SELECT_DATA } from 'src/constants';
import { AccountSelect } from 'src/modules/callsPage/components/accountSelect';
import { StockSelect } from '../../../callsPage/components/select/stockSelect';
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
            <StockSelect data={ACCOUNT_IP_SELECT_DATA} />
            <AccountSelect />
        </div>
    )
}