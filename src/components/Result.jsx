import React from 'react'

const result = ({number,result}) => {
  return (
    <>
        <h5 className="card-title my-3">El valor de n={number}</h5>
        <p className="card-text my-3">La solucion de la serie con n</p>
        <p className="card-text my-3">Serie({number})={result}</p>
    </>
  )
}

export default result