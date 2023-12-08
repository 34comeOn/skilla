import { WalletBalance } from "./walletBalance";
import './style.scss';
import { DateSelect } from "../select/selectHeader/dateSelect";

export const MainAdjustments = () => {
    return(
        <div className="main-adjustments_box">
            <WalletBalance />
            <DateSelect />
        </div>
    )
}