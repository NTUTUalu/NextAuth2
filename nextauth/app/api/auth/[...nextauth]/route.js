import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            //  this can be filled to state that the passsword is a string or name is a string but since we areusing a custom login we wont

            async authorize(credentials) {
                const user = {id: "1"};
                return user;
            }
        })

    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}