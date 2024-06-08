import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

export function hashPassword(password: string): string {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

export function comparePassword(
  password: string,
  hashedPassword: string
): boolean {
  return compareSync(password, hashedPassword);
}
