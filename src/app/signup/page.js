'use client'

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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signup } from "@/app/actions/auth";
import { PasswordInput } from "@/components/ui/password-input";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const capitalize = (name) => {
    return name
        .toLowerCase()
        .replace(/\b\w/g, ch => ch.toUpperCase());
}

const formSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: "Name cannot be empty." })
        .refine(e => !/\d/.test(e) && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e), { message: "First name should only contain letters." })
        .transform(capitalize),
    lastName: z
        .string()
        .min(1, { message: "Name cannot be empty." })
        .refine(e => !/\d/.test(e) && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e), { message: "Last name should only contain letters." })
        .transform(capitalize),
    email: z
        .string()
        .min(1, { message: "Email input cannot be empty." })
        .email({ message: "Not a valid email." })
        .refine(async (e) => {
            const response = await fetch(`${SERVER_URL}/user/check-email/${e}`);
            const data = await response.json();
            return data.length === 0;
        }, { message: "Account for this email already exists." } ),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." }),
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password != confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Passwords do not match.",
            path: ['confirmPassword'],
        });
    }
});

const Signup = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const queryClient = useQueryClient();
    const router = useRouter();

    const onSubmit = async (values) => {
        await signup(values);
        queryClient.invalidateQueries(['authStatus']);
        router.push('/dashboard');
    }

    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-semibold"> Sign-up </h1>
            <p> Create an account </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="py-5 sm:flex gap-5">
                    <section className="space-y-4 flex-1 max-w-[400px]">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> First name </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Juan" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Last name </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Dela Cruz" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                    </section>
                    <section className="mt-4 sm:mt-0 space-y-4 flex-1 max-w-[400px] relative">
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Confirm password </FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="******" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full sm:absolute bottom-0 right-0"> 
                            Sign-in 
                        </Button>
                    </section>
                </form>
            </Form>
        </div>
    );
}
 
export default Signup;