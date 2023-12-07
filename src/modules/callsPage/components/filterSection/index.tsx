import { ResetFilters } from './resetFilters';
import { SearchByCalls } from './searchByCalls';
import './style.scss';

export const FiltersSection = () => {
    return(
        <div className='filters-section_container'>
            <SearchByCalls />
            <ResetFilters />
            <>selects block</>
        </div>
    )
}