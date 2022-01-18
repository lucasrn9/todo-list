import { FC } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from "../pages"

export const Routes: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}