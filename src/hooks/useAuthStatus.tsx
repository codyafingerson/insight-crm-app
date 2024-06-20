import { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';

export default function useAuthStatus() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

    const user = useAppSelector((state) => state.auth.user);

    useEffect(() => {
        if (user) {
            setCheckingAuth(false);

            if(user.isAdmin) {
                setIsAdmin(true);
            }

            setIsAuthenticated(true);
        } else {
            setCheckingAuth(false);
            setIsAuthenticated(false);
        }
    }, [user]);

    return { isAuthenticated, isAdmin, checkingAuth};
}