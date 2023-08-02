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
    rating: number,
    userId: string,
    reviewTitle: string,
    reviewText: string,
    date: string,
}

export interface ICompany{
    companyId: string,
    companyName: string,
    rating: number,
    description: string,
    photos: string[],
    reviews:IReview[]
}