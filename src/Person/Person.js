import React from 'react';
import './Person.css';

const person = (props) => {
   // return <p> Hi, My name is devi and my age is {Math.floor(Math.random()*30)}!</p>

   return(
   <div className="Person"> <p  onClick={props.click}> Hi, My name is {props.name} and my age is {props.age}!</p>
   <p>{props.children}</p>
   <input type="text" onChange={props.changed}></input>
   </div>
   )
};

export default person;