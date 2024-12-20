import React, { useEffect, useState } from 'react'
import serie from './Formula'
import img from './assets/serie.png'
import InputComp from './components/InputComp'
import Result from './components/Result'
const App = () => {
    const [number,setNumber]=useState(0)
    const [result,setResult]= useState(0)

    useEffect(() => {
      setResult(serie(parseInt(number)))
    }, [number])
    
    const submit = (e) =>{
        e.preventDefault()
        setNumber(e.target[0].value)
    }

  return (
    <>
      <div style={{width: 400}} className='card m-auto text-center mt-5 border rounded'>
        <img src={img} className="card-img-top" alt="imagen de la serie"/>
        <InputComp submit={submit}/>
        <Result number={number} result={result}/>
      </div>
    </>
  )
}

export default App