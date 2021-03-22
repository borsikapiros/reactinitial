import './App.css';
import Hotel from "./components/Hotel";
import React, { useState, useEffect } from "react";
import LoadingMask from './components/LoadingMask'
import Subscription from './components/Subscription'

const App = () => {


  const [data, setData] = useState("")
  

  const fetchData = () => {
    
    fetch("/api/hotels")
      .then((response) => response.json())
      .then((data) => { setData(data) })

  };

 
  useEffect(() => {
    fetchData()
  }, [])

  if (data === "") {
    return <LoadingMask />
  } else {

    return (
      <div className="App">
        <h1>Hotels</h1>
        <Hotel data={data} />

      <Subscription />

      </div>
    )

  }


}

export default App
