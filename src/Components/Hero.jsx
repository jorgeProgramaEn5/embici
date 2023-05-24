import React from 'react';
import styles from '../style';
import { discount, robot_bici, } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`ml-2 ${styles.paragraph}`}>Gastas {' '}
          <span className='text-white'>20%</span> mas si utilizas a nuestros competidores
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-simibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          El futuro de la<br className='sm:block hidden'/>
          <span className='text-gradient'>mensajería</span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>
      <h1 
        className='font-poppins font-semibild ss:text-[68px] text-[52px] 
        text-white ss:leading-[100px] leading-[75px] w-full'
      >
        es en bicicleta.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
      "Nos preocupamos por ofrecer una solución de mensajería 
      que sea eficiente, económica y sostenible. Ofrecemos un servicio 
      que enlaza clientes y mensajeros, para que puedan conectarse 
      fácilmente. Al utilizar nuestra plataforma, ahorras tiempo y 
      dinero. ¡Únete a nosotros para una mensajería más ecológica y eficiente!"
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={ robot_bici } alt="robot" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient  rounded-full'></div>
      <div className='absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
)

export default Hero