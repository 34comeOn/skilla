import './style.scss';

type TmenuButton = {
    title: string, 
    icon: string, 
    alt: string, 
    buttonPadding: string,
}

export const MenuButton = ({title, icon, alt, buttonPadding}: TmenuButton) => {
    return(
        <div className='menu_button-box'>
            <button className="menu_button" style={{paddingRight: buttonPadding}}>{title}</button>
            <img src={icon} alt={alt} className='menu_button-icon' />
        </div>
    )
}