export interface IUser {
    userId: string,
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    reviews: IReview[]
}

export interface IReview {
    reviewId: string,
    companyId: string,
    rate: number,
    userId: string,
    reviewTitle: string,
    reviewText: string,
    date: string,
}

export interface ICompany{
    companyId: string,
    companyName: string,
    rate: number,
    description: string,
    photos: string[],
    reviews:IReview[]
}