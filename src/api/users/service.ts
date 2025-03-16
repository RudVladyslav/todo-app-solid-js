
import { api } from "../api-instance";
import { User } from "./types";

/**
 * Get user by email
 * @param {string} email - The email of the user
 * @returns {Promise<User | null>} - The user object or null if not found
 */
export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const response = await api.get<User[]>(`/users`, {
      params: { email },
    });

    return response.data.length > 0 ? response.data[0] : null; // Return the first matching user
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};


/**
 * Add a new user to the JSON server
 * @param user - User data to be added { name, email }
 * @returns The newly created user
 */
export const createUser = async (user: Omit<User, 'id'>): Promise<User | null> => {
  try {
    const response = await api.post<User>("/users", user);
    return response.data; // Return the created user
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};