   "use client"
import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    customername: yup.string().required("Customer Name is required").min(5),
    order: yup.string().required("Order is required").min(5),
    amount: yup.number().required("Order must exceed 1000").min(1000),
    notes:  yup.string().required().min(10),
})

export default function AddOrder () {
    const {handleSubmit,handleChange, values,touched,errors} = useFormik({
        initialValues: {
            customername: "",
            order: "",
            amount: "",
            notes: ""
        },
        onSubmit: () => {
            alert("form submitted")
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
                       <Button type="submit" variant="contained" className="rounded">Place Order</Button>
                    </form>
                </CardContent>

             </Card>
         </main>    
    )
}