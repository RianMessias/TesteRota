import { Bell, Search } from "lucide-react";

// O Header é a barra do topo que mostra o título da página e o perfil do usuário
export function Header() {
    return (
        <header className="header-container">
            <h1 className="text-white font-bold text-xl uppercase tracking-wider">Veículos</h1>

            <div className="flex items-center gap-6">
                {/* Botão de busca (apenas visual por enquanto) */}
                <button
                    onClick={() => console.log("Clicou no botão de busca do header")}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Search size={20} />
                </button>

                {/* Botão de notificações */}
                <button
                    onClick={() => console.log("Clicou no botão de notificações")}
                    className="text-gray-400 hover:text-white transition-colors relative"
                >
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2h-2 bg-red-500 rounded-full border-2 border-sidebar"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
                    {/* Avatar com as iniciais do usuário */}
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs">
                        RM
                    </div>
                </div>
            </div>
        </header>
    );
}
