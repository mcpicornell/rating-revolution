import { ICompaniesPhotos } from '../interfaces';
import companiesPhotosJSON from '../../data/database/companiesPhotos.json'


export const getCompaniesPhotosById = async (companyId: number): Promise<string[]> => {
    const photos: ICompaniesPhotos[] = companiesPhotosJSON
    const foundPhotos = photos.filter((photo) => photo.companyId === companyId);
    const photosArrUrls = foundPhotos.map((photo)=> photo.photoUrl);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(photosArrUrls);
      }, 200);
    });
};

