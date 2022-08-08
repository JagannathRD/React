import react from 'react'

const Kart=({list,removeFromKart,removeAllFromKart})=>{
  
    const getTotalCost=()=>{
        return (list.reduce((sum,{cost})=>sum+cost,0))
    }
    return(
        <div>
            <h5>My baggage</h5>
            <h6>Total items={list.qty}</h6>
            <h6>Total Cost={getTotalCost()}</h6>
            {list.length>0 &&
            <button className="btn btn-danger" onClick={removeAllFromKart}>Empty My Bag</button> 
            }
                    <div className="row">
        {list.map((item,i) => {
       return <> <div key={i} >
            <div className="col-3 col-sm-3">
                       <div className="card" style={{ width: 180 }}>
                        <img className="card-img-top" size="140" src={item.image} alt="gita"></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Cost: {item.cost}</p>
                            <p className="card-text">quantity: {item.qty}</p>
                            <button className="btn btn-primary" onClick={()=>removeFromKart(i)}>Remove from Kart</button>
                        </div>
                    </div>
            </div>
            
        </div>
        </> })} 
        
        </div>
        </div>
    )
    
}

export default Kart;