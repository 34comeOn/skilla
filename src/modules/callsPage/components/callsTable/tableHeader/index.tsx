import { TableCheckbox } from '../callsTableItem/tableCheckbox';
import './style.scss';

export const TableHeader = ({ishovered}: {ishovered: string}) => {
    return(
        <div className='table-header__container'>
            <TableCheckbox ishovered={ishovered} />
            {/* <div className='table-header__checkbox'>
                <input style={{margin: '0', width: '16px', height: '16px'}} type="checkbox" />
            </div> */}
            <span>Тип</span>
            <span>Время</span>
            <span>Сотрудник</span>
            <div></div>
            <span className='table-header__call'>Звонок</span>
            <span className='table-header__sourse'>Источник</span>
            <span className='table-header__grade'>Оценка</span>
            <span className='table-header__duration'>Длительность</span>
        </div>
    )
}