import {
    User,
    FileBarChart,
    PanelLeftClose
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { DashboardIcon } from "../icons/DashboardIcon";
import { LogoRota } from "../icons/LogoRota";
import { Alerta } from "../icons/Alerta";
import { Viagens } from "../icons/Viagens";
import { Veiculos } from "../icons/Veiculos";
import { Motoristas } from "../icons/Motoristas";
import { Rota } from "../icons/Rota";
import { Lugares } from "../icons/Lugares";
import { Configuracoes } from "../icons/Configuracoes";
import { Checklist } from "../icons/Checklist";




const NAV_ITEMS = [
    { label: "Dashboard", icon: DashboardIcon, href: "/" },
    { label: "Alertas", icon: Alerta, href: "/alerts" },
    { label: "Viagens", icon: Viagens, href: "/trips" },
    { label: "Veículos", icon: Veiculos, href: "/vehicles" },
    { label: "Motoristas", icon: Motoristas, href: "/drivers" },
    { label: "Rota", icon: Rota, href: "/routes" },
    { label: "Lugares", icon: Lugares, href: "/places" },
    { label: "Configurações", icon: Configuracoes, href: "/settings" },
    { label: "CheckList", icon: Checklist, href: "/checklist" },
    { label: "Relatórios", icon: FileBarChart, href: "/reports" },
    { label: "Perfis", icon: User, href: "/profiles" },
    { label: "Usuários", icon: User, href: "/users" },
];



export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="sidebar-container flex flex-col">
            {/* Logo */}
            <div className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                    <LogoRota className="h-6 w-auto" />
                </div>

                <button className="text-gray-400 hover:text-white">
                    <PanelLeftClose size={20} />
                </button>
            </div>

            {/* Navegação */}
            <nav className="flex-1 px-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive =
                        location.pathname === item.href ||
                        (item.href === "/vehicles" && location.pathname === "/");

                    const className = `
                        flex items-center gap-3 px-4 py-3 rounded-md transition-colors
                        ${isActive ? "bg-accent text-white" : "text-white hover:bg-gray-800"}
                    `;

                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={className}
                        >
                            <item.icon width={20} height={20} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
