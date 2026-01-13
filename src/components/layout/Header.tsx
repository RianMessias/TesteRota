import { Search, Bell } from "lucide-react";

export function Header() {
    return (
        <header className="header-container">
            <h2 className="text-xl font-bold text-white">Veículos</h2>

            <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                    <Search size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
                    <img
                        src="https://github.com/shadcn.png"
                        alt="User"
                        className="w-8 h-8 rounded-full border border-gray-600"
                    />
                </div>
            </div>
        </header>
    );
}
