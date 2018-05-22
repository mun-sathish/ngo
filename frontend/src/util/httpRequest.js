export default function sendReq(uri, reqMethod, reqData) {
    console.log("URL: " + uri + ", Method: " + reqMethod)
    console.log(reqData);

    if (reqMethod === "get") {
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
                return Promise.reject();
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
            .then((response) => response.json()) //console.log(response.text()) 
            .then(response => {
                if (response.statusCode !== null && response.statusMessage !== null && response.statusCode !== 0) {
                    console.log("Success but error response, code: " + response.statusCode + " message: " + response.statusMessage);
                    return Promise.reject();
                }
                return response
            })
            .catch((err) => {
                console.log(err)
                return Promise.reject();
            })
    }

} 