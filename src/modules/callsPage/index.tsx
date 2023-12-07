import { MainAdjustments } from './components/mainAdjustment';
import './style.scss';

export const CallsPage = () => {
    return(
        <div className='calls-page__container'>
            <MainAdjustments />
            <div>FiltersSection</div>
            <div>CallsTable</div>

        </div>
    )
}