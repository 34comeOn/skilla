import { ResetFilters } from './resetFilters';
import { SearchByCalls } from './searchByCalls';
import { SelectsBlock } from './selectsBlock';
import './style.scss';

export const FiltersSection = () => {
    return(
        <div className='filters-section_container'>
            <SearchByCalls />
            <ResetFilters />
            <SelectsBlock />
        </div>
    )
}