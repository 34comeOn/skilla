import { TselectValue } from '../stockSelect';
import { SelectItem } from './selectItem';
import './style.scss';

export type TselectPupup = {
    selectList: TselectValue[],
    toggleSelectorHandler: ()=> void,
    setValueHandler: (value: TselectValue)=> void,
}

export const SelectPopup = ({selectList, toggleSelectorHandler, setValueHandler}: TselectPupup) => {
    return(
        <ul className='select_list'>
            {selectList.map((item, index)=>
                <SelectItem key={index} value={item} toggleSelectorHandler={toggleSelectorHandler} setValueHandler={setValueHandler} />
            )}
        </ul>
    )
}