import variables from '../sass/variables.module.scss';

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