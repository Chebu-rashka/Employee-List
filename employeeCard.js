import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";



export function EmployeeCard({employee, onEmployeeDelete, onEmployeeEdit}){
    return(
        <div className="employee-container">
            <div ><img className="employee-image" src={employee.picture} alt=""/></div>
            
            <div className="info-section">
          <h2>{employee.firstName} {employee.lastName[0]}.</h2>
            <span> {employee.role}</span>
            <span><b>{employee.company}</b> </span>
            <span>  {employee.address1}</span>
            <span>  {employee.address2}</span>
            <span> {employee.city}</span>
            <span>  {employee.state}</span>
            <span>  {employee.zip}</span>
            <span>  {employee.phone}</span>
            </div>
            <div className="bottom-section">
            <button className="emp-button1" onClick={()=>{
             onEmployeeEdit()
            }}><BiEdit/>Edit</button>
            
            <button className="emp-button2" onClick={()=>{
             onEmployeeDelete()
            }}><FaTrashAlt/>Delete</button>
            </div>
            
     
        </div>
    )

}