import React from 'react';
import {desc} from "@/base/siteConfig";
import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/chartjs/LineChart';

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
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <BarChart />
                </div>
                <div className="col-span-8">
                    <LineChart />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;