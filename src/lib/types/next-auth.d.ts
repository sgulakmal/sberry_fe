// types/next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
import { AuthUser } from "./../features/user/type"

declare module "next-auth" {
  interface Session {
    user: AuthUser
  }


}

declare module "next-auth/jwt" {
  interface JWT {
    user?: AuthUser;
  }
}
