'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "@/app/actions/auth";
import { useRouter } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email input cannot be empty." })
        .email({ message: "Not a valid email." })
        .refine(async (e) => {
            const response = await fetch(`${SERVER_URL}/user/check-email/${e}`);
            const data = await response.json();
            return data.length === 1;
        }, { message: "Account for this email does not exist." } ),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." }),
});

const Login = () => {
    const [passwordStatus, setPasswordStatus] = useState(null);
    const router = useRouter();
    const queryClient = useQueryClient();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    
    const onSubmit = async (values) => {
        const result = await login(values);
        if (result) {
            queryClient.invalidateQueries(['authData']);
            setPasswordStatus(null);
            router.push('/dashboard');
        }
        else
            setPasswordStatus('Incorrect email or password.')
    }

    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-semibold"> Login </h1>
            <p> Login to your account </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-5 max-w-[400px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> Email </FormLabel>
                                <FormControl>
                                    <Input placeholder="example@email.com" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> Password </FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="******" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {passwordStatus && <p className="text-destructive text-sm font-medium"> {passwordStatus} </p>}
                    <Button type="submit" className="w-full sm:w-auto"> Login </Button>
                </form>
            </Form>
        </div>
    );
}
 
export default Login;