const backend_url = "http://localhost:8000/api"


const ENDPOINTS = {
    DESTINATIONS:{
        GET_ALL:`${backend_url}/destinations/index`,
        UPDATE:`${backend_url}/destinations/admin/update`,

    },
    CREWS:{
        GET_ALL:`${backend_url}/crews/index`,
        UPDATE:`${backend_url}/crews/admin/update`,
    },
    TECHNOLOGY:{
        GET_ALL:`${backend_url}/technology/index`,
        UPDATE:`${backend_url}/technology/admin/update`,

    }
}

export default ENDPOINTS