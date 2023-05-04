import './Card.css';

const Card = ({tipo,img,descripcion})=>{
    return (
        <div className='divCard'>
            <div className='divImg'>
                <img 
                    src={img}
                    width="300" 
                    alt='bicicleta mtb'>
                </img>
            </div>
            <div className='divText'>
                <h3>Bicicletas {tipo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Card;