import { signIn } from "@/auth";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function SignIn () {
    return (
        <main className="min-h-screen flex justify-center  bg-gray-50 py-8 px-2">
          <article>
             <div className="w-full md:w-[30em] rounded-md bg-white p-4 ">
                <h1 className="text-2xl mb-2">Sign into BetaOrder</h1>
                <p>Sign in Using...</p>
              <form 
               action={async()=>{
                       "use server"
                   await signIn("google")
               }}
              className="mb-2">
                <button className="w-full h-[3.2em] bg-black border-b-2 border-blue-500 rounded-md flex justify-center items-center gap-2 ">
                 <FaGoogle className="text-3xl text-white" /> 
                 <span className="text-white text-lg">Google Account</span>
                </button>
              </form>
              <p className="text-gray-600 text-xs">By clicking on the signin button, you confirm that you have agreed with our {""}
                <Link href="#" className="text-gray-800 underline">Terms of use</Link>{""} and {""}
                <Link href="#" className="text-gray-800 underline">privacy policy</Link>
              </p>
             </div>
          </article>
        </main>
    )
}