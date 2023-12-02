import SkillaLogo from '../../../../accets/icons/skilla_logo.svg';
import './style.scss';

export const Logo = () => {
    return(
        <div >
            <img src={SkillaLogo} alt="skilla logo" className='menu__logo' />
        </div>
    )
}