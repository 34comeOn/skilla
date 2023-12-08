import Spinner from 'src/accets/icons/spinner.svg';
import './style.scss';

export const IsLoading = () => {
    return(
        <div className='loading-box'>
            <img className='loading-icon' src={Spinner} alt="spinner" width={12} height={12} />
            <span>Загружаем</span>
        </div>
    )
}