import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";

export async function isAuthenticated() {
    const sessionCookie = (await cookies()).get('session')?.value;
    if (!sessionCookie)
        return false;

    const session = await decrypt(sessionCookie);
    return !!session;
}