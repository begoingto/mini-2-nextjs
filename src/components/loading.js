'use client'
import React from 'react';
import {Spinner} from "flowbite-react";

function Loading() {
    return (
        <div className={"flex min-h-screen flex-col items-center justify-center"}>
            <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
    );
}

export default Loading;