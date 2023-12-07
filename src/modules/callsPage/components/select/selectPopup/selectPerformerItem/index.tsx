import './style.scss';

export const SelectPerformerItem = ({img, name}:{img: string, name: string} ) => {
    return(
        <div  className='select-performer_box'>
            <img src={img} alt="performer" width={32} height={32} />
            <span className='select-performer_text' >{name}</span>
        </div>
    )
}