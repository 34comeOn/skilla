import { ReactNode } from 'react';
import './style.scss';

export type TselectItem = {
    title: string | ReactNode,
    toggleSelectorHandler: ()=> void,
    setTitleHandler: (title: string | ReactNode)=> void,
}

export const SelectItem = ({title, toggleSelectorHandler, setTitleHandler}: TselectItem) => {
    return (
        <li className='select_item' onClick={()=> {
            toggleSelectorHandler();
            setTitleHandler(title);
            }}>
            {title}
        </li>
    )
}