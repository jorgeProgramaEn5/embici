import React from 'react';
import { features } from '../constants';
import style, { layout } from '../style';
import Buttons from './Buttons';

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] 
      ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
    >
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${style.flexCenter}`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-containt'/>
      </div>
      <div className='flex-1 flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
          Contacte con el <br className='sm:block hidden'/> mensajero mas cercano
        </h2>
        <p className={`${style.paragraph} max-w-[570px] mt-5`}>
        "Cuando solicitas nuestro servicio, nos encargamos 
        de encontrar al mensajero perfecto para ti, ¡y al que se 
        encuentre más cercano al punto de recogida! De esta manera 
        ahorras tiempo y dinero. En lugar de preocuparte por 
        buscar un mensajero confiable y económico, déjanos hacer el 
        trabajo por ti. ¡Confía en nosotros para una mensajería 
        eficiente y sin complicaciones!"
        </p>

        <Buttons styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business