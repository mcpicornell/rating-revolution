export interface IUser {
    id: string,
    name: string,
    email: string,
    avatar: string,
    reviews: any,
    nickname: string,
    rating: string,
}

export interface IReview {
    id: string,
    company: string,
    rating: number,
    reviewer: string,
    title: string,
    text: string,
    date: string,
    likes: number,
    dislikes: number
}

export interface ICompany{
    id: string,
    name: string,
    rating: number,
    description: string,
    photos: any,
    reviews: any,
    email: string,
    address: string,
    phone: string,
    CIF: string,
}