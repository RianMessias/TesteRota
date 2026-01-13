import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="layout-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <main className="flex-1 overflow-auto p-0 relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
