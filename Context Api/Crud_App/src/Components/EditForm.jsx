
import { useContext } from "react"
import {Form,Button} from "react-bootstrap"
import { EmployeeContext } from "../Contexts/EmployeeContext"

const EditForm=()=>{
    const {editEmployees} = useContext(EmployeeContext)
    
    return(
      <Form>
       <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name *"  required  name="name" />
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email *" required  name="email" />
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="Address *" rows={3}  name="addrees" />
       </Form.Group>
       <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone *"  name="phone" />
       </Form.Group>
       <Button variant="success" type="submit" block > EditEmployee</Button>
      </Form>
    )
}

export default EditForm