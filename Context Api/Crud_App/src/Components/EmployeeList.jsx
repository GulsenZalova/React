import { useContext } from "react"
import Employee from "./Employee"
import {EmployeeContext} from "../Contexts/EmployeeContext"
import { Modal,Button,Alert} from "react-bootstrap"
import AddForm from "./AddForm"
import { useState } from "react"
import { useEffect } from "react"
import Pagination from "./Pagination"

const EmployeeList = () =>{
 const {sortedEmployees}=useContext(EmployeeContext)
 const [show,setShow]=useState(false)
 const handleShow=()=>setShow(true)
 const handleClose=()=>setShow(false)

 const [currentpage,setCurrentPage]=useState(1)
 const [employeesPerPage]=useState(2)

 const[showAlert, setshowAlert]=useState(false)
 const handleShowAlert=()=>{
    setshowAlert(true)
    setTimeout(()=>{
        setshowAlert(false)
    },2000)
 }

 useEffect(()=>{
    handleClose()
    return handleShowAlert()
 },[sortedEmployees])


 const indexOfLastEmployee=currentpage * employeesPerPage
 const indexOfFirstEmployee=indexOfLastEmployee-employeesPerPage
 const currentEmployees=sortedEmployees.slice(indexOfFirstEmployee,indexOfLastEmployee)
 const totalPageNum=Math.ceil(sortedEmployees.length/employeesPerPage)
    return(
    <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
                </div>
            </div>
        </div>

        <Alert variant="success" show={showAlert}>
            EmployeeList successfully uptaded.
        </Alert>
        <table className="table table-striped table-hover">
           <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
           </thead>
           <tbody>
                {
                    currentEmployees.map(employee=>


                        <tr key={employee.id}>
                            <Employee employee={employee}/>
                        </tr>
                    )
                }
           </tbody>
        </table>    
        <Pagination pages={totalPageNum} setCurrentPage={setCurrentPage}/>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title>
                    Add new Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
            </Modal.Footer>
        </Modal>
  </>
    )
}

export default EmployeeList