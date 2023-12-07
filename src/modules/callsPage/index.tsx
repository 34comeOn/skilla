import { FiltersSection } from './components/filterSection';
import { MainAdjustments } from './components/mainAdjustment';
import './style.scss';

export const CallsPage = () => {
    return(
        <div className='calls-page__container'>
            <MainAdjustments />
            <FiltersSection />
            <div>CallsTable</div>
        </div>
    )
}