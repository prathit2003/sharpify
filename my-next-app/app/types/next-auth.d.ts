import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username?: string;
      ProfilePic?: string | null;
    } & DefaultSession["user"];
    accessToken?: string;
  }

  interface User extends DefaultUser {
    username?: string;
    ProfilePic?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    ProfilePic?: string | null;
    accessToken?: string;
  }
}
