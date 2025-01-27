'use client'

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
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "About",
        url: "/about",
        icon: Info,
    },
    {
        title: "FAQs",
        url: "/faqs",
        icon: CircleHelp
    }
]

export function AppSidebar() {
    const pathname = usePathname();
    const { setOpenMobile } = useSidebar();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader className="font-semibold my-8 sm:my-4"> BOUTEN-E - Waste Management </SidebarHeader>
                    <Separator className="mb-4"/>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url} onClick={() => setOpenMobile(false)}>
                                        <item.icon className={pathname === item.url ? 'stroke-[3px]' : ''}/>
                                        <span className={pathname === item.url ? 'font-semibold' : ''}> {item.title} </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
