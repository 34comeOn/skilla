import { useQuery } from 'react-query';
import { fetchCalls } from 'src/utils';
import { CallsTable } from './components/callsTable';
import { useCallsPageStore } from './components/callsTable/callsPageStore';
import { FiltersSection } from './components/filterSection';
import { MainAdjustments } from './components/mainAdjustment';
import './style.scss';

export const CallsPage = () => {
    const callsFilters = useCallsPageStore(state => state.allFiltersResult);
    
    const {data , isLoading, isError} = useQuery(
        ['calls', callsFilters], 
        ()=> fetchCalls(callsFilters),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    )

    return(
        <div className='calls-page__container'>
            <MainAdjustments />
            <FiltersSection />
            <CallsTable isLoading={isLoading} isError={isError} />
        </div>
    )
}