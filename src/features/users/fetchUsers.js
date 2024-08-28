import usersJSON from '../../data/database/users.json'



export const fetchUsers = async () => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(usersJSON)
        }, 200)
    })
};

export const getUserById = async (userId) => {
    const users = usersJSON
  
    const foundUser = users.find((user) => user.id === userId);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundUser || null);
      }, 200);
    });
};

export const getUserByEmail = async (email) => {
    const users = usersJSON
    const foundUser = users.find((user) => user.email === email);
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundUser || null);
      }, 200);
    });
};

export const addUser = async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
};

export const deleteUser = async (userObj) => {
    return await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(userObj)
        }, 200)
    })
};