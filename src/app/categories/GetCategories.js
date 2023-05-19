import React from "react";
import {getCategories} from "@/data/Categories";
import CardUser from "@/components/CardUser";
import CategoryComponent from "@/app/categories/CategoryComponent";

export async function GetCategories() {

    const categories = await getCategories();

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map(item => {
                return (
                    <li key={item.id}>
                        <CategoryComponent id={item.id} name={item.name} image={item.image} />
                    </li>
                )
            })}
        </ul>
    );
}