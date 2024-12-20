import React from 'react'

const InputComp = ({submit}) => {
  return (
    <div className="card-body">
        <h5 className="card-title my-3">Introduce el valor de n</h5>
        <form className='my-3 container' onSubmit={(e)=>submit(e)}>
            <input className='form-control' type='number'placeholder='valor de n'/>
            <button className='btn btn-dark my-3' type="submit">Solucion</button>
        </form>
    </div>
  )
}

export default InputComp