import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICompany } from '../interfaces';
import companiesJSON from '../../data/database/companies.json'



export const fetchCompanies = createAsyncThunk<ICompany[], void>('companies/fetchCompanies', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(companiesJSON)
        }, 200)
    })
});

export const getcompanyById = async (companyId: string): Promise<ICompany | null> => {
    const companies: ICompany[] = companiesJSON
  
    const foundcompany = companies.find((company) => company.companyId === companyId);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundcompany || null);
      }, 200);
    });
};

export const getcompanyByCIF = async (CIF: string): Promise<ICompany | null> => {
    const companies: ICompany[] = companiesJSON
  
    const foundcompany = companies.find((company) => company.CIF === CIF);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundcompany || null);
      }, 200);
    });
};

export const addCompany = createAsyncThunk<ICompany, ICompany>('companies/addCompany', async (companyObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(companyObj)
        }, 200)
    })
});

export const deleteCompany = createAsyncThunk<ICompany, ICompany>('companies/deleteCompany', async (companyObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(companyObj)
        }, 200)
    })
});