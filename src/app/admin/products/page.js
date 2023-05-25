import React from 'react';
import FormCreate from "@/app/admin/products/FormCreate";
import {desc} from "@/base/siteConfig";


export const metadata = {
    title: 'Product Management',
    description: desc,
    openGraph:{
        title: 'Product Management',
        description: desc,
        images: [
            {
                url: "/og-image.jpg",
                width: 800,
                height: 600,
            },
        ]
    },
}

export default function Product(){
    return (
        <>
            <FormCreate />
        </>
    )
}
