import Promo from './Promo.component';
import Image from 'next/image';
export default function Modal() {
  return (
    <div className='relative'>
      <Promo />
      <div>
        <Image
          src={'/image/PromoPic.webp'}
          height={1000}
          width={1920}
          alt=''
          className='h-[48rem] object-cover object-bottom'
        ></Image>
      </div>
    </div>
  );
}
