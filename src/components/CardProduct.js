'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {moneyFormat} from "@/base/siteConfig";
import {Badge} from "flowbite-react";

export default function CardProduct({image, title, description, id, price, category}) {
    return (
        <div
            className="max-w-sm border dark:border-gray-600 rounded-lg shadow dark:text-white"
        >
            <a href="#">
                <Image width={100} height={100} className="rounded-t-lg h-80 w-full" src={image ? image : "https://bit.ly/44Oio4m"} alt="product"/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        {title ? title : "Default title product"}
                    </h5>
                </a>
                <Badge color="indigo" className={"w-fit"}>
                    {category.name}
                </Badge>
                <p className="mb-3 font-normal">{ description ? description.substring(0,50).concat("...") : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." }</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <i className="bi bi-star-fill text-yellow-200"></i>
                    <i className="bi bi-star-fill text-yellow-200"></i>
                    <i className="bi bi-star-fill text-yellow-200"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-3 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">3.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{moneyFormat.format(price ? price : 599)}</span>
                    <Link href={"/products/"+ id}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    )
}