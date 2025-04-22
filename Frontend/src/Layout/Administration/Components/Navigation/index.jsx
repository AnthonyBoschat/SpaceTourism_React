import { useDispatch, useSelector } from "react-redux"
import "./style.scss"
import { setTab } from "@Physics/Redux/Slices/administrationSlice"

export default function Administration_Navigation(){

    const tabs = useSelector(store => store.administration.tabs)
    const dispatch = useDispatch()

    const isActive = (tab) => tab.active ? "active" : ""

    const handleClick = (index) => dispatch(setTab(index))

    return(
        <div className="navigation">
            {tabs.map((tab, index) => (
                <button onClick={() => handleClick(index)} key={index} className={isActive(tab)}>{tab.label}</button>
            ))}
        </div>
    )
}