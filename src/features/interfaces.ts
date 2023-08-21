export interface IUser {
    userId: string,
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    reviews: IReview[],
    nickName: string
}

export interface IReview {
    reviewId: string,
    companyId: string,
    rating: number,
    userId: string,
    reviewTitle: string,
    reviewText: string,
    date: string,
    likes: number,
    dislikes: number
}

export interface ICompany{
    companyId: string,
    companyName: string,
    rating: number,
    description: string,
    photos: string[],
    reviews:IReview[],
    email: string,
    adress: string,
    contactNumber: string,
    CIF: string,
    password: string
}