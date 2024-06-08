'use server';
import type { UserInput } from '../types/auth.type';
import { validateInput } from '../validations/input';

export async function login(input: Omit<UserInput, 'name'>) {
  validateInput(input);
  console.log(input, 'login');
}

export async function register(input: UserInput) {
  validateInput(input, false);
  console.log(input, 'register');
}
