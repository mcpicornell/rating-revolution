import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../interfaces';
import usersJSON from '../../data/database/users.json'



export const fetchUsers = createAsyncThunk<IUser[], void>('users/fetchUsers', async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(usersJSON)
        }, 200)
    })
});

export const getUserById = async (userId: number): Promise<IUser | null> => {
    const users: IUser[] = usersJSON
  
    const foundUser = users.find((user) => user.userId === userId);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundUser || null);
      }, 200);
    });
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    const users: IUser[] = usersJSON
    const foundUser = users.find((user) => user.email === email);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundUser || null);
      }, 200);
    });
};

export const addUser = createAsyncThunk<IUser, IUser>('users/addUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});

export const deleteUser = createAsyncThunk<IUser, IUser>('users/deleteUser', async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
});