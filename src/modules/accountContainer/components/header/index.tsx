import { StockSelect } from '../../../callsPage/components/select/stockSelect';
import { CurrentDate } from '../currentDate';
import { MediumBorderGrade } from '../grades/medium/mediumBorderGrade';
import { MediumDotGrade } from '../grades/medium/mediumDotGrade';
import { NegativeBorderGrade } from '../grades/negative/negativeBorderGrade';
import { NegativeDotGrade } from '../grades/negative/negativeDotGrade';
import { PositiveBorderGrade } from '../grades/positive/positiveBorderGrade';
import { PositiveDotGrade } from '../grades/positive/positiveDotGrade';
import { Search } from '../search';
import { Statistics } from '../statistics';
import './style.scss';

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

export const Header = () => {
    return(
        <div className='header__container'>
            <CurrentDate />
            <Statistics />
            <Search />
            <StockSelect data={selectDataNodes} />
            <div >Account select</div>
        </div>
    )
}