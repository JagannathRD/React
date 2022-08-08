import React, { useEffect, useState } from 'react'
import States from './States'
import Countries from './Countries'
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'

const Cowin = () => {


    return (
        <div>

            <h3>Corona Tracker</h3>
            <Router>
                <Link to="/country" role="button" class="btn btn-outline-primary">Data by Countries</Link>

                <Link to="/states" role="button" class="btn btn-outline-primary">Data by States</Link>

                <Switch>
                    <Route path="/country">
                        <Countries></Countries>
                    </Route>
                    <Route path="/states">
                        <States></States>
                    </Route>

                </Switch>
            </Router>


        </div>
    )
}

export default Cowin;