// types/next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
import { User } from "./../features/user/type"

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: User
  }


}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: User;
  }
}
