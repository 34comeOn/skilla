import { AccountSelectItem } from '../accountSelectItem';
import './style.scss';
import { sortByTheRoles } from 'src/utils';
import { useAccountStore } from '../store';
import { ACCOUNT_DATA } from 'src/constants';
import { AccountInfo } from './accountInfo';

export type TselectPupup = {
    toggleSelectorHandler: ()=> void,
}

export type TaccauntData = {
    person_id: number,
    person_name: string,
    person_surname: string,
    person_avatar: string,
    person_role: string,
    person_city: string,
    person_email: string,
    person_mobile: string,
}

export type TallAccauntData = TaccauntData[]

export const AccountSelectPopup = ({ toggleSelectorHandler}: TselectPupup) => {
    const dataSortedByRoles = sortByTheRoles(ACCOUNT_DATA);
    const currentAccountData = useAccountStore(state => state.accountUser);

    return(
        <div className='account-select_box'>
            <AccountInfo currentAccountData={currentAccountData} />
            <div className='account-select_break-line'></div>
            <ul className='account-select_list'>
                {dataSortedByRoles.map((item,index)=> {
                    return (
                        <li key={index}>
                            <ul className='role_list'>
                                <span className='account-select_role-title'>{`${item.rolePersons.length>1? `${item.role}ы`: item.role}`}</span>
                                {item.rolePersons.map((item)=>
                                    <AccountSelectItem 
                                    key={item.person_id} 
                                    toggleSelectorHandler={toggleSelectorHandler}
                                    personData={item} 
                                    />
                                )}
                            </ul>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}