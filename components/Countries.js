import React, { useEffect, useState } from 'react'

const Countries = () => {
    const [data, setData] = useState([])
    const [search, SetSearch] = useState('')

    const getCoronaData = async () => {
        const response = await fetch(`https://corona.lmao.ninja/v3/covid-19/countries`)
        const data = await response.json()
        setData(data)
        console.log(data)
    }

    useEffect(() => {
        getCoronaData()
    }, [])

    const rederData = () => {
        return filterData.map(da => (
            <tr>
                <td scope="row">{da.country}</td>
                <td>{da.continent}</td>
                <td scope="row">{da.cases}</td>
                <td>{da.active}</td>
                <td scope="row">{da.deaths}</td>
                <td>{da.deathsPerOneMillion}</td>
                <td scope="row">{da.recovered}</td>
            </tr>

        ))
    }

    const getCountry = (e) => {
        console.log(e.target.value)
        SetSearch(e.target.value)
    }

    const filterData = data.filter(data => {
        return data.country.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="ml-15">
            <div className="input-group input-group-sm ">

                <input type="text" onChange={e => getCountry(e)} placeholder="Enter a country to search"
                    size="50" className="ml-1" />
            </div><br></br>

            <table border="2" className="table table-striped table-hover table-dark">
                <thead >
                    <tr>
                        <th>Country</th>
                        <th>Continent</th>
                        <th>Cases</th>
                        <th>Active Cases</th>
                        <th>Deaths</th>
                        <th>Deaths Per Million</th>
                        <th>Recoverd</th>
                    </tr>
                </thead>
                <tbody key={data.country}> {rederData()}</tbody>
            </table>

        </div>

    )
}


export default Countries;