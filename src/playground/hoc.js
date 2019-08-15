import React from 'react';   
import ReactDOM from 'react-dom';

//regular component: 

const Info = (props) => (
    <div>
     <h1>Info</h1>
     <p>The info is: {props.info}</p>
    
    </div>
);

//HOC: 
//regular function not react component:

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info, please do not share!</p>}
        <WrappedComponent {...props} /> {/*  <info />   */}
        </div>
    );

};

const requiredAuthentication = (WrappedComponent) => { 
    return(props) => (
        <div>
          {props.isAuthenticated   ? <WrappedComponent {...props} /> :<p>Please login to download</p>}
        
        </div>


    );

};

const AdminInfo = withAdminWarning(Info); // what we will get back another version of <Info />, going to be the HOC
const AuthInfo = requiredAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the detail" />,document.getElementById('app'));