import { useHover } from "../../../../../../myHooks/useHover";
import variables from '../../../../../../sass/variables.module.scss';
import ChevronUp from 'src/accets/icons/up.svg';
import ChevronDown from 'src/accets/icons/down.svg';
import ChevronDownHover from 'src/accets/icons/down-hover.svg';
import './style.scss';
import { ReactNode } from "react";

type TselectorHeader = {
    toggleSelectorHandler: ()=> void, 
    isSelectorOpen:boolean, 
    title: string | ReactNode,
}

export const StockSelectHeader = ({toggleSelectorHandler, isSelectorOpen, title}: TselectorHeader) => {
    const hover = useHover();
    
    return (
        <div onClick={toggleSelectorHandler} {...hover} style={{cursor: 'pointer', display: 'flex'}}>
            <span style={{color: `${hover.ishovered? variables.colorFontBright : variables.colorFontSecondary}`, userSelect: 'none'}}>{title}</span>
            <button className="chevron-button" > 
                {!hover.ishovered && !isSelectorOpen && <img src={ChevronDown} alt="open selector" />}
                {hover.ishovered && !isSelectorOpen && <img src={ChevronDownHover} alt="may push open selector" />}
                {isSelectorOpen && <img src={ChevronUp} style={{marginBottom: '2px'}} alt="selector has been choosen" />} 
            </button>
        </div>
    )
}