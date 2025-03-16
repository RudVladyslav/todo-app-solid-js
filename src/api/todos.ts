import {api} from "./api-instance";

/**
 * Get all users
 * @returns {Promise<Array>} List of users
 */
export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getUser = async (email: string) => {
  try {
	const response = await api.get(`/users/${email}`);
	return response.data;
  } catch (error) {
	console.error("Error fetching user:", error);
	return null;
  }
};

/**
 * Add a new user
 * @param {Object} user - New user data { name, email }
 * @returns {Promise<Object>} Created user
 */
// export const addUser = async (user) => {
//   try {
//     const response = await api.post("/users", user);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding user:", error);
//     return null;
//   }
// };
