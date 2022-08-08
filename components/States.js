import React, { useEffect, useState } from 'react'

const States = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(false)
    const [search, setSearch] = useState('')

    const getData = async () => {
        try {
            const response = await fetch(`https://api.covid19india.org/data.json`)
            const data = await response.json()
            setData(data.statewise)
            console.log(data)

        } catch {
            console.error();
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // const arr=data.statewise
    // console.log(arr)
    // arr.filter((n)=>(n.state==='karnataka'))
    for (let i = 0; i < data.length; i++) {
        if (data[i].statecode === 'AN')
            console.log(data[i].deaths)
    }

    const rederData = () => {
        return filterData.map(da => (
            <tr key={da.state}>
                <td >{da.lastupdatedtime}</td>
                <td >{da.state}</td>
                <td>{da.active}</td>
                <td >{da.confirmed}</td>
                <td>{da.deaths}</td>
                <td>{da.recovered}</td>
            </tr>

        ))
    }

    const showData = () => {
        setShow(true)
        setHide(false)
    }
    const hideData = () => {
        setShow(false)
        setHide(true)

    }
    const searchState = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    const filterData = data.filter(state => {
        return state.state.toLowerCase().includes(search.toLowerCase())
    })


    return (

        <div className="ml-15">
            <div className="input-group input-group-sm ">

                <input type="text" onChange={e => searchState(e)} placeholder="Enter a state to search"
                    size="50" className="ml-1" />
            </div>

            <br></br>
            <table border="2" className="table table-striped table-hover table-dark">
                <thead >
                    <tr>
                        <th>Last Updated</th>
                        <th>State</th>
                        <th>Active Cases</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recoverd</th>
                    </tr>
                </thead>
                <tbody key={data.state}>{rederData()}</tbody>
            </table>

        </div>
    )
}

export default States;