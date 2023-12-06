import { create } from "zustand";
import { TaccauntData } from "./accountSelectPupup";
import Boss from 'src/accets/pic/boss-avatar.png';

type TaccountStore = {
    accountUser: TaccauntData, 
    switchUser: (newUser :TaccauntData ) => void
}

export const useAccountStore = create<TaccountStore>((set)=>({
    accountUser: {
        person_id: 2323,
        person_name: 'Кирилл',
        person_surname: 'Упоров',
        person_avatar: Boss,
        person_role: 'Директор',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    switchUser: (newUser :TaccauntData ) => set( state => ({
        accountUser: newUser
    }))
}))