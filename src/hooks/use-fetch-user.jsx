import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const useFetchUser = () => {
    const [userData, setUserData] = useState(null);

    const { data: authData, isFetching: isAuthFetching } = useQuery({
        queryKey: ['authStatus'],
        queryFn: () => fetch('/api/auth/status').then(res => res.json())
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`${SERVER_URL}/user`, {
                credentials: 'include'
            });
            const data = await response.json()
            setUserData(data[0]);
        };

        if (authData && authData.authenticated)
            fetchUserData();
        else
            setUserData(null);
    }, [authData]);

    return { authData, isAuthFetching, userData };
}
 
export default useFetchUser;