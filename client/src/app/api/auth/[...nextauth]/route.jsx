import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email", placeholder: "example@example.com"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials, req) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        }),
                        headers: {"Content-Type": "application/json"},
                    }
                );
                const user = await res.json();
                
                if (user.error === "usuario no existe") {
                    throw new Error("usuario no existe")
                } else if (user.error === "contraseña es incorrecta") {
                    throw new Error("contraseña es incorrecta")
                } else if (user.error) {
                    throw user;
                }
                return user;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user}) {
            return { ...token, ...user };
        },
        async session({session, token}) {
            session.user = token;
            return session;
        }
    },
    session: {
        strategy: "jwt",
        // 4 hours
        maxAge: 4 * 60 * 60
    },
    pages: {
        signIn: "/login",
    }
})

export { handler as GET, handler as POST };

