import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { MenuList} from './pages/MenuList';
import { App } from './App';

export const Routes = () => (
    <div>
                <Router>
                    <Switch>
                        <Route path="/">
                            <App />
                        </Route>
                        <Route path="/MenuList" exact>
                            <MenuList />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
    </div>
        
);
