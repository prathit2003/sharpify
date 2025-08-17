import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
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

        // Return username + email + profile picture
        return {
          id: user.id.toString(),
          email: user.email,
          username: user.username,
          ProfilePic: user.ProfilePic ?? null,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const signedToken = jwt.sign(
          {
            sub: user.id,
            email: user.email,
            username: user.username,
            ProfilePic: user.ProfilePic,
          },
          process.env.NEXTAUTH_SECRET!,
          { expiresIn: "7d" }
        );
        token.accessToken = signedToken;
        token.email = user.email;
        token.username = user.username;
        token.ProfilePic = user.ProfilePic;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
        // @ts-ignore
        session.user.username = token.username as string;
        // @ts-ignore
        session.user.ProfilePic = token.ProfilePic as string | null;
      }
      (session as any).accessToken = token.accessToken;
      return session;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },

  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
