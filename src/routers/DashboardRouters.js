import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Contacto } from '../componentes/Usuario/Contacto'
import { General } from '../componentes/Usuario/General'
import { NavBar } from '../componentes/ui/NavBar'

export const DashboardRouters = () => {
    return (
        <>
          <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={ General } />
                    <Route exact path="/contacto" component={ Contacto} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
