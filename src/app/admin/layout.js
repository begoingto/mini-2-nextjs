import React, {Suspense} from 'react';
import LayoutDashboard from "@/components/LayoutDashboard";
import Loading from "@/app/admin/loading";

export const metadata = {
    title: {
        template: '%s - Admin BEGOINGTO'
    },
    description: "Begoingto Admin Panel"
}

function DashboardLayout({children}) {
    return (
        <LayoutDashboard>
            {/*<Suspense fallback={<Loading />}>*/}
                {children}
            {/*</Suspense>*/}
        </LayoutDashboard>
    );
}

export default DashboardLayout;