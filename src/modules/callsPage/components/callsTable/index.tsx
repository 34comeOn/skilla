import { useCheckboxHover } from 'src/myHooks/useCheckboxHover';
import { CallsTableItem } from './callsTableItem';
import { TableHeader } from './tableHeader';
import './style.scss';
import { IsLoading } from '../isLoading';
import { useCallsPageStore } from './callsPageStore';

export const CallsTable = ({isError, isLoading}: {isError: boolean, isLoading: boolean}) => {
    const {ishovered, setHoverHandler, unhoverHandler} = useCheckboxHover();
    const callsData = useCallsPageStore(state => state.callsData);

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
                {callsData.map((item)=> {
                    return(
                        <CallsTableItem item={item} key={item.id} setHoverHandler={setHoverHandler} unhoverHandler={unhoverHandler}/>
                    )
                })}
            </ul>
        </div>
    )
}