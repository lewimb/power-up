import Link from 'next/link';
export default function topNav() {
  return (
    <div className='bg-gradient-to-r from-red-800 via-orange-500 to-orange-300 px-5'>
      <nav className='mx-auto flex max-w-7xl justify-between py-1.5 text-xs text-white'>
        <Link href={'/about-us'} className='hover:font-medium'>
          About Us
        </Link>
        <h4 className=' '>
          Visit out show room in 1234 Street Address city Address.1234 Contact
          Us
        </h4>

        <h4 className=''>Contact Us : xxxx-xxxx-1234</h4>
      </nav>
    </div>
  );
}
