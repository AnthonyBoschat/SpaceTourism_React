// const backend_url = "http://localhost:8000/api"
const backend_url = "https://boschat.cefim.o2switch.site/api/api"



const ENDPOINTS = {
    DESTINATIONS:{
        GET_ALL:`${backend_url}/destinations/index`,
        UPDATE:`${backend_url}/destinations/admin/update`,
        DELETE:`${backend_url}/destinations/admin/delete`,

    },
    CREWS:{
        GET_ALL:`${backend_url}/crews/index`,
        UPDATE:`${backend_url}/crews/admin/update`,
        DELETE:`${backend_url}/crews/admin/delete`,
    },
    TECHNOLOGY:{
        GET_ALL:`${backend_url}/technology/index`,
        UPDATE:`${backend_url}/technology/admin/update`,
        DELETE:`${backend_url}/technology/admin/delete`,
    }
}

export default ENDPOINTS