import {request} from "../utils";

export const fetchReviewers = async (setState) => {
    const body = null
    const response = await request("GET", "/reviewers/", body)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}

export const fetchReviewerById = async (id, setState) => {
    const response = await request("GET", `/reviewers/${id}/`)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}

export const getReviewerByEmail = async (email, setState) => {
    const response = await request("GET", `/reviewers/?email=${email}`)
    if (response.ok) {
        const data = await response.json()
        setState(data[0])
    }
}

export const createReviewer = async (body, setState, setResponse) => {
    try {
        const response = await request("POST", `/reviewers/`, body)
        const data = await response.json()
        setState(data)
    } catch (error) {
        setResponse(error)
    }
}

export const updateReviewer = async (id, body, setState) => {
    const response = await request("PATCH", `/reviewers/${id}`, body)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}

export const deleteReviewer = async (id, setState) => {
    const response = await request("DELETE", `/reviewers/${id}`)
    if (response.ok) {
        const data = await response.json()
        setState(data)
    }
}