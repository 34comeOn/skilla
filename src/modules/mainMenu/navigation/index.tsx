import { NAVIGATION_DATA } from "src/constants";
import { NavigationItem } from "./navigationItem";
import './style.scss';

export const Navigation = () => {
    return(
        <nav>
            <ul className="nav_list">
                {NAVIGATION_DATA.map((navData, index)=> {
                    return(
                        <NavigationItem navData={navData}  key={index} />
                    )
                })}
            </ul>
        </nav>
    )
}