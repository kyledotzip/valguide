import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.url}</p>
        <p>{props.creator}</p>
        <footer>{props.tag}</footer>
    </div>
  )
}

export default Card