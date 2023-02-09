import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h2>{props.title}</h2>
        <p>Link: 
          <a href={props.url}> {props.url}</a>
        </p>
        <p>{props.description}</p>
        <p>Creator: {props.creator}</p>
        <footer>Agent: {props.tag}</footer></div>        
    </div>
  )
}

export default Card