import './Card.css';

const Card = ()=>{
    return (
        <div className='divCard'>
            <div className='divImg'>
                <img 
                    src="https://cdn.deporvillage.com/cdn-cgi/image/h=576,w=576,dpr=1,f=auto,q=75,fit=contain,background=white/product/gst-74le1115-c_001.jpg" 
                    width="300" 
                    alt='bicicleta mtb'>
                </img>
            </div>
            <div className='divText'>
                <h3>Bicicletas MTB</h3>
                <p>
                    Las bicicleta MTB (Mountain Bike) es un tipo de bicicleta diseñada para ser utilizada en terrenos irregulares y accidentados, como montañas y 
                    senderos. Las bicicletas MTB suelen tener un cuadro resistente y robusto, ruedas más anchas, suspensiones delanteras y traseras, y neumáticos 
                    con dibujos profundos para proporcionar un mayor agarre en terrenos difíciles.
                </p>
            </div>
        </div>
    )
}

export default Card;