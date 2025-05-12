import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import { getUserCollection } from "@/lib/database/db_collections";

// Extend the User type to include the 'role' and 'photoUrl' properties
declare module "next-auth" {
  interface User {
    id: string;
    role?: string;
    photoUrl?: string | null;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
      photoUrl?: string | null;
    };
  }
}

// Extend the JWT type to include custom fields like 'role', 'id', and 'photoUrl'
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    photoUrl?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  // ✅ 1. Authentication Providers
  providers: [
    // 🔐 Credentials Provider (Email/Password)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const usersCollection = await getUserCollection();

        // ✋ Validate presence of email and password
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // 🔍 Check if user exists
        const existingUser = await usersCollection.findOne({ email: credentials.email });
        if (!existingUser) {
          throw new Error("User not found");
        }

        // 🔑 Compare hashed password
        const isValid = await bcrypt.compare(credentials.password, existingUser.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // ✅ Return user object for session
        return {
          id: existingUser._id.toString(),
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role || "user",  // Default role if not provided
          photoUrl: existingUser.photoUrl || null  // Default photoUrl if not available
        };
      }
    }),

    // 🟢 Google OAuth Provider (optional)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],

  // ✅ 2. Session Configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  // ✅ 3. JWT Callback — stores custom user info in token
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.photoUrl = user.photoUrl;
      }
      return token;
    },

    // ✅ 4. Session Callback — makes token values available in `session.user`
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;  // Explicitly cast to string
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.photoUrl = token.photoUrl ?? null;  // Handle fallback for null
      }
      return session;
    }
  },

  // ✅ 5. Custom Pages (login, error)
  pages: {
    signIn: "/login",   // custom login page
    error: "/login"     // redirect to login on auth error
  },

  // ✅ 6. Secret for signing JWT tokens
  secret: process.env.NEXT_AUTH_SECRET
};
export default authOptions;