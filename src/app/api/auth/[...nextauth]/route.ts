import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { connectDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/userModel";

async function auth(req: NextRequest, res: any) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },

    providers: [
      CredentialsProvider({
        name: "Credentials",

        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },

        async authorize(
          credentials: Record<string, string> | undefined
        ) {
          await connectDB();

          if (!credentials?.email || !credentials?.password) {
            throw new Error("CredentialsSignin");
          }

          const user = await User.findOne({ email: credentials.email }).select("+password");

          if (!user) {
            throw new Error("CredentialsSignin");
          }

          const isPasswordMatched = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("CredentialsSignin");
          }
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          }
        },
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],

    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) token.user = user;
        return token;
      },
      session: async ({ session, token }) => {
        session.user = token.user as any;
        return session;
      },
    },

    pages: {
      signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,
  });
}

export { auth as GET, auth as POST };
