import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; 

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "BOUTEN-E Waste Management Dashboard",
    description: "Enhancing Waste Management Practices at Arellano University - Jose Rizal Campus.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] p-4 sm:p-16`}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full md:w-[70%]">
                        <SidebarTrigger className="md:hidden py-6" />
                        {children}
                    </main>
                </SidebarProvider>
                <Analytics />
            </body>
        </html>
    );
}
