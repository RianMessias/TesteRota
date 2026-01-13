import {
    User,
    MapPin,
    Settings,
    ClipboardList,
    FileBarChart,
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

const AlertIcon = ({
    size = 19,
    className,
}: {
    size?: number | string;
    className?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M7.01 19.51C7.01 20.61 7.9 21.5 9 21.5C10.1 21.5 10.99 20.61 10.99 19.51H7.01ZM9 4.5C11.76 4.5 14 6.74 14 9.5V16.5H4V9.5C4 6.74 6.24 4.5 9 4.5ZM9 0C8.17 0 7.5 0.67 7.5 1.5V2.67C4.36 3.35 2 6.15 2 9.5V15.5L0 17.5V18.5H18V17.5L16 15.5V9.5C16 6.15 13.64 3.35 10.5 2.67V1.5C10.5 0.67 9.83 0 9 0ZM8 6.5H10V10.5H8V6.5ZM8 12.5H10V14.5H8V12.5Z"
            fill="currentColor"
        />
    </svg>
);

const ViagensIcon = ({
    size = 19,
    className,
}: {
    size?: number | string;
    className?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M16 14V11H14V14H11V16H14V19H16V16H19V14H16Z" fill="currentColor" />
        <path d="M16 0H14V9H16V0Z" fill="currentColor" />
        <path d="M2 0H0V16H2V0Z" fill="currentColor" />
        <path d="M9 0H7V4H9V0Z" fill="currentColor" />
        <path d="M9 6H7V10H9V6Z" fill="currentColor" />
        <path d="M9 12H7V16H9V12Z" fill="currentColor" />
    </svg>
);

const VeiculosIcon = ({
    size = 19,
    className,
}: {
    size?: number | string;
    className?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M19 4H16V0H2C0.9 0 0 0.9 0 2V13H2C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H22V8L19 4ZM18.5 5.5L20.46 8H16V5.5H18.5ZM5 14C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13C6 13.55 5.55 14 5 14ZM7.22 11C6.67 10.39 5.89 10 5 10C4.11 10 3.33 10.39 2.78 11H2V2H14V11H7.22ZM17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z" fill="currentColor" />
    </svg>
);

const RotasIcon = ({
    size = 19,
    className,
}: {
    size?: number | string;
    className?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g clipPath="url(#clip0_7583_10304)">
            <path d="M18 4L14 8H17V15C17 16.1 16.1 17 15 17C13.9 17 13 16.1 13 15V8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8V15H2L6 19L10 15H7V8C7 6.9 7.9 6 9 6C10.1 6 11 6.9 11 8V15C11 17.21 12.79 19 15 19C17.21 19 19 17.21 19 15V8H22L18 4Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_7583_10304">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const UsuariosIcon = ({
    size = 19,
    className,
}: {
    size?: number | string;
    className?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M6.5625 6.75C8.37187 6.75 9.84375 5.23607 9.84375 3.375C9.84375 1.51393 8.37187 0 6.5625 0C4.75313 0 3.28125 1.51393 3.28125 3.375C3.28125 5.23607 4.75313 6.75 6.5625 6.75ZM6.5625 1.92857C7.34062 1.92857 7.96875 2.57464 7.96875 3.375C7.96875 4.17536 7.34062 4.82143 6.5625 4.82143C5.78438 4.82143 5.15625 4.17536 5.15625 3.375C5.15625 2.57464 5.78438 1.92857 6.5625 1.92857ZM6.60938 11.5714H2.59687C3.525 11.0893 5.12813 10.6071 6.5625 10.6071C6.66563 10.6071 6.77813 10.6168 6.88125 10.6168C7.2 9.91286 7.75312 9.33429 8.41875 8.87143C7.73437 8.74607 7.0875 8.67857 6.5625 8.67857C4.36875 8.67857 0 9.80679 0 12.0536V13.5H6.5625V12.0536C6.5625 11.8896 6.58125 11.7257 6.60938 11.5714ZM13.5938 9.16071C11.8687 9.16071 8.4375 10.1346 8.4375 12.0536V13.5H18.75V12.0536C18.75 10.1346 15.3188 9.16071 13.5938 9.16071ZM14.7281 7.40571C15.4406 6.99107 15.9375 6.21 15.9375 5.30357C15.9375 3.97286 14.8875 2.89286 13.5938 2.89286C12.3 2.89286 11.25 3.97286 11.25 5.30357C11.25 6.21 11.7469 6.99107 12.4594 7.40571C12.7969 7.59857 13.1812 7.71429 13.5938 7.71429C14.0063 7.71429 14.3906 7.59857 14.7281 7.40571Z"
            fill="currentColor"
        />
    </svg>
);

const NAV_ITEMS = [
    { label: "Dashboard", icon: DashboardIcon, href: "/" },
    { label: "Alertas", icon: AlertIcon, href: "/alerts" },
    { label: "Viagens", icon: ViagensIcon, href: "/trips" },
    { label: "Veículos", icon: VeiculosIcon, href: "/vehicles" },
    { label: "Motoristas", icon: User, href: "/drivers" },
    { label: "Rota", icon: RotasIcon, href: "/routes" },
    { label: "Lugares", icon: MapPin, href: "/places" },
    { label: "Configurações", icon: Settings, href: "/settings" },
    { label: "CheckList", icon: ClipboardList, href: "/checklist" },
    { label: "Relatórios", icon: FileBarChart, href: "/reports" },
    { label: "Perfis", icon: ShieldCheck, href: "/profiles" },
    { label: "Usuarios", icon: UsuariosIcon, href: "/users" },
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
