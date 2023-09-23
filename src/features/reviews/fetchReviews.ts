import { createAsyncThunk } from '@reduxjs/toolkit';
import { IReview } from '../interfaces';
import reviewsJSON from '../../data/database/reviews.json'


export const fetchReviews = createAsyncThunk<IReview[], void>('reviews/fetchReviews', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(reviewsJSON)
        }, 200)
    })
});

export const getReviewById = async (reviewId: number): Promise<IReview | null> => {
    const reviews: IReview[] = reviewsJSON
  
    const foundReview = reviews.find((review) => review.reviewId === reviewId);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundReview || null);
      }, 200);
    });
};

export const getReviewsByCompanyId = async (companyId: number): Promise<IReview[]> => {
    const reviews: IReview[] = reviewsJSON
    const foundReviews = reviews.filter((review) => review.companyId === companyId);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundReviews);
      }, 200);
    });
};

export const getReviewsByUserId = async (userId: number): Promise<IReview[]> => {
    const reviews: IReview[] = reviewsJSON
    const foundReviews = reviews.filter((review) => review.userId === userId);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundReviews);
      }, 200);
    });
};

export const addReview = createAsyncThunk<IReview, IReview>('reviews/addReview', async (reviewObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(reviewObj)
        }, 200)
    })
});

export const deleteReview = createAsyncThunk<IReview, IReview>('reviews/deleteReview', async (reviewObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(reviewObj)
        }, 200)
    })
});