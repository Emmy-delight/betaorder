   "use client"
import { db } from "@/config/firebase.config";
import { TimeStampToDate } from "@/utils/timestamp-date";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Orders () {
    const [orders,setOrders] = React.useState([]);
    const {data : session} = useSession();

    React.useEffect(()=>{
        const fetchOrders = async() =>{
              try {
                const q = query(collection(db, "orders"));
                const onSnap = await getDocs(q,
                    where("user","===", session?.user?.id),
                    orderBy("timecreated","desc")
                 )
                 // send the fetched data into array
                 const compileOrders = [];
                 onSnap.docs.forEach(doc =>{
                    compileOrders.push({
                        id: doc.id,
                        data: doc.data(),
                    })
                 } )
                  setOrders(compileOrders);
                  console.log(compileOrders)
              } catch(error) {
                console.error("An error occured while fetching orders:",error)
              } 
        }
        if (session) {
            fetchOrders();
        };
    },[session])
    return (
           <main className="min-h-dvh p-4 bg-gray-50">
            <h1 className="text-center font-bold text-blue-400 text-4xl">My Orders</h1>
            <p className="text-center text-gray-500 text-sm mb-6 ">Collections of All Orders Placed </p>
             <div className="grid grid-cols-1 md:grids-col-2 lg:grid-cols-4 lg:gap-12 px-8">
              {orders.map(orders => <Link href={`/dashboard/orders/${orders.id}`} key={orders.id}>
               <div className="w-[300px] h-[480px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow  ">
                  <Image
                  src="/chips.jpg"
                  alt="chips"
                  width={300}
                  height={300}
                  className="rounded-t-xl"
                  />  
                  <div className="p-3">
                      <span className="block font-semi-bold text-gray-800">{orders.data.customername} </span>
                      <span className="block font-bold text-gray-800">{orders.data.order} </span>
                      <span className="block font-semi-bold text-gray-800">₦{orders.data.amount} </span>
                      <span className="block text-sm text-gray-500"> {TimeStampToDate(orders.data.timecreated)} </span>
                      <span className="block text-sm font-semi-bold text-gray-900">{orders.data.notes} </span>
                  </div>
                </div>
                </Link>
                )}
             </div>
           </main>   
    )
}