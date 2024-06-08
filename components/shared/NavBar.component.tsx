import Image from 'next/image';
import TopNav from './TopNav.component';
import SearchBar from './SearchBar.component';
import Button from './Button.component';

import Link from 'next/link';
export default function NavBar() {
  return (
    <header>
      <TopNav />
      <div className='px-5 py-1'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-2'>
          <div className='flex-[2]'>
            <Image
              src='/SVG/PowerUP-Logo.svg'
              alt='Home-Button'
              width={40}
              height={40}
            />
          </div>
          <SearchBar />
          <div className='flex flex-[2] items-center justify-end gap-1 border-black text-xs'>
            <div className='flex gap-1'>
              <Button className='bg-orange-400 text-white'>Register</Button>
              <Button className='border-orange-300'>Login</Button>
            </div>
            <Link href={''} className='shrink-0 border-l-2 border-black pl-1'>
              <Image
                src='/SVG/shopping-cart.svg'
                alt='shopping-cart'
                // className="w-8"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
