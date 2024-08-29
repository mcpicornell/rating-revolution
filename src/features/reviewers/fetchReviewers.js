import {request} from "../utils";

export const fetchReviewers = async (setState) => {
    const body = null
    const response = await request("GET", "/companies/", body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const fetchReviewerById = async (id, setState) => {
    const response = await request("GET", `/companies/${id}/`)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const getReviewerByEmail = async (email, setState) => {
    const response = await request("GET", `/companies/?email=${email}`)
    if(response.ok){
        const data = await response.json()
        setState(data[0])
    }
}

export const createReviewer = async (body, setState) => {
    const response = await request("POST", `/companies/`, body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const updateReviewer = async (id, body, setState) => {
    const response = await request("PATCH", `/companies/${id}`, body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const deleteReviewer = async (id, setState) => {
    const response = await request("DELETE", `/companies/${id}`)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}