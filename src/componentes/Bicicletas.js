import React from 'react';

function Bicicletas() {
	return(
		<div className='contenedor_bicicletas'>
			<img 
				className='img_bicicletas'
				src={require('../img/bici_mtb.png')}
				alt='bicicleta'
			/>
		</div>
	)
}

export default Bicicletas;