import BalanceButton from 'src/accets/icons/balance-button.svg';
import './style.scss';

export const WalletBalance = () => {
    const CURRENT_BALANCE = 272
    return(
        <div className='balance_box'>
            <span className="balance_title">Баланс:</span>
            <span className="balance_amount">{CURRENT_BALANCE}</span>
            <button className="balance_button">
                <img className="balance_icon" src={BalanceButton} alt="add balance" width="24px" height="24px" />
            </button>
        </div>
    )
}