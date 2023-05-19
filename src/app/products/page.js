import React from 'react';
import {GetProducts} from "@/app/products/GetProducts";

function Products(props) {
    return (
        <div className="my-4">
            <GetProducts />
        </div>
    );
}

export default Products;