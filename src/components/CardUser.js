import React from 'react';
import Link from "next/link";
import Image from "next/image";

function CardUser({id,name,image}) {
    return (
        <Link href={`/peoples/${id}`} className="flex flex-col iteclassNamenter pb-10 text-center">
            <div className="flex justify-center">
                <Image width={100} height={100} className="w-32 h-32 border-4 border-pink-500 mb-3 rounded-full shadow-lg object-cover" src={ image ? image : "https://bit.ly/44Oio4m"} alt="Bonnie image"/>
            </div>
            <h5 className="mb-1 text-xl text-gray-900 dark:text-white capitalize">
                { name ? name : "Bonnie Green" }
            </h5>
        </Link>
    );
}

export default CardUser;