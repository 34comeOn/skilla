import { Player } from '../audioPlayer';
import { useHover } from 'src/myHooks/useHover';
import { DetectBorderGrade } from 'src/modules/accountContainer/components/grades/detect/detectBorderGrade';
import variables from 'src/sass/variables.module.scss';
import TypeBlue from 'src/accets/icons/type-blue.svg';
import Web from 'src/accets/icons/web.svg';
import Performer from 'src/accets/pic/performer.png';
import './style.scss';
import { TableCheckbox } from './tableCheckbox';

export const CallsTableItem = ({setHoverHandler, unHoverHandler}: {setHoverHandler: ()=> void,unHoverHandler:()=> void }) => {
    const {ishovered, onMouseEnter, onMouseLeave} = useHover();

    return(
        <li 
            onMouseEnter={()=> {setHoverHandler();onMouseEnter();}}  
            onMouseLeave={()=> {unHoverHandler();onMouseLeave();}}  
            style={{
                backgroundColor: `${ishovered? variables.colorBackgroundActiveNav : variables.colorBackgroundWhite}`,
                userSelect: 'none'
            }} 
            className='table-item__container'>
            <TableCheckbox ishovered={ishovered} />
            <div className='table-item__type'>
                <img src={TypeBlue} alt="type" width={13} height={13} />
            </div>
            <span className='table-item__time'>19:00</span>
            <div className='table-item__performer'>
                <img className='table-item__pic' src={Performer} alt="performer" width={32} height={32} />
            </div>
            <div className='table-item__web'>
                <img src={Web} alt="web" width={17} height={17} />
            </div>
            <div className='table-item__call'>
                <span>Константиний Константинопольский</span>
                <span className='table-item__call-secondary'>ООО "Фестивальный эффект"</span>
            </div>
            <p className='table-item__sourse'>
                Google
            </p>
            <div className='table-item__grade'>
                <DetectBorderGrade />
            </div>
            <div className='table-item__duration'>
                {!ishovered && <span>12:33</span>}
                {ishovered && <Player/>}
            </div>
        </li>
    )
}
