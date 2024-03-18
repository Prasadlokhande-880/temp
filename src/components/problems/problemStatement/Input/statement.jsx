import React from 'react'

const statement = (props) => {
  return (
      <div>
        <section className="mb-4">
          <h1 className="text-2xl font-bold">{props.titel}</h1>
        </section>
        <section>
         {props.description}
        </section>
      </div>
  )
}

export default statement
