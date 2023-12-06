import { Logo } from './components/logo';
import { MenuButton } from './components/menuButton';
import { Navigation } from './navigation';
import AddOrder from 'src/accets/icons/add-order.svg';
import Pay from 'src/accets/icons/pay.svg';
import './style.scss';

export const MainMenu = () => {
    return(
        <div className='menu__container'>
            <Logo />
            <Navigation />
            <MenuButton title='Добавить заказ' alt='add order' icon={AddOrder} buttonPadding='34px'/>
            <MenuButton title='Оплата' alt='pay' icon={Pay} buttonPadding='30px'/>
        </div>
    )
}