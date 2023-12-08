import { create } from "zustand";

export type TdataResult = {
    id: number,
    partnership_id: string,
    partner_data: {
        id: string,
        name: string,
        phone: string,
    },
    date: string,
    date_notime: string,
    time: number,
    from_number: string,
    from_extension: string,
    to_number: string,
    to_extension: string,
    is_skilla: number,
    status: string,
    record: string,
    line_number: string,
    line_name: string,
    in_out: number,
    from_site: number,
    source: string,
    errors: string[],
    disconnect_reason: string,
    results: string[],
    stages: string[],
    abuse: [],
    contact_name: string,
    contact_company: string,
    person_id: number,
    person_name: string,
    person_surname: string,
    person_avatar: string,
    candidate_id: number,
    candidate_name: string,
    candidate_link: string,
    candidate_vacancy_name: string,
}

type TcallsPageStore = {
    callsData: TdataResult[],
    allFiltersResult: string, 
    resetFiltersResult: () => void,
    replaceFilter: (noldFilterValue:string, newFilterValue:string ) => void,
    setCallsData: (newData:TdataResult[]) => void,
}

export const useCallsPageStore = create<TcallsPageStore>((set)=>({
    callsData: [],
    setCallsData: ( newData:TdataResult[]) => set( state => ({
        callsData: newData
    })),
    allFiltersResult: '&date_start=2023-12-05&date_end=2023-12-08',
    resetFiltersResult: ( ) => set( state => ({
        allFiltersResult: '&date_start=2023-12-05&date_end=2023-12-08'
    })),
    replaceFilter: (oldFilterValue:string, newFilterValue:string ) => set( state => ({
        allFiltersResult: state.allFiltersResult.replace(oldFilterValue, newFilterValue) || `${state.allFiltersResult}${newFilterValue}`
    })),
}))