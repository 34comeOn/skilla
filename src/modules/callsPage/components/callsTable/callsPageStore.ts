import { create } from "zustand";

type TcallsPageStore = {
    allFiltersResult: string, 
    resetFiltersResult: () => void,
    replaceFilter: (noldFilterValue:string, newFilterValue:string ) => void,
}

export const useCallsPageStore = create<TcallsPageStore>((set)=>({
    allFiltersResult: '&date_start=2023-12-05&date_end=2023-12-08',
    resetFiltersResult: ( ) => set( state => ({
        allFiltersResult: '&date_start=2023-12-05&date_end=2023-12-08'
    })),
    replaceFilter: (oldFilterValue:string, newFilterValue:string ) => set( state => ({
        allFiltersResult: state.allFiltersResult.replace(oldFilterValue, newFilterValue) || `${state.allFiltersResult}${newFilterValue}`
    })),
}))