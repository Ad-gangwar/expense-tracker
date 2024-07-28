const URL = "http://localhost:5000"

export const makeUnauthPostReq = async (route, body) => {
    const response = await fetch(URL + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeUnauthGetReq = async (route, body) => {
    const response = await fetch(URL + route, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthPostReq = async (route, body) => {
    const response = await fetch(URL + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("expToken")}`,
        },
        body: JSON.stringify(body),
    });


    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthGetReq = async (route) => {
    const response = await fetch(URL + route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("expToken")}`,
        },
    });

    const formattedResponse = await response.json();
    return formattedResponse;
}