import React from 'react';

// Props Object
// {
// name:"Blake";
// show:"Anything on";
// admin:true;
// }

const UserProfile = (props) => {

let role = "";

if (props.admin){
    role = 'admin';
}else{
    role = 'guest';
}
    return (
        <div className="text-warning text-center">
            <h3>This is the User Profile componet 'properties'</h3>
            <p><span className="badge bg-primary">{role}</span>My name is {props.name} and my favorite show is {props.show}</p>
        </div>
    );
}

export default UserProfile;