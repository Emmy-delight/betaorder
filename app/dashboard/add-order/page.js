import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorizaton-check"
import AddOrder from "./add-order"

export default async function Page () {
    const session = await auth();
    return (
         <>
         <AuthorizationCheck/>
         <AddOrder userId={session?.user?.id}/>
         </>
    )
}