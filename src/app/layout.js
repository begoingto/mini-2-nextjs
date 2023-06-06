'use client'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Inter} from 'next/font/google'
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
import {desc} from "@/base/siteConfig";
import {usePathname} from "next/navigation";
import ProviderRedux from '@/redux/ProviderRedux';

const inter = Inter({subsets: ['latin']})



const metadata = {
    title: {
        template: '%s - BEGOINGTO'
    },
    description: desc
}


export default function RootLayout({children}) {

    const pathname= usePathname();

    return (
        <html lang="en">
            <body className={inter.className + " dark:bg-gray-900 dark:text-white"}>
                <ProviderRedux>
                    <MenuComponent />
                    <main className={ !pathname.includes('admin') ? "max-w-screen-xl mx-auto" : ""}>
                            {children}
                    </main>
                    <FooterComponent />
                </ProviderRedux>
            </body>
        </html>
    )
}
