import { useState } from "react"

const Products=({addToKart})=>{
    
    const [item] = useState([
        {
            name: 'Shoe',
            cost: 1200,
            image: 'https://th.bing.com/th/id/OIP.cut5vEb4f6mBG1ICQUzmlgHaHa?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7',
            quantity:0
        },
        {
            name: 'Deo',
            cost: 900,
            image: 'https://i5.walmartimages.com/asr/ad3c1542-b975-40b3-ac60-a8d8b9fd0cc1_1.334ef9d41b9da03cc572047c3e848df6.jpeg',
            quantity:0
        },
        {

            name: 'Sweater',
            cost: 900,
            image: 'https://th.bing.com/th/id/OIP.IKoedtCBmOzmx93Xpz7N_QHaLH?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7',
            quantity:0


        },
        {

            name: 'Digital Watch',
            cost: 900,
            image: 'https://th.bing.com/th/id/OIP.6hB7Ccvajl7-G4lgRl8IygHaIq?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7',
            quantity:0


        }

    ])

    
    

      return ( <div className="row">
                {item.map((item, i) => {
                    return <> <div key={i} >
                        <div className="col-3 col-sm-3">
                            <div className="card" style={{ width: 180 }}>
                                <img className="card-img-top" size="140"  src={item.image} alt="gita"></img>
                                <div className="card-body">
                                    <h5 className="card-title" >{item.name}</h5>
                                    <p className="card-text" >Cost: {item.cost}</p>
                                    <p className="card-text" >Cost: {item.qty}</p>
                                    <button className="btn btn-primary" onClick={() => addToKart(item)}>Add to Kart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    </>
                })}
                            </div>
    

      )}

export default Products;