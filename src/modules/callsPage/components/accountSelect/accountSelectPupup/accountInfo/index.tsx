import { useHover } from "src/myHooks/useHover";
import { TaccauntData } from "..";
import { LogoutPopover } from "../logoutPopover";
import LogOut from 'src/accets/icons/logout.svg';
import LogOutHover from 'src/accets/icons/logout-hover.svg';
import Mobile from 'src/accets/icons/mobile.svg';
import Email from 'src/accets/icons/email.svg';
import './style.scss';

export const AccountInfo = ({currentAccountData}: {currentAccountData: TaccauntData}) => {
    const hover = useHover();

    return(
        <div className='account-info_box'>
            <div className='account-info_header'>
                <span>{`${currentAccountData.person_surname} ${currentAccountData.person_name}`}</span>
                <img style={{cursor: 'pointer'}} {...hover} src={hover.ishovered? LogOutHover : LogOut} alt="logout account" />
                {hover.ishovered && <LogoutPopover />}
            </div>
            <div className='account-info_role-wrapper'>
                <span>{currentAccountData.person_role}</span>
                <div className='account-info_role-dot'></div>
                <span>{currentAccountData.person_city}</span>
            </div>
            <div className='account-info_contacts-container'>
                <img src={Mobile} alt="phone icon" width='12px' height='12px' />
                <a href={`tel:${currentAccountData.person_mobile}`}>{currentAccountData.person_mobile}</a>
            </div>
            <div className='account-info_contacts-container'>
                <img src={Email} alt="email icon" width='13px' height='10px' />
                <a href={`mailto:${currentAccountData.person_email}`}>{currentAccountData.person_email}</a>
            </div>
        </div>
    )
}