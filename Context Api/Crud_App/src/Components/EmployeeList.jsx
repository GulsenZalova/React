import { useContext } from "react"
import Employee from "./Employee"
import {EmployeeContext} from "../Contexts/EmployeeContext"

const EmployeeList = () =>{
 const {employees}=useContext(EmployeeContext)

    return(
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
                <Employee employees={employees}/>
           </tbody>
        </table>    
  
    )
}

export default EmployeeList