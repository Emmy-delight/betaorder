 "use client"
import Link from "next/link";
import { useState } from "react";
import { LiaGripLinesSolid } from "react-icons/lia";

export default function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }
    return (
        <main className="bg-white shadow shadow-gray-300 w-full">
            <div className="flex justify-between h-[50px] pt-3 px-5">
                <p className="text-blue-500 font-bold text-2xl">BetaOrder</p>
                <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                    <li><Link href="/dashboard/add-order">Add-order</Link></li>
                    <li><Link href="/dashboard/orders">Orders</Link></li>
                    <li><Link href="/dashboard/profile">Profile</Link></li>
                </ul>
                <Link href="/auth/signin"><p className="hidden md:block h-[30px] w-[80px] bg-blue-400 text-white text-center rounded-lg ">SignUp</p>
                </Link>
                 <div className="block py-2 md:hidden">
                    <LiaGripLinesSolid className="text-2xl text-blue-500"
                    onClick={toggleMenu} />
                 </div>
            </div>
            {menuOpen && (
            <div className="px-5 pb-1 md:hidden">
                <ul>
                    <li><Link href="/dashboard/add-order">Add-order</Link></li>
                    <li><Link href="/dashboard/orders">Order-list</Link></li>
                    <li><Link href="/dashboard/profile">Profile</Link></li>
                </ul>
                <Link href="/auth/signin"><p className="h-[30px] w-[80px] bg-blue-400 text-white text-center rounded-lg md:hidden ">SignUp</p>
                </Link> 
            </div>
            )}
        </main>
    )
}