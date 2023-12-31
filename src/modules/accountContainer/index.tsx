import { CallsPage } from '../callsPage';
import { Header } from './components/header';
import './style.scss';

export const AccountContainer = () => {
    return(
        <div className='account__container'>
            <Header />
            <CallsPage />
        </div>
    )
}