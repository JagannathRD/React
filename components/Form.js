import { useState } from "react"
import React from 'react'


const Form = ({ names}) => {
    const [name, setName] = useState([])

    const add = (e) => {
        // e.preventDefault()

        if (name.length === 0) {
            alert("fields are mandatory")
            return
        }
        names([name]) //sending name each time
        setName(e.target.value = '') //making input blank
    }

    return (
        
        <div className="form-group">
            
        Add a To do:<input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)}></input>
            <button onClick={add} className="btn btn-primary"> Add</button>
        </div>
        
    )

}

export default Form;