import { AuthUser, LoginResponse } from "@/lib/features/user/type";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<AuthUser | null> {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const result: LoginResponse = await res.json();

                const user = result?.user;
                const token = result?.access_token;

                if (res.ok && token && user?.userId) {
                    return {
                        id: user.userId,
                        accessToken: token, // ✅ fix: renamed from access_token to accessToken
                        ...user,
                    };
                }

                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt", // ✅ uses JWT instead of database session
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
