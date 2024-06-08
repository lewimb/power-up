import type { UserInput } from '../types/auth.type';

const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export function validateInput(input: UserInput, isLogin = true): void {
  if (!email_regex.test(input.email))
    throw new Error('Email/Password is not valid');

  if (!input.password) throw new Error('Email/Password is not valid');

  if (!isLogin && !input.name) throw new Error('Name is required');
}
