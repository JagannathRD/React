import React, { useState } from 'react'

const Players = ({ players }) => {
    const [data, setData] = useState({
        id: '',
        content: ''
    })

    const n = players.map((names, i) => {
        return <div key={i}>{names.content}</div>
    }
    )

    const post = async (e) => {
        e.preventDefault()
        const result = await fetch('http://localhost:8080/greeting', {
            method: 'POST',
            body: JSON.stringify({
                id: 5,
                content: 'kelly'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await result.json()
        console.log("Result " + data.title)
    }


    const seState = (e) => {

        const newdata = { ...data }
        newdata[e.target.id] = e.target.value

        setData(newdata)
        console.log(newdata)
    }

    return (
        <>
            Names:{n}
            <form onSubmit={e => post(e)}>
                {/* Enter id:<input type="text" value={data.id} id="id" onChange={(e) => seState(e)}></input>
                Enter Name:<input type="text" value={data.content} id="content" onChange={(e) => seState(e)}></input> */}
                <button type="submit" className="btn btn-primary">Post data</button>
            </form>
            
        </>
    )
}

export default Players