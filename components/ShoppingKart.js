import react, { useState } from 'react'
import '../cssstyle/ShoppingKart.css'
import './Kart'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Kart from './Kart'
import Products from './Products'

const ShoppingKart = () => {
    const [kartList, setKartList] = useState([])
    const [page,setPage]=useState('products')

    
    const navigateTo=(nextPage)=>{
        setPage(nextPage)
    }

    const addToKart = (item) => {
         let newKart=[...kartList]
         let exist=kartList.find((x)=>x.name===item.name);
             
             if(exist){
                 console.log(exist)
                exist.qty++;                 
             }  else{
                 exist={...kartList,qty:1}
                 newKart.push(exist);
             } 
             
             setKartList(newKart)
        // // const list = [...kartList, item]
        // setKartList(list)
        // console.log(list)
    }

    const removeFromKart=(i)=>{
        const list=[...kartList]
        list.splice(i,1)
        setKartList(list)

    }

    const removeAllFromKart=()=>{
        // const list=[...kartList]
        // list.splice(0,list.length)
        // setKartList(list)
        setKartList([])

    }

    return (
        <div>
            {/* <Router>
                <Link to='/bag'>My Bag</Link>
                <Switch>
                    <Route path='/bag'>
                        <Kart list={kartList}></Kart>
                    </Route>
                </Switch>
            </Router> */}
            <header>
            <button className="btn btn-outline-primary" onClick={()=>navigateTo('cart')}>My Bag ({kartList.length})</button>
            <button className="btn btn-outline-primary" onClick={()=>navigateTo('products')}>Products</button>
            </header>
            {page==='products' && <Products addToKart={addToKart} />}
            {page==='cart' && <Kart list={kartList} removeFromKart={removeFromKart} removeAllFromKart={removeAllFromKart}/>}
            
        </div>
    )
}


export default ShoppingKart;