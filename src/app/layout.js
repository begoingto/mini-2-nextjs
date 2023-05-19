'use client'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Inter} from 'next/font/google'
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
import {desc} from "@/base/siteConfig";

const inter = Inter({subsets: ['latin']})



export const metadata = {
    title: {
        template: '%s - BEGOINGTO'
    },
    description: desc
}


export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className + " dark:bg-gray-900 dark:text-white"}>
                <MenuComponent />
                <main className="max-w-screen-xl mx-auto ">
                    {children}
                </main>
                <FooterComponent />
            </body>
        </html>
    )
}
