import '../estilos/Boton.css';

const Boton = (props)=>{
  return(
    <div>
      <div className='boton'>{props.text}</div>
    </div>
  )
}

export default Boton;