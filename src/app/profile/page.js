'use client'

import { deleteSession } from "@/app/lib/session";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useFetchUser from "@/hooks/use-fetch-user";
import { useQueryClient } from "@tanstack/react-query";

const Profile = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { userData } = useFetchUser();

    const onSubmit = async () => {
        await deleteSession();
        queryClient.invalidateQueries(['authStatus']);
        router.push('/login');
    }

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