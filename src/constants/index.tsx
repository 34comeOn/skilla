import { TaccauntData } from 'src/modules/callsPage/components/accountSelect/accountSelectPupup';
import variables from '../sass/variables.module.scss';
import Boss from 'src/accets/pic/boss-avatar.png';
import Person from 'src/accets/pic/avatar.png';
import Performer from 'src/accets/pic/performer.png';
import Calls from 'src/accets/icons/nav-calls.svg';
import Agents from 'src/accets/icons/nav-agents.svg';
import Results from 'src/accets/icons/nav-results.svg';
import Orders from 'src/accets/icons/nav-orders.svg';
import Mail from 'src/accets/icons/nav-mail.svg';
import Docs from 'src/accets/icons/nav-docs.svg';
import Performers from 'src/accets/icons/nav-performers.svg';
import Reports from 'src/accets/icons/nav-reports.svg';
import Knowledge from 'src/accets/icons/nav-knowledge.svg';
import Settings from 'src/accets/icons/nav-settings.svg';
import { PositiveBorderGrade } from 'src/modules/accountContainer/components/grades/positive/positiveBorderGrade';
import { NegativeBorderGrade } from 'src/modules/accountContainer/components/grades/negative/negativeBorderGrade';
import { MediumBorderGrade } from 'src/modules/accountContainer/components/grades/medium/mediumBorderGrade';
import { PositiveDotGrade } from 'src/modules/accountContainer/components/grades/positive/positiveDotGrade';
import { MediumDotGrade } from 'src/modules/accountContainer/components/grades/medium/mediumDotGrade';
import { NegativeDotGrade } from 'src/modules/accountContainer/components/grades/negative/negativeDotGrade';
import { SelectPerformerItem } from 'src/modules/callsPage/components/select/selectPopup/selectPerformerItem';
import { SelectCallsItem } from 'src/modules/callsPage/components/select/selectPopup/selectCallsItem';
import { SelectTextsItem } from 'src/modules/callsPage/components/select/selectPopup/selectTextItem';

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

export type TnavigationItem = {
    icon: string,
    alt: string,
    title: string,
    url: string,
    isActive: boolean,
}

export const NAVIGATION_DATA: TnavigationItem[] = [
    {
        icon: Results,
        alt: 'results icon',
        title: 'Итоги',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Orders,
        alt: 'orders icon',
        title: 'Заказы',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Mail,
        alt: 'mail icon',
        title: 'Сообщения',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Calls,
        alt: 'calls icon',
        title: 'Звонки',
        url: 'http://localhost:3000/',
        isActive: true,
    },
    {
        icon: Agents,
        alt: 'agents icon',
        title: 'Контрагенты',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Docs,
        alt: 'docs icon',
        title: 'Документы',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Performers,
        alt: 'performers icon',
        title: 'Исполнители',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Reports,
        alt: 'reports icon',
        title: 'Отчеты',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Knowledge,
        alt: 'knowledge icon',
        title: 'База знаний',
        url: 'http://localhost:3000/',
        isActive: false,
    },
    {
        icon: Settings,
        alt: 'settings icon',
        title: 'Настройки',
        url: 'http://localhost:3000/',
        isActive: false,
    },
]

export const CALLS_PERIOD_SELECT_DATA = [
    '3 дня',
    'Неделя',
    'Месяц',
    'Год',
    'Указать даты компонент',
]

export const TYPES_SELECT_DATA = [
    <SelectTextsItem text='Все типы' />,
    <SelectTextsItem text='Входящие' />,
    <SelectTextsItem text='Исходящие' />,
]

export const PERFORMERS_SELECT_DATA = [
    <SelectTextsItem text='Все сотрудники' />,
    <SelectPerformerItem name='Константин К.' img={Performer} />,
    <SelectPerformerItem name='Полина З.' img={Performer} />,
]

export const CALLS_SELECT_DATA = [
    <SelectTextsItem text='Все звонки' />,
    <SelectCallsItem text='Все клиенты' dot={false} />,
    <SelectCallsItem text='Новые клиенты' dot={true} />,
    <SelectCallsItem text='Все исполнители' dot={false} />,
    <SelectCallsItem text='Через приложение' dot={false} />,
    <SelectCallsItem text='Прочие звонки' dot={false} />,
]

export const SOURSES_SELECT_DATA = [
    <SelectTextsItem text='Все источники' />,
]
export const GRADES_SELECT_DATA = [
    <SelectTextsItem text='Все оценки' />,
    <SelectTextsItem text='Распознать' />,
    <SelectTextsItem text='Скрипт не использован' />,
    <NegativeBorderGrade />,
    <MediumBorderGrade />,
    <PositiveBorderGrade />,
    <NegativeDotGrade />,
    <MediumDotGrade />,
    <PositiveDotGrade />,
]

export const ERRORS_SELECT_DATA = [
    <SelectTextsItem text='Все ошибки' />,
    <SelectTextsItem text='Приветствие' />,
    <SelectTextsItem text='Имя' />,
    <SelectTextsItem text='Цена' />,
    <SelectTextsItem text='Скидка' />,
    <SelectTextsItem text='Предзаказ' />,
    <SelectTextsItem text='Благодарность' />,
    <SelectTextsItem text='Стоп слова' />,
]