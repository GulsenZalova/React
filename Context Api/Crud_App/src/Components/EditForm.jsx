
import { useContext, useEffect, useState } from "react"
import {Form,Button} from "react-bootstrap"
import { EmployeeContext } from "../Contexts/EmployeeContext"

const EditForm=({theEmployee})=>{
    const {editEmployees} = useContext(EmployeeContext)
    const employee=theEmployee
    const id=employee.id

   
 
    const [name, setName]=useState(employee.name)
    const [email,setEmail]=useState(employee.email)
    const [address,setAddress]=useState(employee.address)
    const [phone, setPhone]=useState(employee.phone)
    const editedEmployee={id, name, email,address,phone}
    const handleSubmit = (e) => {
        e.preventDefault()
        editEmployees(id,editedEmployee)
    }



    return(
      <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name *"  required  name="name" value={name} onChange={(e)=>setName(e.target.value)} />
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email *" required  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="Address *" rows={3}  name="addrees" value={address} onChange={(e)=>setAddress(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone *"  name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
       </Form.Group>
       <Button variant="success" type="submit" block  > EditEmployee</Button>
      </Form>
    )
}

export default EditForm