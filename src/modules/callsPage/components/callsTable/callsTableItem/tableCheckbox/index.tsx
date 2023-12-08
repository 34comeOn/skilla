import './style.scss';

export const TableCheckbox = ({ishovered}: {ishovered: string}) => {
    return(
        <div className='table-item__checkbox'>
            {ishovered && <input style={{margin: '0', width: '16px', height: '16px'}} type="checkbox" />}
        </div>
    )
}