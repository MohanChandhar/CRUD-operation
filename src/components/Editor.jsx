import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import axios from 'axios'
import { Link } from "react-router-dom"
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
  let [name, setname]=useState("")
  let [salary,setsalary]=useState("")
  let [company,setcompany]=useState("")
  let navigate=useNavigate("http://localhost:3000/employees")

  let obj =useParams()
console.log(obj);

useEffect(()=>{
  let payload={
    ename:name,
    esalary:salary,
    ecompany:company
}
  axios.get(`http://localhost:3000/employees/${obj.abc}`,payload)
  .then((response)=>{
   console.log( response.data);
   setname(response.data.ename)
   setsalary(response.data.esalary)
   setcompany(response.data.ecompany)
  })
  .catch(()=>{
   console.log("errrrrrrrrrrrr");
   
  })
 },[])

 let namedata=(e)=>{
  setname(e.target.value)
 }
 let salarydata=(e)=>{
  setsalary(e.target.value)
 }
 let companydata=(e)=>{
  setcompany(e.target.value)
 }
 let submit=(e)=>{
  e.preventDefault()
  let payload={
    ename:name,
    esalary:salary,
    ecompany:company
  }
  axios.put(`http://localhost:3000/employees/${obj.abc}`,payload)
  .catch(()=>{console.log("update");
})
  .then(()=>{console.log("not update");})
  navigate("/user")
 }

  return (
    <div id={style.myForm}>
      <form action="">
        <h5>UPDATE USER</h5>
        <label htmlFor="">Name </label>
        <input type="text"  value={name} onChange={namedata}/> <br />
        <label htmlFor="">Salary</label>
        <input type="text"  value={salary} onChange={salarydata}/> <br />
        <label htmlFor="">Company</label>
        <input type="text"  value={company} onChange={companydata}/> <br />
      <Link to="/user"> <button onClick={submit}>Submit</button> </Link>

          </form>
    </div>
  )
}

export default Edituser