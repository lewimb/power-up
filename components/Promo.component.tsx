import Button from './shared/Button.component';
export default function Promo() {
  return (
    <div className='font-xl border-b-3 absolute top-0 w-full rounded-b-3xl border-white bg-black px-5 py-5 text-2xl shadow-lg'>
      <div className='mx-auto flex max-w-7xl justify-evenly'>
        <div className=''>
          <h1 className='text-red-600'>PROMO</h1>
          <h1 className='text-white'>THIS WEEK SETUP!!!!!</h1>
        </div>
        <Button className='from bg-orange-600 bg-gradient-to-r to-yellow-100 text-xl font-semibold text-white'>
          SHOP THIS SETUP
        </Button>
      </div>
    </div>
  );
}
