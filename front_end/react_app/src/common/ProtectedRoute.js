import React from "react";
import {Route, Redirect} from 'react-router-dom';
import authenticator from "./Authenticator";

export const ProtectedRoute = ({path, component: Component, ...rest}) => {
    let authenticated = authenticator.isAuthenticated();
    return(
        <Route {...path} render={
            (props) => {
                if(authenticated){
                    return <Component {...props} {...rest}/>
                }else{
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }
        />
    );
};