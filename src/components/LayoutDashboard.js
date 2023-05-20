import React from 'react';
import SideBar from "@/components/Sidebar";

function LayoutDashboard({children}) {
    return (
        <>
            <SideBar content={children} />
        </>
    );
}

export default LayoutDashboard;