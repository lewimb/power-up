import { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
    }),
  ],
  callbacks: {
    signIn: async (params) => {
      console.log(params);
      return true;
    },
  },
  secret: process.env.SECRET,
};

export default authOptions;
