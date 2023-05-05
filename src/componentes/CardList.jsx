import React from 'react';
import Bicicletas from './Bicicletas'

function CardList() {
	return (
		<div>
			<Bicicletas 
				img="bici_mtb"
				tipo="Mountabike"
				fabricante="Gost"
				color="Amarillo"
				talla="56"
				descripcion="Una bicicleta MTB es una bicicleta todo terreno 
				diseñada para enfrentar terrenos difíciles y variados, 
				como montañas, senderos y terrenos rocosos. MTB significa 
				Mountain Bike en inglés. Estas bicicletas tienen características 
				especiales que les permiten manejar mejor terrenos irregulares y 
				montañosos. "
			/>

			<Bicicletas 
				img="bici_ruta"
				tipo="Ruta"
				fabricante="Canyon"
				color="Negra"
				talla="57"
				descripcion="Una bicicleta de ruta, también conocida como bicicleta de carretera, 
				es un tipo de bicicleta diseñada para ser utilizada en carreteras pavimentadas y 
				superficies de asfalto. Estas bicicletas son ideales para viajes largos y rápidos, 
				y son populares entre los ciclistas que participan en carreras de ruta y triatlones."
			/>

			<Bicicletas 
				img="bici_paseo"
				tipo="Paseo"
				fabricante="Orvea"
				color="Negra"
				talla="58"
				descripcion="Una bicicleta de paseo es un tipo de bicicleta diseñada para ser 
				utilizada en paseos y recorridos relajados y cómodos en la ciudad o en terrenos 
				planos y suaves. Estas bicicletas son ideales para desplazamientos urbanos, 
				turismo y ejercicio recreativo."
			/>

			<Bicicletas 
				img="bici_plegable"
				tipo="Plegable"
				fabricante="Brompton"
				color="Blanca"
				talla="54"
				descripcion="Una bicicleta plegable es un tipo de bicicleta diseñada para ser 
				fácilmente plegada y almacenada en espacios pequeños, como apartamentos, 
				oficinas o en transporte público. Son especialmente populares en áreas urbanas 
				donde el espacio de almacenamiento es limitado."
			/>
		</div>
	)
}

export default CardList;