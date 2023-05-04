import React from 'react';
import '../css/Bicicletas.css';


function Bicicletas() {
	return(
		<div className='contenedor_bicicletas'>
			<img 
				className='img_bicicletas'
				src={require('../img/bici_mtb.png')}
				alt='bicicleta'
			/>
			<div className='text_bicicletas'>
				<h2>Mountabike</h2>
				<h3>Fabricante Gost, Color Amarillo, Talla 56 </h3>
				<p>No es necesario descargar un nuevo navegador web.
					Microsoft recomienda usar Microsoft Edge para disfrutar 
					de una experiencia web rápida, segura y moderna que puede 
					ayudarle a ahorrar tiempo y dinero.</p>
			</div>
		</div>
	)
}

export default Bicicletas;