import '../estilos/Boton.css';

const Boton = (props)=>{

  // const [contador, setContador] = useState(0);

  // const pulseClick =()=>{
  //   setContador(contador + 1);
  //   // props.onContadorCambiado(contador + 1);
  // }

  return(
    <div>
      <div className='boton' >{props.text}</div>
    </div>
  )
}

export default Boton;