'use client';

import { ChangeEvent, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

import Button from '../shared/Button.component';

import { login, register } from '@/lib/actions/auth.action';
import type { UserInput } from '@/lib/types/auth.type';

type AuthFormProps = {
  isLogin: boolean;
};

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [input, setInput] = useState<UserInput>({
    email: '',
    password: '',
  });

  const router = useRouter();

  const tabDescription = isLogin
    ? 'Login into your account'
    : 'Make an account';

  function handleTabChange(tab: number) {
    router.push(`/auth?tab=${tab}`);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (isLogin) {
        await login(input);
      } else {
        await register(input);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  }

  return (
    <div className='mx-auto my-5 max-w-2xl rounded-3xl border-2 border-white px-5 py-10'>
      <div role='tablist' className='tabs tabs-bordered'>
        <button
          onClick={() => handleTabChange(0)}
          className={`tab${isLogin ? '' : ' ' + 'tab-active' + ' ' + 'text-white'}`}
        >
          Register
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={`tab${isLogin ? ' ' + 'tab-active' + ' ' + 'text-white' : ''}`}
        >
          Login
        </button>
      </div>
      <div className='flex flex-col items-center py-5'>
        <p className='text-center text-lg font-semibold text-white'>
          {tabDescription}
        </p>
        <form
          onSubmit={handleFormSubmit}
          className='flex w-1/2 flex-col gap-8 py-5'
        >
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='rounded-3xl p-2 text-sm'
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='rounded-3xl p-2 text-sm'
            onChange={handleChange}
          />
          {!isLogin && (
            <input
              type='text'
              name='name'
              placeholder='Fullname'
              className='rounded-3xl p-2 text-sm'
              onChange={handleChange}
            />
          )}
          <Button className='text-white'>
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </form>
        <p className='text-center text-gray-600'>Atau daftar dengan</p>
        <button
          type='button'
          onClick={() => signIn('google')}
          className='flex w-1/2 justify-center gap-3 rounded-3xl bg-white py-1 font-semibold text-black'
        >
          <Image alt='' src={'/SVG/Google.svg'} width={25} height={25} />
          Google
        </button>
      </div>
    </div>
  );
}
