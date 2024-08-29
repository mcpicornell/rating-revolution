import {request} from "../utils";

export const fetchCompanies = async (setState) => {
    const body = null
    const response = await request("GET", "/companies/", body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const fetchCompanyById = async (id, setState) => {
    const body = null
    const response = await request("GET", `/companies/${id}/`, body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const getCompanyByCIF = async (CIF, setState) => {
    const body = null
    const response = await request("GET", `/companies/?CIF=${CIF}`, body)
    if(response.ok){
        const data = await response.json()
        setState(data[0])
    }
}

export const addCompany = async (companyObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(companyObj)
        }, 200)
    })
};

export const deleteCompany = async (companyObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(companyObj)
        }, 200)
    })
};