import React from 'react';
import CardProduct from "@/components/CardProduct";
import {getProducts} from "@/data/Products";

export async function GetProducts() {

    const products = await getProducts();

    return (
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
    );
}

