import style from '../style';
import Buttons from './Buttons';

const CTA = () => (
  <section className={`sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px] 
  ${style.padding} ${style.marginY} ${style.flexCenter}`}
  >
    <div className='flex-1 flex flex-col'>
      <h2 className={style.heading2}>
        Prueba nuestro servicio ahora!
      </h2>
      <p className={`${style.paragraph} text-left max-w-[670px] mt-5`}>
      Para solicitar nuestros servicios, puedes hacerlo fácilmente a 
      través de nuestro cuestionario en línea. Solo debes proporcionar 
      tu información de contacto, incluyendo tu nombre, número de teléfono 
      y dirección, así como el tamaño y peso aproximado del paquete que 
      deseas trasladar. Una vez que hayas completado el formulario, un 
      miembro de nuestro equipo se comunicará contigo para coordinar los 
      detalles de tu envío.
      </p>
    </div>
    <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Buttons />
    </div>
  </section>
)

export default CTA