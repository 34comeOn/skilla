import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchCalls } from 'src/utils';
import { CallsTable } from './components/callsTable';
import { useCallsPageStore } from './components/callsTable/callsPageStore';
import { FiltersSection } from './components/filterSection';
import { MainAdjustments } from './components/mainAdjustment';
import './style.scss';

export const CallsPage = () => {
    const callsFilters = useCallsPageStore(state => state.allFiltersResult);
    const setCallsData = useCallsPageStore(state => state.setCallsData);
    const callsData = useCallsPageStore(state => state.callsData);
    
    const {data, isLoading, isError, status} = useQuery(
        ['calls', callsFilters], 
        ()=> fetchCalls(callsFilters),
        {
            // keepPreviousData: true, 
            refetchOnWindowFocus: false,
        }
    )
        
    useEffect(() => {
        if (status === 'success') {
            setCallsData(data.results)
        }
      }, [status, data, setCallsData, callsData]);

    return(
        <div className='calls-page__container'>
            <MainAdjustments />
            <FiltersSection />
            <CallsTable isLoading={isLoading} isError={isError} />
        </div>
    )
}