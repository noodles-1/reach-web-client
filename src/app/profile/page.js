'use client'

import { useState, useEffect } from "react";

import { deleteSession } from "@/app/lib/session";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const Profile = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [userData, setUserData] = useState(null);

    const onSubmit = async () => {
        await deleteSession();
        queryClient.invalidateQueries(['authStatus']);
        router.push('/login');
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`${SERVER_URL}/user`, {
                credentials: 'include'
            });
            const data = await response.json()
            setUserData(data[0]);
        };

        fetchUserData();
    }, []);

    return (
        <>
            <p className="text-sm font-semibold text-muted-foreground"> Your profile </p>
            {userData && <h1 className="text-4xl font-semibold"> {userData.full_name} </h1>}
            <form action={onSubmit}>
                <Button type="submit"> Logout </Button>
            </form>
        </>
    );
}
 
export default Profile;