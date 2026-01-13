import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="header-container">
            {/* Título da página ou seção */}
            <h1 className="text-white font-bold text-xl uppercase tracking-wider">Veículos</h1>

            {/* Ações do cabeçalho (Busca, Notificações, Perfil) */}
            <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-white transition-colors">
                    <Search size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2h-2 bg-red-500 rounded-full border-2 border-sidebar"></span>
                </button>

                {/* Avatar do Usuário */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs">
                        RM
                    </div>
                </div>
            </div>
        </header>
    );
}
