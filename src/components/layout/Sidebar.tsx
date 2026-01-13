import {
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

const DashboardIcon = ({ size = 19, className }: { size?: number | string, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_dashboard)">
            <path d="M18.2083 17.4167H3.95833C3.32844 17.4167 2.72435 17.1664 2.27895 16.721C1.83356 16.2756 1.58333 15.6716 1.58333 15.0417V0.791667C1.58333 0.581704 1.49993 0.38034 1.35146 0.231874C1.20299 0.0834075 1.00163 0 0.791667 0C0.581704 0 0.38034 0.0834075 0.231874 0.231874C0.0834075 0.38034 0 0.581704 0 0.791667L0 15.0417C0.00125705 16.0911 0.418698 17.0972 1.16076 17.8392C1.90282 18.5813 2.9089 18.9987 3.95833 19H18.2083C18.4183 19 18.6197 18.9166 18.7681 18.7681C18.9166 18.6197 19 18.4183 19 18.2083C19 17.9984 18.9166 17.797 18.7681 17.6485C18.6197 17.5001 18.4183 17.4167 18.2083 17.4167Z" fill="currentColor" />
            <path d="M4.7526 15.8359C4.96257 15.8359 5.16393 15.7525 5.3124 15.6041C5.46086 15.4556 5.54427 15.2542 5.54427 15.0443V9.5026C5.54427 9.29264 5.46086 9.09128 5.3124 8.94281C5.16393 8.79435 4.96257 8.71094 4.7526 8.71094C4.54264 8.71094 4.34128 8.79435 4.19281 8.94281C4.04435 9.09128 3.96094 9.29264 3.96094 9.5026V15.0443C3.96094 15.2542 4.04435 15.4556 4.19281 15.6041C4.34128 15.7525 4.54264 15.8359 4.7526 15.8359Z" fill="currentColor" />
            <path d="M7.91406 7.91667V15.0417C7.91406 15.2516 7.99747 15.453 8.14594 15.6015C8.2944 15.7499 8.49577 15.8333 8.70573 15.8333C8.91569 15.8333 9.11706 15.7499 9.26552 15.6015C9.41399 15.453 9.4974 15.2516 9.4974 15.0417V7.91667C9.4974 7.7067 9.41399 7.50534 9.26552 7.35687C9.11706 7.20841 8.91569 7.125 8.70573 7.125C8.49577 7.125 8.2944 7.20841 8.14594 7.35687C7.99747 7.50534 7.91406 7.7067 7.91406 7.91667Z" fill="currentColor" />
            <path d="M11.875 10.2917V15.0417C11.875 15.2516 11.9584 15.453 12.1069 15.6015C12.2553 15.7499 12.4567 15.8333 12.6667 15.8333C12.8766 15.8333 13.078 15.7499 13.2265 15.6015C13.3749 15.453 13.4583 15.2516 13.4583 15.0417V10.2917C13.4583 10.0817 13.3749 9.88034 13.2265 9.73187C13.078 9.58341 12.8766 9.5 12.6667 9.5C12.4567 9.5 12.2553 9.58341 12.1069 9.73187C11.9584 9.88034 11.875 10.0817 11.875 10.2917Z" fill="currentColor" />
            <path d="M15.8359 7.1276V15.0443C15.8359 15.2542 15.9193 15.4556 16.0678 15.6041C16.2163 15.7525 16.4176 15.8359 16.6276 15.8359C16.8376 15.8359 17.0389 15.7525 17.1874 15.6041C17.3359 15.4556 17.4193 15.2542 17.4193 15.0443V7.1276C17.4193 6.91764 17.3359 6.71628 17.1874 6.56781C17.0389 6.41935 16.8376 6.33594 16.6276 6.33594C16.4176 6.33594 16.2163 6.41935 16.0678 6.56781C15.9193 6.71628 15.8359 6.91764 15.8359 7.1276Z" fill="currentColor" />
            <path d="M4.75244 7.12308C4.96238 7.12304 5.16371 7.0396 5.31214 6.89113L8.15106 4.05221C8.30195 3.90846 8.50237 3.82828 8.71077 3.82828C8.91917 3.82828 9.11959 3.90846 9.27048 4.05221L10.99 5.77171C11.4354 6.21695 12.0393 6.46708 12.6691 6.46708C13.2989 6.46708 13.9028 6.21695 14.3482 5.77171L18.7705 1.34946C18.9147 1.20015 18.9945 1.00017 18.9927 0.7926C18.9909 0.585028 18.9076 0.386468 18.7608 0.239686C18.6141 0.0929049 18.4155 0.00964618 18.2079 0.00784243C18.0003 0.00603868 17.8004 0.0858343 17.6511 0.230043L13.2288 4.6515C13.0804 4.79992 12.879 4.88329 12.6691 4.88329C12.4592 4.88329 12.2579 4.79992 12.1094 4.6515L10.3899 2.93279C9.94452 2.48755 9.34053 2.23743 8.71077 2.23743C8.081 2.23743 7.47702 2.48755 7.03164 2.93279L4.19273 5.77171C4.08204 5.88243 4.00667 6.02347 3.97614 6.17702C3.94561 6.33056 3.96129 6.48972 4.02119 6.63435C4.0811 6.77899 4.18254 6.90262 4.3127 6.98961C4.44286 7.0766 4.59588 7.12305 4.75244 7.12308Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_dashboard">
                <rect width="19" height="19" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const NAV_ITEMS = [
    { label: "Dashboard", icon: DashboardIcon, href: "/" },
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
