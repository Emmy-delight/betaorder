   "use client"
import { db } from "@/config/firebase.config";
import { Button, Card, CardContent, CardHeader, CircularProgress, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    customername: yup.string().required("Customer Name is required").min(5),
    order: yup.string().required("Order is required").min(5),
    amount: yup.number().required("Order must exceed 1000").min(1000),
    notes:  yup.string().required().min(10),
})
export default function AddOrder ({userId}) {
    const [opProgess,setOpProgess] = useState(false)
     const {data: session} = useSession();
     
    const {handleSubmit,handleChange, values,touched,errors} = useFormik({
        initialValues: {
            customername: "",
            order: "",
            amount: "",
            notes: ""
        },
        onSubmit: async () => {
            await addDoc(collection(db,"orders"),{
                user: session?.user?.id,
                customername: values.customername,
                order: values.order,
                amount: values.amount,
                notes: values.notes,
                timecreated: new Date().getTime(),
            }).then(()=>{
                setOpProgess(false)
                alert("You just made an Order")
            })
            .catch(e =>{
                setOpProgess(false)
                console.error(e)
                alert("Your order was not sucessful")
            })
        },
        validationSchema:schema
    })
    return (
        <main className="min-h-screen">
          <Card sx={{maxWidth: 500, margin:"auto", mt:5, p:2 }}>
                <CardHeader title="Add Your Order"/>
                <CardContent>
                    <form onSubmit={handleSubmit}
                    className="flex flex-col gap-4">
                       <div>
                          <TextField 
                          fullWidth
                          type="text"
                          label="Customer's Name"
                          id="customername"
                          placeholder="Enter your Name"
                          value={values.customername}
                          onChange={handleChange}
                          /> 
                          {touched.customername && errors.customername ? <span className="text-xs text-red-500">{errors.customername}</span> : null}
                       </div>
                       <div>
                          <TextField
                          fullWidth
                          type="text"
                          label="My Order"
                          id="order"
                          placeholder="Please Enter Order"
                          value={values.order}
                          onChange={handleChange}
                          />
                          {touched.order && errors.order ? <span className="text-xs text-red-500">{errors.order}</span> : null}
                       </div>
                       <div>
                         <TextField
                         fullWidth
                         type="numbers"
                         label="Amount"
                         id="amount"
                         placeholder="Please Enter Amount"
                         value={values.amount}
                         onChange={handleChange}
                         />
                         {touched.amount && errors.amount ? <span className="text-xs text-red-500">{errors.amount}</span> : null}
                       </div>
                       <div>
                          <TextField
                          fullWidth
                          multiline
                          rows={3}
                          type="text"
                          label="Add Notes"
                          id="notes"
                          placeholder="Add comments/notes"
                          value={values.notes}
                          onChange={handleChange}
                          />
                          {touched.notes && errors.notes ? <span className="text-xs text-red-500">{errors.notes}</span> : null}
                       </div>
                       <div className="flex items-center gap-1">
                       <Button type="submit" variant="contained" className="rounded w-full">Place Order</Button>
                       <CircularProgress style={{display:!opProgess ? "none" : "flex" }}/>
                       </div>
                    </form>
                </CardContent>

             </Card>
         </main>    
    )
}