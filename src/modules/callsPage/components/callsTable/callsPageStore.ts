import { create } from "zustand";

type TcallsPageStore = {
    datePeriodFilter: string, 
    callTypeFilter: string, 
    callDurarionFilter: string, 
    setDatePeriodFilter: (newPeriod:string ) => void
    setCallTypeFilter: (newCallType:string ) => void
    setCallDurarionFilter: (newCallDurarion:string ) => void
}

export const useCallsPageStore = create<TcallsPageStore>((set)=>({
    datePeriodFilter: '3 дня',
    callTypeFilter: '',
    callDurarionFilter: '',
    setDatePeriodFilter: (newPeriod:string ) => set( state => ({
        datePeriodFilter: newPeriod
    })),
    setCallTypeFilter: (newCallType:string ) => set( state => ({
        callTypeFilter: newCallType
    })),
    setCallDurarionFilter: (newCallDurarion:string ) => set( state => ({
        callDurarionFilter: newCallDurarion
    })),
}))