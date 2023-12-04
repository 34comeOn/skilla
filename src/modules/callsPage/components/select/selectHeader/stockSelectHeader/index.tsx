import { useHover } from "../../../../../../myHooks/useHover";
import variables from '../../../../../../sass/variables.module.scss';
import ChevronUp from 'src/accets/icons/up.svg';
import ChevronDown from 'src/accets/icons/down.svg';
import ChevronDownHover from 'src/accets/icons/down-hover.svg';
import './style.scss'

export const StockSelectHeader = (
    {openSelectorHandler, isSelectorOpen}: {openSelectorHandler: ()=> void, isSelectorOpen:boolean}
    // {(open/close callback), title, titleColor}
) => {
    const hover = useHover();
    
    return (
        <div onClick={openSelectorHandler} {...hover} style={{cursor: 'pointer'}}>
            <span style={{color: `${hover.ishovered? variables.colorFontBright : variables.colorFontSecondary}`, userSelect: 'none'}}>Title fr props/store</span>
            <button className="chevron-button" > 
                {!hover.ishovered && !isSelectorOpen && <img src={ChevronDown} alt="open selector" />}
                {hover.ishovered && !isSelectorOpen && <img src={ChevronDownHover} alt="may push open selector" />}
                {isSelectorOpen && <img src={ChevronUp} style={{marginBottom: '2px'}} alt="selector has been choosen" />} 
            </button>
        </div>
    )
}