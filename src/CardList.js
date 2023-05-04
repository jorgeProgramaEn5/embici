import './CardList.css';
import Card from './Card.js';
import {ciclas} from './base_datos.js';



const CardList = ()=>{
    return (
        <div className='divContainer'>
            {
                ciclas.map((bicicleta, i)=>{
                    return (
                        <Card 
                            id={ciclas[i].id} 
                            tipo={ciclas[i].tipo} 
                            img={ciclas[i].img} 
                            descripcion={ciclas[i].descripcion}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;