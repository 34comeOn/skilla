import { TableCheckbox } from '../callsTableItem/tableCheckbox';
import './style.scss';

export const TableHeader = ({ishovered}: {ishovered: string}) => {
    return(
        <div className='table-header__container'>
            <TableCheckbox ishovered={ishovered} />
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