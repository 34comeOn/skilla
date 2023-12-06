import { Logo } from './components/logo';
import { Navigation } from './navigation';
import './style.scss';

export const MainMenu = () => {
    return(
        <div className='menu__container'>
            <Logo />
            <Navigation />
        </div>
    )
}