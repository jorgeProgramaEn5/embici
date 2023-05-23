import style, { layout } from '../style';
import { apple, bill, google, } from '../assets';


const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
      
      <div className='absolute z-[3] -left-1/2 
      top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 
      bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>
        Paga de manera <br className='sm:block hidden' />
        facil y segura
      </h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
      "En nuestro compromiso por ofrecerte el mejor servicio posible, 
      hemos implementado una forma de pago digital que garantiza seguridad 
      y eficiencia en cada transacción. Utilizamos las plataformas de pago 
      Transfermovil, Enzona y CubaPay. Te brindamos una experiencia de pago 
      fácil y segura, olvídate de preocuparte por el manejo de efectivo.
      ¡Confía en nosotros para una mensajería moderna y segura!"
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img 
          src={apple} 
          alt="apple_store" 
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img 
          src={google} 
          alt="google_play" 
          className='w-[128px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </div>
  </section>
)

export default Billing