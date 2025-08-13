import { auth } from "@/auth";
import { redirect } from "next/navigation"; 

export async function AuthorizationCheck() {
      const session = await auth();
      // If the user is not authenticated, redirect them to the login page
      if(!session?.user) {
        redirect("/auth/signin");
      }
}