import React from "react"
import "./App.css"

export default function App(){
  const [isCount,setIsCount]=React.useState(0)

  function add(){
    setIsCount(isCount + 1)
  }

  function sub(){
    setIsCount(isCount - 1)
  }

  return(
    <div className="box">
      <div className="container">
        <h1 className="head">Count Incrementor</h1>
        <div className="centerpos">
          <div className="centerbox">
            <h1 className="no">{isCount}</h1>
          </div>
        </div>
        
        <div className="pluspos">
          <button className="plusbox" onClick={add}>
            <h1 className="plus">+</h1>
          </button>
        </div>
        <div className="minuspos">
          <button className="minusbox " onClick={sub}>
            <h1 className="minus">-</h1>
          </button>
        </div>
        
        
      </div>
      
      
      
    </div>
  )
}