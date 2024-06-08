import Image from 'next/image';

export default function Carousel() {
  const images = ['Room1.webp', 'room2.webp', 'Room4.webp'];

  const lastIndex = images.length - 1;
  return (
    <div className='carousel flex bg-black shadow-2xl'>
      {images.map((image, i) => {
        const id = `carousel-item-${i}`;
        const prev = `#carousel-item-${i === 0 ? lastIndex : i - 1}`;
        const next = `#carousel-item-${i === lastIndex ? 0 : i + 1}`;

        return (
          <div id={id} className='carousel-item relative w-full' key={id}>
            <Image
              width={1000}
              height={1000}
              src={`/image/${image}`}
              alt={id}
              className='h-80 w-full object-cover md:h-96'
            />
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-5 text-lg text-white'>
              <a href={prev} className='btn btn-circle'>
                ❮
              </a>
              <a href={next} className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
        );
      })}
      <div className=''></div>
    </div>
  );
}
