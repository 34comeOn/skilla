import { ReactNode } from 'react';
import { SelectItem } from './selectItem';
import './style.scss';

export type TselectPupup = {
    selectList: string[] | ReactNode[],
    toggleSelectorHandler: ()=> void,
    setTitleHandler: (title: string | ReactNode)=> void,
}

export const SelectPopup = ({selectList, toggleSelectorHandler, setTitleHandler}: TselectPupup) => {
    return(
        <ul className='select_list'>
            {selectList.map((title, index)=>
                <SelectItem key={index} title={title} toggleSelectorHandler={toggleSelectorHandler} setTitleHandler={setTitleHandler} />
            )}
        </ul>
    )
}