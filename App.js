import { useEffect, useState } from 'react';
import './App.css';
import Child from './components/Child'
import Form from './components/Form';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import User from './Users';
import Cowin from './components/Cowin';
import Players from './components/Players'
import ShoppingKart from './components/ShoppingKart';

function App() {
  const [names, setNames] = useState([]);

  const [image, setImage] = useState();
  const [user, setUser] = useState([])
  const [players, setPlayers] = useState([])


  const addingNames = (logs) => {
    // ...names is adding an array,logs adding an object
    let log = [...names, logs]
    setNames(log)
  }

  const deleteItem = (i) => {
    const newList = [...names]
    newList.splice(i, 1)
    setNames(newList)
  }

  const taskComplete = (i) => {
    const newList = [...names]
    newList[i].isCompleted = true
    setNames(newList)
  }

  useEffect(() => {
    getRequest()
  }, []);

  const getRequest = async () => {
    try {
      const resp = await fetch(`https://dog.ceo/api/breeds/image/random`)
      const data = await resp.json()
      setImage(data.message)
      console.log(data)

    }
    catch (e) {
      console.log(e)
    }
    try {
      const resp2 = await fetch(`https://randomuser.me/api/`)
      const data2 = await resp2.json()
      const { name: { title, first, last }, email } = data2.results[0]
      setUser(data2.results[0])
      console.log(title, first, last, email)

    } catch (e) {
      console.log(e)
    }
    const resp3 = await fetch(`https://randomuser.me/api/`)
    const data3 = await resp3.json()
    setPlayers(data3)
    console.log(data3)


  }
  return (

    <div className="App">


      <Router>
        <div>


          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">My React App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/form">Adding to do</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/users">Users</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cowin">Corona Tracker</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/players">Players</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/kart">ShoppingKart</Link>
                </li>


              </ul>
            </div>
          </nav>
          <Switch>
            <Route path='/home'>
              <Home img={image} />
            </Route>
            {/* {<Route path='/users'>
          <User user={user} ></User>
          </Route> } */}
            <Route path='/form'>
              <Form names={addingNames} list={names}></Form>
            </Route>
            <Route path='/cowin'>
              <Cowin></Cowin>
            </Route>
            <Route path='/players'>
              <Players players={players}></Players>
            </Route>
            <Route path='/kart'>
              <ShoppingKart></ShoppingKart>
            </Route>


          </Switch>
        </div>

      </Router>


      <Child list={names} deleteItem={deleteItem} taskComplete={taskComplete} />

    </div>
  );
}

export default App;
