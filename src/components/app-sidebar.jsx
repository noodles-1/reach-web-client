'use client'

import { useState, useEffect } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutDashboard, Info, CircleHelp } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import { useQuery } from "@tanstack/react-query"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
        auth: false,
    },
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        auth: true,
    },
    {
        title: "About",
        url: "/about",
        icon: Info,
        auth: false,
    },
    {
        title: "FAQs",
        url: "/faqs",
        icon: CircleHelp,
        auth: false,
    }
]

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function AppSidebar() {
    const pathname = usePathname();
    const { setOpenMobile } = useSidebar();
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

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader className="font-semibold my-8 sm:my-4"> BOUTEN-E - Waste Management </SidebarHeader>
                    <Separator className="mb-4"/>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item) => (
                            (!item.auth || (!isAuthFetching && authData.authenticated)) && (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} onClick={() => setOpenMobile(false)}>
                                            <item.icon className={pathname === item.url ? 'stroke-[3px]' : ''}/>
                                            <span className={pathname === item.url ? 'font-semibold' : ''}> {item.title} </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="my-8 sm:my-4 p-[16px]">
                {!isAuthFetching && !authData.authenticated && (
                    <span>
                        <Link href="/login" onClick={() => setOpenMobile(false)} className="text-blue-500 hover:underline">
                            Login
                        </Link>
                        {' '} or {' '}
                        <Link href="/signup" onClick={() => setOpenMobile(false)} className="text-blue-500 hover:underline">
                            Sign-up
                        </Link>
                    </span>
                )}
                {userData && (
                    <Link href="/profile" onClick={() => setOpenMobile(false)}>
                        <Button variant="outline">
                            <h1> Logged in as: </h1>
                            <h1 className="font-semibold"> {userData.full_name} </h1>
                        </Button>
                    </Link>
                )}
            </SidebarFooter>
        </Sidebar>
    )
}
