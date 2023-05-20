import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Inter} from 'next/font/google'
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
import {desc} from "@/base/siteConfig";
import {Suspense} from "react";
import Loading from "@/app/loading";
import {usePathname} from "next/navigation";

const inter = Inter({subsets: ['latin']})



export const metadata = {
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
                <MenuComponent />
                <main className={ !pathname.includes('admin') ? "max-w-screen-xl mx-auto" : ""}>
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </main>
                <FooterComponent />
            </body>
        </html>
    )
}
