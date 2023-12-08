import { useQuery } from 'react-query';
import { fetchCalls } from 'src/utils';
import { CallsTable } from './components/callsTable';
import { useCallsPageStore } from './components/callsTable/callsPageStore';
import { FiltersSection } from './components/filterSection';
import { MainAdjustments } from './components/mainAdjustment';
import './style.scss';

export const CallsPage = () => {
    const callsFilters = useCallsPageStore();

    const {data , isLoading, isError} = useQuery(
    ['calls', ], 
    ()=> fetchCalls(callsFilters.callTypeFilter),
    {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    })

    console.log(data)

    return(
        <div className='calls-page__container'>
            <MainAdjustments />
            <FiltersSection />
            <CallsTable isLoading={isLoading} isError={isError} />
        </div>
    )
}