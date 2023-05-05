import React from 'react';
import '../css/Bicicletas.css';


function Bicicletas(props) {
	return(
		<div className='contenedor_bicicletas'>
			<div className='contenedor_img'>
				<img 
					className='img_bicicletas'
					src={require(`../img/${props.img}.png`)}
					alt='bicicleta'
				/>
			</div>
			<div className='text_bicicletas'>
				<h2>{props.tipo}</h2>
				<h3>Fabricante {props.fabricante}, 
					Color {props.color}, 
					Talla {props.talla}
				</h3>
				<p>{props.descripcion}</p>
			</div>
		</div>
	)
}

export default Bicicletas;