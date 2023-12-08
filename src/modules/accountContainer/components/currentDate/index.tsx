import { formatDate } from "../../../../utils";
import './style.scss'

export const CurrentDate = () => {
    return(
        <span className="header__date">
            {formatDate()}
        </span>
    )
}