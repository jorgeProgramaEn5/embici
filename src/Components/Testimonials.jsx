import styles from '../style';
import { feedback } from '../constants';
import Feedbackcard from './Feedbackcard';



const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] -right-[50%] 
      top-0 w-[60%] h-[60%] rounded-full blue__gradient' />
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>
        Que opinan <br className='sm:block hidden'/> 
        acerca de nosotros
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[470px] mt-5`}>
        "Valoramos mucho la opinión de nuestros clientes. Nos mantenemos 
        alerta y siempre atentos a sus comentarios y sugerencias, lo que 
        nos permite mantenernos en constante mejora y evolución.
        No solo nos importa tu satisfacción, sino también tu opinión. 
        Echa un vistazo a algunas de las opiniones de nuestros clientes y 
        descubre por qué somos la mejor opción en mensajería".
        </p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card)=>(
        <Feedbackcard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials