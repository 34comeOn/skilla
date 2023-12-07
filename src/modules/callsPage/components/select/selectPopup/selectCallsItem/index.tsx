import './style.scss';

export const SelectCallsItem = ({dot, text}:{dot: boolean, text: string} ) => {
    return(
        <div className='select-calls_box'>
            <span className='select-calls_text' >{text}</span>
            {dot && <div className='select-calls_dot'></div>}
        </div>
    )
}