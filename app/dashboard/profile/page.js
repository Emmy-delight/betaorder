import { Button } from "@mui/material";
import Image from "next/image";

export default function Profile () {
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-12 lg:py-8 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 p-6">
                <div className="flex justify-center">
                    <Image
                    src="/ashoebi.jpg"
                    width={80}
                    height={80}
                    alt="profile-image"
                    className="w-[80px] h-[80px] rounded-full"/>
                </div>
                <p className="text-center py-3 border-b border-gray-600">UserName</p>
                <p className="text-center py-3 border-b border-gray-600">Email</p>
                <p className="text-center py-3 border-b border-gray-600">User ID</p>
                <form>
                   <Button className="w-full" variant="contained" type="submit">Log Out</Button> 
                </form>
            </div>

        </main>
            
    )
}