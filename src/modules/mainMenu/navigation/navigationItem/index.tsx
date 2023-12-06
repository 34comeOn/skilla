import { TnavigationItem } from "src/constants";
import { NavigationTitle } from "./navigationTitle";
import './style.scss';

export const NavigationItem = ({navData}: {navData:TnavigationItem}) => {
    return(
        <li className={`${navData.isActive? 'nav-item_box--active': ''} nav-item_box`} >
            {navData.isActive && <div className="nav-item_line" />}
            <img className="nav-item_icon" src={navData.icon} alt={navData.alt} />
            <NavigationTitle navData={navData} />
            {navData.isActive && <div className="nav-item_dot" />}
        </li>
    )
}