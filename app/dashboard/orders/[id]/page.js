  "use client"
import { db } from "@/config/firebase.config";
import { TimeStampToDate } from "@/utils/timestamp-date";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
  
export default function Orders ({params}) {
  const {id} = useParams();
  const router = useRouter();
  const [order,setOrder] = useState(null)

     // fetch order from database
      useEffect(()=>{
        const fetchOrder = async () => {
          const orderRef =doc(db, "orders", id);
          const snapShot  = await getDoc(orderRef);

          if(!snapShot.exists()) {
            router.push("/dashboard/add-order");
            return;
          }
           setOrder({
            id,
            ...snapShot.data(),
           });
        };
        fetchOrder();
      },[id,router]);   
      //Handle delete
      const handleDelete = async ()=>{
        const confirmDelete = window.confirm("Are you sure, you want to delete this order?");
         if (!confirmDelete) return;
         
         try {
              await deleteDoc(doc(db, "orders", id));
             alert("Order deleted successfully");
             router.push("/dashboard/orders");

         } catch(error) {
          console.error("Error deleting order:", error);
          alert("Failed to delete order")
         }
      }
    return (
        <main className="min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col justify-center items-center px-16">
               <Image
               width={200}
               height={200}
               alt="image"
               src="/chips.jpg"
               className="rounded-lg w-[700px] h-[200px]"/>
            <div className="">
               <p className="text-2xl font-semibold text-gray-800">{order?.customername} </p>
               <p className="font-bold text-sm text-gray-700">{order?.order} </p>
               <p className="text-sm text-gray-500">{order?.amount} </p>
               <p>{TimeStampToDate(order?.timecreated)}</p>
               <p className="text-sm text-gray-900 font-semibold"> {order?.notes} </p>
            </div>
         </div>
            <div
            onClick={handleDelete}
            className=" w-[50px] h-[50px] bg-white rounded-full shadow flex justify-center items-center absolute top-15 right-10">
             <MdDelete className="text-blue-500 text-3xl"/>
            </div> 

        </main>
    )
}