'use client'
import React from 'react';
import {Avatar, DarkThemeToggle, Dropdown, Flowbite, Sidebar} from "flowbite-react";
import {
    BiBuoy,
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards, RiProductHuntLine
} from "react-icons/all";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

function SideBar({content}) {

    const active = "bg-gray-100 dark:bg-gray-700"
    const pathname = usePathname()

    console.log(pathname)

    return (
        <>
            <nav
                className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                                    aria-controls="logo-sidebar" type="button"
                                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <Link href="/" className="flex ml-2 md:mr-24">
                                <Image width={100} height={100} src="https://istad.co/resources/img/logo_md.png" className="h-8 mr-3 w-full"
                                       alt="FlowBite Logo"/>
                                <span
                                    className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">ISTAD</span>
                            </Link>
                        </div>

                        <div className={"flex"}>
                            <Flowbite theme={{dark:true}}>
                                <DarkThemeToggle />
                            </Flowbite>

                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="User settings" img="https://istad.co/resources/img/logo_md.png" rounded={true}/>}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm"> Bonnie Green </span>
                                    <span className="block truncate text-sm font-medium"> name@flowbite.com </span>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            <Sidebar aria-label="Sidebar with content separator example"
                     className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/admin/dashboard"
                            as={Link}
                            icon={HiChartPie}
                            className={pathname.includes("dashboard") ? active : ""}
                        >
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/admin/products"
                            as={Link}
                            icon={RiProductHuntLine}
                            className={pathname.includes("products") ? active : ""}
                        >
                            Product
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiInbox}
                        >
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiUser}
                        >
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiShoppingBag}
                        >
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiArrowSmRight}
                        >
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiTable}
                        >
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={HiChartPie}
                        >
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiViewBoards}
                        >
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={BiBuoy}
                        >
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

            <div className="p-4 sm:ml-64 mt-16">
                {content}
            </div>
        </>
    );
}

export default SideBar;