import { TaccauntData } from 'src/modules/callsPage/components/accountSelect/accountSelectPupup';
import variables from '../sass/variables.module.scss';
import Boss from 'src/accets/pic/boss-avatar.png';
import Person from 'src/accets/pic/avatar.png';
import { PositiveBorderGrade } from 'src/modules/accountContainer/components/grades/positive/positiveBorderGrade';
import { NegativeBorderGrade } from 'src/modules/accountContainer/components/grades/negative/negativeBorderGrade';
import { MediumBorderGrade } from 'src/modules/accountContainer/components/grades/medium/mediumBorderGrade';
import { PositiveDotGrade } from 'src/modules/accountContainer/components/grades/positive/positiveDotGrade';
import { MediumDotGrade } from 'src/modules/accountContainer/components/grades/medium/mediumDotGrade';
import { NegativeDotGrade } from 'src/modules/accountContainer/components/grades/negative/negativeDotGrade';

export const STATISTIC_DATA = [
    {
        title: 'Новые звонки', 
        result: '20 из 30 шт',
        resultColor: variables.colorSuccess,
        progressRatio: 0.66,
    },
    {
        title: 'Качество разговоров', 
        result: '40%',
        resultColor: variables.colorMiddle,
        progressRatio: 0.4,
    },
    {
        title: 'Конверсия в заказ', 
        result: '67%',
        resultColor: variables.colorBad,
        progressRatio: 0.67,
    },
]

export type TallAccauntData = TaccauntData[]

export const ACCOUNT_DATA: TallAccauntData = [
    {
        person_id: 2323,
        person_name: 'Кирилл',
        person_surname: 'Упоров',
        person_avatar: Boss,
        person_role: 'Директор',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2324,
        person_name: 'Мирон',
        person_surname: 'Батонов',
        person_avatar: Person,
        person_role: 'Оператор',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2325,
        person_name: 'Алексей',
        person_surname: 'Ильин',
        person_avatar: Person,
        person_role: 'Оператор',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2326,
        person_name: 'Милана',
        person_surname: 'Константинопольская',
        person_avatar: Person,
        person_role: 'Оператор',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2327,
        person_name: 'Александра',
        person_surname: 'Сизых',
        person_avatar: Person,
        person_role: 'Логист',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2328,
        person_name: 'Илья',
        person_surname: 'Алексеев',
        person_avatar: Person,
        person_role: 'Логист',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2329,
        person_name: 'Владимир',
        person_surname: 'Петров',
        person_avatar: Person,
        person_role: 'Логист',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2340,
        person_name: 'Полина',
        person_surname: 'Калинина',
        person_avatar: Person,
        person_role: 'Бухгалтер',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2341,
        person_name: 'Наталья',
        person_surname: 'Натальева',
        person_avatar: Person,
        person_role: 'Бухгалтер',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
    {
        person_id: 2342,
        person_name: 'Константин',
        person_surname: 'Константинопольский',
        person_avatar: Person,
        person_role: 'Бухгалтер',
        person_city: 'Санкт-Петербург',
        person_email: 'hi@skilla.ru',
        person_mobile: '8 (800) 333-17-21',
    },
]

export const ACCOUNT_IP_SELECT_DATA = [
    'ИП Сидорова Александра Михайловна',
    'ООО Грузчиков Сервис Запад',
    'ИП Митрофанов М.М.',
    'ИП Иванов М.М.',
    'Все организации',
]

const selectDataNodes = [
    'Все организации',
    'ООО Грузчиков Сервис Запад',
    <PositiveBorderGrade />,
    <NegativeBorderGrade />,
    <MediumBorderGrade />,
    <PositiveDotGrade />,
    <MediumDotGrade />,
    <NegativeDotGrade />,
]