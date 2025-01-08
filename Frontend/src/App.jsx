import Header from "@Containers/Header/Header";
import "./App.scss"
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@Pages/Home/Home";
import Destination from "@Pages/Destination/Destination";
import { useEffect, useState } from "react";



export default function App() {

  const location = useLocation()
  const [contentClass, setContentClass] = useState("home")

  useEffect(() => {
    if(location.pathname === "/"){
      setContentClass("home")
    }else{
      setContentClass(location.pathname.slice(1))
    }
  }, [location])
  
  return (
    <div className={`content ${contentClass}`}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
      </Routes>
    </div>
  )
}
