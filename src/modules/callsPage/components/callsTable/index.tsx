import { useState } from 'react';
import { CallsTableItem } from './callsTableItem';
import './style.scss';
import { TableHeader } from './tableHeader';

const data = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
]

export const CallsTable = () => {
    const [ishovered, setIsHovered] = useState('');

    const setHoverHandler = () => {
        setIsHovered('true')
    }
    const unHoverHandler = () => {
        setIsHovered('')
    }

    return(
        <div className='calls-table__container'>
            <TableHeader ishovered={ishovered} />
            <ul className='calls-table__list'>
                {data.map(({id})=> {
                    return(
                        <CallsTableItem key={id} setHoverHandler={setHoverHandler} unHoverHandler={unHoverHandler}/>
                    )
                })}
            </ul>
        </div>
    )
}