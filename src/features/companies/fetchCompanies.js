import companiesJSON from '../../data/database/companies.json'



export const fetchCompanies = async (setCompanies) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(companiesJSON)
        }, 200)
    })
};

export const getCompanyById = async (id) => {
    const companies = companiesJSON
  
    const foundCompany = companies.find((company) => company.id === id);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundCompany || null);
      }, 200);
    });
};

export const getcompanyByCIF = async (CIF) => {
    const companies = companiesJSON
  
    const foundCompany = companies.find((company) => company.CIF === CIF);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundCompany || null);
      }, 200);
    });
};

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