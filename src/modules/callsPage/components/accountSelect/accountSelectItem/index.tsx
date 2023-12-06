import { TaccauntData } from '../accountSelectPupup';
import { useAccountStore } from '../store';
import LoginHover from 'src/accets/icons/login_hover.svg';
import './style.scss';
import { useHover } from 'src/myHooks/useHover';

type TaccountSelectItem = {
    personData: TaccauntData,
    toggleSelectorHandler: ()=> void,
}

export const AccountSelectItem = ({
    personData,
    toggleSelectorHandler,
}: TaccountSelectItem) => {
    const switchUser = useAccountStore(state => state.switchUser);
    const hover = useHover();

    return (
        <li {...hover} className='account-select_item' onClick={()=> {
            toggleSelectorHandler();
            switchUser(personData);
            }}>
            <div>
                <img className='select_item-img' src={personData.person_avatar} alt="person avatar" width='32px' height='32px'/>
            </div>
            <span className='select_item-span' >{`${personData.person_name} ${personData.person_surname}`}</span>
            {hover.ishovered && <div className='select_login-box' >
                <img className='select_login-img' src={LoginHover} alt="login icon" />
            </div>}
        </li>
    )
}