import React from 'react'

const Hints = (props) => {
  return (
    <div>
        <p className='text-2xl font-bold'>{props.titel}</p>
        <p className=''>
            {props.Hints}
        </p>
    </div>
  )
}

export default Hints
