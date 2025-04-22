import Header from "@Containers/Header/Header";
import "./App.scss"
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home_Page from "@Pages/Home";
import Destination_Page from "@Pages/Destination";
import Crew_Page from "@Pages/Crew";
import Technology_Page from "@Pages/Technology";



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
        <Route path="/" element={<Home_Page/>}/>
        <Route path="/destination" element={<Destination_Page/>}/>
        <Route path="/crew" element={<Crew_Page/>}/>
        <Route path="/technology" element={<Technology_Page/>}/>
      </Routes>
    </div>
  )
}
