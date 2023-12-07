import { useHover } from "src/myHooks/useHover";
import variables from 'src/sass/variables.module.scss';
import ChevronUp from 'src/accets/icons/up.svg';
import ChevronDown from 'src/accets/icons/down.svg';
import ChevronDownHover from 'src/accets/icons/down-hover.svg';
import './style.scss';
import { ReactNode } from "react";

type TselectorHeader = {
    toggleSelectorHandler: ()=> void, 
    isSelectorOpen:boolean, 
    title?: string | ReactNode,
    avatar?: string,
    isParentHovered?: string,
    isDateSelect?: boolean,
}

export const StockSelectHeader = ({toggleSelectorHandler, isSelectorOpen, title, avatar, isParentHovered,isDateSelect}: TselectorHeader) => {
    const hover = useHover();
    
    return (
        <div onClick={toggleSelectorHandler} {...hover} style={{cursor: 'pointer', display: 'flex'}}>
            <span style={{color: `${(hover.ishovered || isDateSelect)? variables.colorFontBright : variables.colorFontSecondary}`, userSelect: 'none'}}>
                {title}
                 {avatar &&  <div style={{marginLeft: '41px'}}>
                        <img src={avatar} alt="person avatar" width='40px' height='40px' />
                    </div>}
                </span>
            <button className="chevron-button" > 
                {!(hover.ishovered || isParentHovered) && !isSelectorOpen && <img src={ChevronDown} alt="open selector" />}
                {(hover.ishovered || isParentHovered) && !isSelectorOpen && <img src={ChevronDownHover} alt="may push open selector" />}
                {isSelectorOpen && <img src={ChevronUp} style={{marginBottom: '2px'}} alt="selector has been choosen" />} 
            </button>
        </div>
    )
}