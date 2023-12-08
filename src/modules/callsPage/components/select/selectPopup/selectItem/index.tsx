import { TselectValue } from '../../stockSelect';
import './style.scss';

export type TselectItem = {
    value: TselectValue,
    toggleSelectorHandler: ()=> void,
    setValueHandler: (value: TselectValue)=> void,
}

export const SelectItem = ({value, toggleSelectorHandler, setValueHandler}: TselectItem) => {
    return (
        <li className='select_item' onClick={()=> {
            toggleSelectorHandler();
            setValueHandler(value);
            }}>
            {value.value}
        </li>
    )
}