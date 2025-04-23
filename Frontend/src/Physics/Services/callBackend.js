export default async function callBackend(endpoint, method="GET", payload=null){
    if(!endpoint) return null
    if(method === "GET" && payload) return null
    if (["POST","PUT","PATCH","DELETE"].includes(method) && !payload) return null;
    
    const config = {
        method,
        headers: {
          'Accept': 'application/json',
          // X-CSRF-TOKEN si tu utilises le middleware web de Laravel
          // 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
        },
      };
    
      if (payload) {
        if (payload instanceof FormData) {
          // on ne touche pas aux headers, le navigateur s'occupe de Content-Type + boundary
          config.body = payload;
        } else {
          // JSON classique
          config.headers['Content-Type'] = 'application/json';
          config.body = JSON.stringify(payload);
        }
      }
    
      const response = await fetch(endpoint, config);
      if (!response.ok) return null;
      return response.json();
}