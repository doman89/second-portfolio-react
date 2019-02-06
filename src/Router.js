import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import AdminPanel from './adminpanel/AdminPanel';
import PageNotFound from './PageNotFound';

class Router extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/editContent" component={AdminPanel}/>
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        )
    };
};

export default Router;