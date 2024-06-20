export interface AuthenticatedUser {
    id: string;
    isActive: boolean;
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}

export interface AuthCredentials {
    username: string;
    password: string;
}