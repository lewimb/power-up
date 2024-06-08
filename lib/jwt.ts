import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function generateToken(name: string, email: string) {
  return sign({ name, email }, JWT_SECRET);
}

export function verifyToken(token: string) {
  return verify(token, JWT_SECRET);
}
