import React from "react";
import {getCategories} from "@/data/Categories";
import CardCategory from "@/components/CardCategory";

export async function GetCategories() {

    const categories = await getCategories();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map(item => <CardCategory key={item.id} name={item.name} image={item.image} />)}
        </div>
    );
}