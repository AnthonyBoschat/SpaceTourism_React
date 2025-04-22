const backend_url = "http://localhost:8000/api"


const ENDPOINTS = {
    DESTINATIONS:{
        GET_ALL:`${backend_url}/destinations/index`
    },
    CREWS:{
        GET_ALL:`${backend_url}/crews/index`
    },
    TECHNOLOGY:{
        GET_ALL:`${backend_url}/technology/index`
    }
}

export default ENDPOINTS