import { useState } from "react"
import style from "./style.module.css"
import axios from "axios"

const CreateUser=()=>{

    let [name,setName]=useState('')
    let [salary,setSalary]=useState('')
    let [company,setCompany]=useState('')

    let nameData=(e)=>{
        setName(e.target.value);
    }
    let salaryData=(e)=>{
        setSalary(e.target.value);
    }
    let companyData=(e)=>{
        setCompany(e.target.value);
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={
            ename:name,
            esalary:salary,
            ecompany:company
        }
        axios.post("http://localhost:3000/employees",payload)
        .then(()=>{
            console.log("got the data");
        })
        .catch(()=>{
            console.log("erorr");
        })
    }
    return(
        <div id={style.myForm}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={nameData}/>
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={salaryData}/>
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companyData}/>
                <button onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}
export default CreateUser