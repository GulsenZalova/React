import { EmployeeContext } from "../Contexts/EmployeeContext"
import { useContext } from "react"
import { Button } from "react-bootstrap"

const Employee = ({employees})=>{
   const {deleteEmployees}=useContext(EmployeeContext)
    return(
        <>
        {
            employees.map((employee)=>(
            <tr key={employee.id}>
			<td>{employee.name}</td>
			<td>{employee.email}</td>
			<td>{employee.address}</td>
			<td>{employee.phone}</td>
			<td>
				<Button  className="btn btn-warning"  data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
				<Button className="btn btn-danger" onClick={()=>deleteEmployees(employee.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
			</td>
		</tr>
        ))
        
        }
        </>
    )
}

export default Employee