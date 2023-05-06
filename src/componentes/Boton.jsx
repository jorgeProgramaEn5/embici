import '../estilos/Boton.css';

const Boton = ({ text, esBotonClick })=>{

  // const [contador, setContador] = useState(0);

  // const pulseClick =()=>{
  //   setContador(contador + 1);
  //   // props.onContadorCambiado(contador + 1);
  // }

  return(
    <div>
      <button 
        className={ esBotonClick ? 'boton btn-click' : 'boton btn-reiniciar' }
      >
      {text}
      </button >
    </div>
  )
}

export default Boton;