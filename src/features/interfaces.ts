export interface IUser {
    userId: number,
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    reviewsCount: number,
    nickName: string
}

export interface IReview {
    reviewId: number,
    companyId: number,
    rating: number,
    userId: number,
    reviewTitle: string,
    reviewText: string,
    date: string,
    likes: number,
    dislikes: number
}

export interface ICompany{
    companyId: number,
    companyName: string,
    rating: number,
    description: string,
    reviewsCount:number,
    email: string,
    adress: string,
    contactNumber: string,
    CIF: string,
    password: string
}

export interface ICompaniesPhotos{
    photoId: number,
    companyId: number,
    photoUrl: string
}