import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import home from "../components/home/home";
import getStarted from "../components/getStarted/getStarted";
    const routes = [{
        path: "/home",
        exact:true,
        component: home
    }, {
        path: "/get-started",
        exact:true,
        component: getStarted
    }, {
        path: "/",
        exact:true,
        component: home
    }
];
 
const routercomp =(props)=>(
    <React.Fragment>
   {routes.map((myroute,i)=>(
    myroute.exact?<Route key={i} exact path={myroute.path} component={myroute.component} />:<Route  key={i} path={myroute.path} component={myroute.component} /> 
    ))} 
    </React.Fragment>
);
export default routercomp;
