import { EmployeeContext } from "../Contexts/EmployeeContext"
import { useContext, useState } from "react"
import { Button,Modal} from "react-bootstrap"
import EditForm from "./EditForm"

const Employee = ({employee})=>{
   const {deleteEmployees}=useContext(EmployeeContext)
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(true)
    }
    const handleClose=()=>{
        setShow(false)
    }
    return(
        <>
			<td>{employee.name}</td>
			<td>{employee.email}</td>
			<td>{employee.address}</td>
			<td>{employee.phone}</td>
			<td>
				<Button  className="btn btn-warning" onClick={handleShow} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
				<Button className="btn btn-danger" onClick={()=>deleteEmployees(employee.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
			</td>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title>
                    Add new Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Employee