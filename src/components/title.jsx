import React from 'react';
import './titlestyle.css';

const Title = (props) => {
    return (
        <div>
        <h1>First Name: {props.name}</h1>,
        <h1>Last Name: {props.surname}</h1>
        </div>
       
    );

}
export default Title;