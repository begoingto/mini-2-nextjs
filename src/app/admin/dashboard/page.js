import React from 'react';
import {desc} from "@/base/siteConfig";

export const metadata = {
    title: 'Dashboard',
    description: desc,
    openGraph:{
        title: 'Dashboard',
        description: desc,
        images: [
            {
                url: "/og-image.jpg",
                width: 800,
                height: 600,
            },
        ]
    },
    twitter: {
        title: {
            template: 'Dashboard'
        },
        description: desc,
        images: ["/og-image.jpg"],
    }
}

function Dashboard(props) {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;