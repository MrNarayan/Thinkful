import React from 'react';

function University(props){
    console.log(props.name);
    return (<p>{props.name}</p>);
}

export default University;
