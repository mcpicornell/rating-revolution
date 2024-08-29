import {request} from "../utils";


export const login = async (body, setState) => {
    const response = await request("POST", `/auth/login/`, body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const logout = async (setState) => {
    const response = await request("POST", `/auth/logout/`)
    return response.statusCode
}