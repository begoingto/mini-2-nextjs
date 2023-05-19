import React from "react";
import {getUsers} from "@/data/Users";
import CardCategory from "@/components/CardCategory";

export async function GetUsers() {

    const users = await getUsers();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map(item => <CardCategory key={item.id} name={item.name} image={item.avatar} />)}
        </div>
    );
}