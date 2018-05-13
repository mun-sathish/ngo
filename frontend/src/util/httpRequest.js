export default function sendReq(uri, reqMethod, reqData) {
    if(reqMethod === "get")
    {
        return fetch(uri, {
            method: reqMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err)
            })
    }
    else {
        return fetch(uri, {
            method: reqMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqData)
        })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err)
            })
    }
    
} 