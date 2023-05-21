import React from 'react';
import Image from "next/image";
import {getProduct} from "@/data/Products";

export async function generateMetadata({ params }) {
    const id = params.id;
    const product = await getProduct(id)
    return {
        title: product.title,
        description: product.description,
        category: product.category.name,
        openGraph: {
            title: product.title,
            description: product.description,
            url: '/',
            siteName: 'BEGOINGTO.ME',
            images: [
                product.images[product.images.length - 1]
            ],
            locale: 'en-US',
            type: 'website',
        },
        twitter: {
            card: 'product_detail',
            title: product.title,
            description: product.description,
            images: [
                product.images[0]
            ],
        }
    };
}

async function Product({params: {id}}) {

    const product = await getProduct(id)

    return (<>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article
                        className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <figure>
                            <Image width={100} height={100} unoptimized className={"w-full"} src={product.images[product.images.length - 1]} alt=""/>
                        </figure>
                        <hr className={"my-3"}/>
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{product.title}</h1>
                        </header>

                        <p>{product.description}</p>
                    </article>
                </div>
            </main>
        </>);
}

export default Product;