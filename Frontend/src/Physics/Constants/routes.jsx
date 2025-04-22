import Administration_Page from "@Pages/Administration"
import Crew_Page from "@Pages/Crew"
import Destination_Page from "@Pages/Destination"
import Home_Page from "@Pages/Home"
import Technology_Page from "@Pages/Technology"



const ROUTES = {
    HOME:{path:"/", element:<Home_Page/>},
    CREW:{path:"/crew", element:<Crew_Page/>},
    DESTINATION:{path:"/destination", element:<Destination_Page/>},
    TECHNOLOGY:{path:"/technology", element:<Technology_Page/>},
    ADMINISTRATION:{path:"/administration", element:<Administration_Page/>},
}

export default ROUTES