import Axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthenticatedUser, AuthCredentials } from './authTypes';

const API_URL = '/api/auth';

/**
 * Authenticates a user with the provided credentials.
 * 
 * @param {AuthCredentials} credentials - The authentication credentials (e.g., username and password).
 * @returns {Promise<AuthenticatedUser>} - A promise that resolves to the authenticated user data.
 * @throws {AxiosError | Error} - Throws an error if the authentication fails.
 */
export const authenticateUser = async (credentials: AuthCredentials): Promise<AuthenticatedUser> => {
    try {
        const response: AxiosResponse<AuthenticatedUser> = await Axios.post(`${API_URL}/login`, credentials);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Authentication failed with status code: ${response.status}`);
        }
    } catch (error) {
        if (Axios.isAxiosError(error)) {
            throw new AxiosError(`Axios error: ${error.message}`);
        } else {
            throw new Error("An error occurred while authenticating the user");
        }
    }
};

/**
 * Retrieves the currently authenticated user.
 * 
 * @returns {Promise<AuthenticatedUser>} - A promise that resolves to the current authenticated user data.
 * @throws {AxiosError | Error} - Throws an error if the request to get the current user fails.
 */
export const getCurrentUser = async (): Promise<AuthenticatedUser> => {
    try {
        const response: AxiosResponse<AuthenticatedUser> = await Axios.get(`${API_URL}/current-user`);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to get user with status code: ${response.status}`);
        }
    } catch (error) {
        if (Axios.isAxiosError(error)) {
            throw new AxiosError(`Axios error: ${error.message}`);
        } else {
            throw new Error("An error occurred while getting the current user");
        }
    }
};

/**
 * Logs out the currently authenticated user.
 * 
 * @returns {Promise<void>} - A promise that resolves when the user is successfully logged out.
 * @throws {AxiosError | Error} - Throws an error if the logout request fails.
 */
export const logoutUser = async (): Promise<void> => {
    try {
        await Axios.get(`${API_URL}/logout`);
    } catch (error) {
        if (Axios.isAxiosError(error)) {
            throw new AxiosError(`Axios error: ${error.message}`);
        } else {
            throw new Error("An error occurred while logging out the user");
        }
    }
};