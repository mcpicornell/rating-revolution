import { request } from '../utils';


// export const fetchReviews = createAsyncThunk<IReview[], void>('reviews/fetchReviews', async () => {
//     return await new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(reviewsJSON)
//         }, 200)
//     })
// });

export const fetchReviews = async (setState) => {
    const body = null
    const response = await request("GET", "/reviews/", body)
    if(response.ok){
        const data = await response.json()
        setState(data)
    }
}

export const getReviewById = async (id, setState) => {
    const body = null
    const response = await request("GET", `/reviews/${id}/`, body)
    if(response.ok){
        setState(await response.json())
    }
}


// export const getReviewById = async (id: string): Promise<IReview | null> => {
//     const reviews: IReview[] = reviewsJSON
//
//     const foundReview = reviews.find((review) => review.id === reviewId);
//     return await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(foundReview || null);
//       }, 200);
//     });
// };

export const addReview = async (reviewObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(reviewObj)
        }, 200)
    })
};

export const deleteReview = async (reviewObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(reviewObj)
        }, 200)
    })
};