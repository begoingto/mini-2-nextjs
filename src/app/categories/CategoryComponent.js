import React from 'react';
import Link from "next/link";
import Image from "next/image";

function CategoryComponent({id,name,image}) {
    return (
        <Link
            href={`/categories/${id || 1}`}
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
        >
            <div className="h-10 w-10">
                <Image unoptimized width={100} height={100} src={image ? image : "https://bit.ly/44Oio4m"} alt="" className="object-cover rounded-full"/>
            </div>
            <span className="ml-3 flex-1 whitespace-nowrap">{name ? name : "Default Name"}</span>
        </Link>
    );
}

export default CategoryComponent;