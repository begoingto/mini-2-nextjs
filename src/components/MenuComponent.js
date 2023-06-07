'use client'
import React from 'react';
import {Badge, Button, DarkThemeToggle, Flowbite, Navbar} from 'flowbite-react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSelector} from 'react-redux';
import {selectCart} from '@/redux/features/cart/cartSlice';

function MenuComponent() {
    const pathname= usePathname();
    if (pathname.includes("admin")) return null

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cart = useSelector(selectCart);

    return (
        <Navbar
            fluid={true}
            rounded={true}
            className={"max-w-screen-xl mx-auto dark:bg-gray-900 sm:px-0 sticky top-0 left-0 border-b-2 border-gray-500 z-10"}
        >
            <Navbar.Brand href="#" as={Link} className={"border-b-2 border-pink-700"}>
                <span className="self-center whitespace-nowrap text-xl dark:text-white mb-1 font-black">BEGOINGTO</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Flowbite theme={{dark:true}}>
                    <DarkThemeToggle />
                </Flowbite>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    as={Link}
                    href="#"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} href="/admin/dashboard">
                    <i className="bi bi-speedometer2"></i> Admin
                </Navbar.Link>
                <Navbar.Link as={Link} href="/about-us">
                    <i className="bi bi-file-earmark-person"></i> About Us
                </Navbar.Link>
                <Navbar.Link as={Link} href="/products">
                    <i className="bi bi-tropical-storm"></i> Products
                </Navbar.Link>
                <Navbar.Link as={Link} href="/carts" className={"flex justify-center"}>
                    <i className="bi bi-cart text-xl"></i>
                    <Badge color="success" className={"rounded-full p-1"}>
                        {cart.length}
                    </Badge>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MenuComponent;