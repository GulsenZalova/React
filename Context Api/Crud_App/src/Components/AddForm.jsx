import { useState } from "react"
import { useContext } from "react"
import {Form,Button} from "react-bootstrap"
import { EmployeeContext } from "../Contexts/EmployeeContext"

const AddForm=()=>{
    const {addEmployees} = useContext(EmployeeContext)
    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")
    // const [addrees,setAddress]=useState("")
    // const [phone,setPhone]=useState("")

    const [newEmployees,setNewEmployees]=useState({
        name:"",
        email:"",
        addrees:"",
        phone:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault() 
         addEmployees(name,email,addrees,phone)
    }
     const {name,email,addrees,phone}=newEmployees
    const onInputChange=(e)=>{
        setNewEmployees({...newEmployees, [e.target.name]:e.target.value})
    }
    return(
      <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name *"  required value={name} name="name" onChange={(e)=>onInputChange(e)}/>
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email *" required value={email} name="email" onChange={(e)=>onInputChange(e)}/>
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="Address *" rows={3} value={addrees} name="addrees" onChange={(e)=>onInputChange(e)}/>
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone *" value={phone} name="phone" onChange={(e)=>onInputChange(e)}/>
       </Form.Group>
       <Button variant="success" type="submit" block > Add New Employee</Button>
      </Form>
    )
}

export default AddForm