import {connectMongoDB} from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            //  this can be filled to state that the passsword is a string or name is a string but since we areusing a custom login we wont

            async authorize(credentials) {
                const {email,password} = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    if(!user) {
                        return null
                    }
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if(!passwordsMatch) {
                        return null;
                    }
                    //if the passwords match that in the database then we want to return user
                    return user;
                }catch (error) {

                }
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