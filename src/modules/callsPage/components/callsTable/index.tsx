import { useCheckboxHover } from 'src/myHooks/useCheckboxHover';
import { CallsTableItem } from './callsTableItem';
import { TableHeader } from './tableHeader';

import './style.scss';
import { IsLoading } from '../isLoading';

const dataMock = [
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

export const CallsTable = ({isError, isLoading}: {isError: boolean, isLoading: boolean}) => {
    const {ishovered, setHoverHandler, unhoverHandler} = useCheckboxHover();

    if (isLoading) {
        return(
            <IsLoading />
        )
    } 

    if (isError) {
        return(
            <>Ошибка загрузки данных</>
        )
    }
    
    return(
        <div className='calls-table__container'>
            <TableHeader ishovered={ishovered} />
            <ul className='calls-table__list'>
                {dataMock.map(({id})=> {
                    return(
                        <CallsTableItem key={id} setHoverHandler={setHoverHandler} unhoverHandler={unhoverHandler}/>
                    )
                })}
            </ul>
        </div>
    )
}