import React from 'react';
import {GetCategories} from "@/app/categories/GetCategories";

function Category() {
    return (
        <div className={"my-4"}>
            <GetCategories />
        </div>
    );
}

export default Category;