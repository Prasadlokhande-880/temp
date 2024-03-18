import React from 'react';

const Constran = (props) => {
  return (
    <div>
      <div>
        <section className="mt-8">
          <h1 className="text-2xl font-bold">{props.titel}</h1>
        </section>
        <section>
          <ul className="list-disc list-inside">
            {
              props.data.map((val, index) => (
                <li key={index}>
                  {val}
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Constran;
