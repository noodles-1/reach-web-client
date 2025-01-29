import { createSession } from "@/app/lib/session";
import bcrypt from "bcryptjs";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function signup(formValues) {
    const { firstName, lastName, email, password } = formValues;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const response = await fetch(`${SERVER_URL}/user/create-user`, {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password: hashedPassword }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok)
            throw new Error();
        const user = await response.json();
        await createSession(user[0].id);
    }
    catch (err) {
        return {
            message: "An error occurred when creating an account: " + err
        };
    }
}

export async function login(formValues) {
    const { email, password } = formValues;

    try {
        const response = await fetch(`${SERVER_URL}/user/check-password`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        if (!result.isVerified)
            return false
        
        await createSession(result.id);
        return true
    }
    catch (err) {
        return false
    }
}