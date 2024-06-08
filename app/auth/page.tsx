import AuthForm from '@/components/auth/Form';
import Image from 'next/image';
export default function AuthPage({ searchParams }: AuthPageProps) {
  const isLogin = searchParams.tab === '1';

  return (
    <div className='h-screen bg-zinc-900 px-5 py-10'>
      <div className='flex justify-center gap-8'>
        <Image
          src='/SVG/PowerUP-Logo.svg'
          alt=''
          width={75}
          height={75}
          className=''
        />
        <div className='py-5 text-3xl font-semibold text-white'>POWER-UP</div>
      </div>
      <AuthForm isLogin={isLogin} />
    </div>
  );
}

type AuthPageSearchParams = {
  tab: '0' | '1';
};

type AuthPageProps = {
  searchParams: AuthPageSearchParams;
};
