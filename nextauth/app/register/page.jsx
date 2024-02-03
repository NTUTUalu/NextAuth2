import RegisterForm from "../components/registerForm"
import Link from "next/link"
import {authOptions} from "../api/auth/[...nextauth]/route"

//so no we want that when we are logged in, we should not access pages like the home login or register page OR type the url and then we access different pages, we want a more closed flow
import {getServerSession} from "next-auth";
import {redirect } from"next/navigation";

export default async function Register() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/Dashboard");
    return (<RegisterForm/>);
}