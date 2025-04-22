import Header from "@Containers/Header/Header";
import "./App.scss"
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ROUTES from "@Physics/Constants/routes.jsx";
import { Flip, ToastContainer } from "react-toastify";



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
      {!location.pathname.startsWith("/administration") && (
        <Header/>
      )}
      <Routes>
        <Route path={ROUTES.HOME.path} element={ROUTES.HOME.element}/>
        <Route path={ROUTES.DESTINATION.path} element={ROUTES.DESTINATION.element}/>
        <Route path={ROUTES.CREW.path} element={ROUTES.CREW.element}/>
        <Route path={ROUTES.TECHNOLOGY.path} element={ROUTES.TECHNOLOGY.element}/>
        <Route path={ROUTES.ADMINISTRATION.path} element={ROUTES.ADMINISTRATION.element}/>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        theme="light"
        transition={Flip}
        />
    </div>
  )
}
