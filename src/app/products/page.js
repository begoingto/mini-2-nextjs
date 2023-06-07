import React from 'react';
import {GetProducts} from "@/app/products/GetProducts";


export default function Products() {
    return (
        <>
            <div className={"fixed bottom-10 right-10"}>
                <button
                    type="button"
                    className="text-white w-14 h-14 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
                    <i className="bi bi-plus-lg text-2xl"></i>
                </button>
            </div>
            <div className="my-4">
                <GetProducts />
            </div>
        </>

    );
}
