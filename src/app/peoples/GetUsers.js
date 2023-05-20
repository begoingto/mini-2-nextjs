'use client'
import React from "react";
import {getUsers} from "@/data/Users";
import CardUser from "@/components/CardUser";

export async function GetUsers() {

    const users = await getUsers();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {users.map(item => <CardUser key={item.id} id={item.id} name={item.name} image={item.avatar} />)}
        </div>
    );
}