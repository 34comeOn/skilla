import { CALLS_PERIOD_SELECT_DATA } from "src/constants";
import { useHover } from "src/myHooks/useHover";
import { StockSelect } from "../../stockSelect";
import Calendar from 'src/accets/icons/calendar.svg';
import CalendarHover from 'src/accets/icons/calendar-hover.svg';
import Left from 'src/accets/icons/left.svg';
import LeftHover from 'src/accets/icons/left-hover.svg';
import Right from 'src/accets/icons/right.svg';
import RightHover from 'src/accets/icons/right-hover.svg';
import './style.scss';

export const DateSelect = () => {
    const hover = useHover();
    const leftHover = useHover();
    const rightHover = useHover();
    return (
        <div className="date-select_container">
             <button {...leftHover} className="chevron-button_side" > 
                {!leftHover.ishovered &&  <img src={Left} alt="previous date button" width='7px' height='10px' />}
                {leftHover.ishovered && <img src={LeftHover} alt="push previous date button" width='7px' height='10px' />}
            </button>
            <div className="selector-title_box" {...hover}>
                {hover.ishovered && <img className="selector-title_icon" src={CalendarHover} alt="calendar icon" width='16px' height='18px' />}
                {!hover.ishovered && <img className="selector-title_icon" src={Calendar} alt="calendar icon" width='16px' height='18px' />}
                <StockSelect isDateSelect={true} ishovered={hover.ishovered} data={CALLS_PERIOD_SELECT_DATA} />
            </div>
            <button {...rightHover} className="chevron-button_side" > 
                {!rightHover.ishovered &&  <img src={Right} alt="next date button" width='7px' height='10px' />}
                {rightHover.ishovered && <img src={RightHover} alt="push next date button" width='7px' height='10px' />}
            </button>
        </div>
    )
}