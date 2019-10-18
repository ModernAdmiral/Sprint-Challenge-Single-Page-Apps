import React from "react";


export default function CharacterCard(props) {

  return (
   <div>
    <img alt={`${props.name}`} src={props.image} />
    <h3>Name: {props.name}</h3>
    <h3>Status: {props.status}</h3>
    <h3>Species: {props.species}</h3>
  </div>
  )
}
