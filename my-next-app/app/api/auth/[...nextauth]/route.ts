import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isValid = await compare(password, user.password);
        if (!isValid) {
          throw new Error("Invalid email or password");
        }

        return { id: user.id.toString(), email: user.email };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const signedToken = jwt.sign(
          { sub: user.id, email: user.email },
          process.env.NEXTAUTH_SECRET!,
          { expiresIn: "7d" }
        );
        token.accessToken = signedToken;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
      }
      (session as any).accessToken = token.accessToken;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return "/dashboard";
    },
  },

  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
