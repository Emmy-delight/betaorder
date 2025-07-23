import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer () {
    const year = new Date().getFullYear()
     return (
          <footer className="bg-black grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-5 lg:gap-0 lg:bg-black ">
               <div>
                 <p className="text-2xl text-blue-500 font-bold">BetaOrder</p>
                 <p className="text-xs text-gray-600"> &copy; {year} Order management System</p>
               </div>
               <div>
                 <p className="text-md text-gray-700">Headqaurters</p>
                 <p className="text-md text-gray-700">Microsoft street, Dallas, Texas</p>
               </div>
                <div>
                    <ul className="flex lg:justify-end items-center gap-8">
                        <li><Link href="#"><FaLinkedin className="text-blue-500 text-2xl" /></Link></li>
                        <li><Link href="#"><FaFacebookF  className="text-blue-500 text-2xl" /></Link></li>
                        <li><Link href="#"><FaInstagram  className="text-blue-500 text-2xl" /></Link></li>
                    </ul>
                    <ul className="flex lg:justify-end items-center gap-4">
                        <li><Link href="#" className="text-sm text-gray-600">Glossary</Link></li> 
                        <li><Link href="#" className="text-sm text-gray-600">FAQ</Link></li> 
                        <li><Link href="#" className="text-sm text-gray-600">Privacy policy</Link></li> 
                    </ul>
                </div>
          </footer>
     )
}