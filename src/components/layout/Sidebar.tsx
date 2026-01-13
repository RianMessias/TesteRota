import {
    LayoutDashboard,
    Bell,
    Map as MapIcon,
    Truck,
    User,
    Navigation,
    MapPin,
    Settings,
    ClipboardList,
    FileBarChart,
    Users,
    ShieldCheck,
    PanelLeftClose
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/" },
    { label: "Alertas", icon: Bell, href: "/alerts" },
    { label: "Viagens", icon: Navigation, href: "/trips" },
    { label: "Veículos", icon: Truck, href: "/vehicles" },
    { label: "Motoristas", icon: User, href: "/drivers" },
    { label: "Rota", icon: MapIcon, href: "/routes" },
    { label: "Lugares", icon: MapPin, href: "/places" },
    { label: "Configurações", icon: Settings, href: "/settings" },
    { label: "CheckList", icon: ClipboardList, href: "/checklist" },
    { label: "Relatórios", icon: FileBarChart, href: "/reports" },
    { label: "Perfis", icon: ShieldCheck, href: "/profiles" },
    { label: "Usuarios", icon: Users, href: "/users" },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="sidebar-container">
            <div className="p-6 flex items-center justify-between">
                <h1 className="text-xl font-bold text-white tracking-wider">
                    ROTA <span className="text-gray-400">361°</span>
                </h1>
                <button className="text-gray-400 hover:text-white">
                    <PanelLeftClose size={20} />
                </button>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname === item.href || (item.href === '/vehicles' && location.pathname === '/'); // Hack for default
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
                                isActive
                                    ? "bg-accent text-white"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                            )}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
