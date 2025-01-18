"use client";

import { Toolbar } from "./toolbar";


interface WorkSpaceLayoutProps {
    children: React.ReactNode;
};

const WorkSpaceLayout = ({ children}: WorkSpaceLayoutProps) => {
    return (
        <div className="h-full">
            <Toolbar />
            {children}
        </div>
    );
};

export default WorkSpaceLayout;