'use client'
import React from 'react';
import {getCategoryById} from "@/data/Categories";
import {getProductsByCategory} from "@/data/Products";
import CardProduct from "@/components/CardProduct";
import Image from "next/image";

async function CategoryDetail({params}) {
    const { id } = params
    const category = await getCategoryById(id);

    console.log(category)

    const products = await getProductsByCategory(id);


    return (
        <div>
            <div className="flex items-center bg-white border-0 border-gray-200 rounded-lg shadow md:max-w-full dark:border-gray-700 dark:bg-gray-800">
                <Image width={100} height={100} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
                     src={category.image} alt="thumbnail" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            {category.name }
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
            </div>

            <h1 className="font-bold text-pink-700 text-4xl my-3 text-center rounded border-b-2 border-gray-500 pb-2">
                Fetch Products
                <i className="bi bi-product"></i>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product,i) =>  <CardProduct
                    key={i}
                    image={product.images[product.images.length-1]}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                    id={product.id}
                />)}
            </div>
        </div>
    );
}

export default CategoryDetail;