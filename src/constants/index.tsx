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

export const TOKEN = 'testtoken';

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
    {
        value:'ИП Сидорова Александра Михайловна',
        requestValue: '',
    },
    {
        value:'ООО Грузчиков Сервис Запад',
        requestValue: '',
    },
    {
        value:'ИП Митрофанов М.М.',
        requestValue: '',
    },
    {
        value:'ИП Иванов М.М.',
        requestValue: '',
    },
    {
        value:'Все организации',
        requestValue: '',
    },
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
    {
        value:'3 дня',
        requestValue: '&date_start=2023-12-05&date_end=2023-12-08',
    },
    {
        value:'Неделя',
        requestValue: '&date_start=2023-12-01&date_end=2023-12-08',
    },
    {
        value:'Месяц',
        requestValue: '&date_start=2023-11-08&date_end=2023-12-08',
    },
    {
        value:'Год',
        requestValue: '',
    },
    {
        value:'Указать даты компонент',
        requestValue: '',
    },
]

export const TYPES_SELECT_DATA = [
    {
        value: <SelectTextsItem text='Все типы' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Входящие' />,
        requestValue: '&in_out=1',
    },
    {
        value: <SelectTextsItem text='Исходящие' />,
        requestValue: '&in_out=0',
    },
]

export const PERFORMERS_SELECT_DATA = [
    {
        value: <SelectTextsItem text='Все сотрудники' />,
        requestValue: '',
    },
    {
        value: <SelectPerformerItem name='Константин К.' img={Performer} />,
        requestValue: '',
    },
    {
        value: <SelectPerformerItem name='Полина З.' img={Performer} />,
        requestValue: '',
    },
]

export const CALLS_SELECT_DATA = [
    {
        value: <SelectTextsItem text='Все звонки' />,
        requestValue: '',
    },
    {
        value: <SelectCallsItem text='Все клиенты' dot={false} />,
        requestValue: '',
    },
    {
        value: <SelectCallsItem text='Новые клиенты' dot={true} />,
        requestValue: '',
    },
    {
        value: <SelectCallsItem text='Все исполнители' dot={false} />,
        requestValue: '',
    },
    {
        value: <SelectCallsItem text='Через приложение' dot={false} />,
        requestValue: '',
    },
    {
        value: <SelectCallsItem text='Прочие звонки' dot={false} />,
        requestValue: '',
    },
]

export const SOURSES_SELECT_DATA = [
    {
        value: <SelectTextsItem text='Все источники' />,
        requestValue: '',
    },
]
export const GRADES_SELECT_DATA = [
    {
        value: <SelectTextsItem text='Все оценки' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Распознать' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Скрипт не использован' />,
        requestValue: '',
    },
    {
        value: <NegativeBorderGrade />,
        requestValue: '',
    },
    {
        value: <MediumBorderGrade />,
        requestValue: '',
    },
    {
        value: <PositiveBorderGrade />,
        requestValue: '',
    },
    {
        value: <NegativeDotGrade />,
        requestValue: '',
    },
    {
        value: <MediumDotGrade />,
        requestValue: '',
    },
    {
        value: <PositiveDotGrade />,
        requestValue: '',
    },
]

export const ERRORS_SELECT_DATA = [
    {
        value: <SelectTextsItem text='Все ошибки' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Приветствие' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Имя' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Цена' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Скидка' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Предзаказ' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Благодарность' />,
        requestValue: '',
    },
    {
        value: <SelectTextsItem text='Стоп слова' />,
        requestValue: '',
    },
]
