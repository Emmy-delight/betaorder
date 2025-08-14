import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorizaton-check"
import Orders from "./orders"

export default async function Page () {
    const session = await auth();
    return (
        <>
        <AuthorizationCheck/>
        <Orders userId={session?.user?.id}/>
        </>
    )
}