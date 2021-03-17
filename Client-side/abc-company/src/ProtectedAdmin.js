import React from 'react';
import {Route, Redirect} from 'react-router-dom' ;


function ProtectedAdmin({token: token, user:user, component: Component, ...rest}) {
    return (<Route {...rest} render = {(props) => {
   if (token && (user === "admin")) {
       return <Component {...props}/>
   } else {
       return ( <Redirect to = { {pathname: '/', state: {from: props.location}} }/> )
     }
    }}/>
 )     
}

export default ProtectedAdmin;

