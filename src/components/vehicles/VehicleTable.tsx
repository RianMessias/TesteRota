import type { Vehicle } from "../../types/vehicle";
import { cn } from "../../lib/utils";

interface VehicleTableProps {
    data: Vehicle[];
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function VehicleTable({
    data,
    isLoading,
    currentPage,
    totalPages,
    onPageChange
}: VehicleTableProps) {
    if (isLoading) {
        return <div className="p-8 text-center text-gray-400">Carregando veículos...</div>;
    }

    // Função para renderizar os números das páginas com lógica de reticências
    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={cn(
                            "w-8 h-8 flex items-center justify-center rounded transition-colors text-sm",
                            currentPage === i
                                ? "bg-accent text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        )}
                    >
                        {i}
                    </button>
                );
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                pages.push(<span key={i} className="text-gray-600">...</span>);
            }
        }
        return pages;
    };

    return (
        <div className="table-card">
            {/* Área de rolagem para os dados da tabela */}
            <div className="flex-1 overflow-auto">
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-[#001622] z-10">
                        <tr className="table-header-row">
                            <th className="table-header-cell">Placa</th>
                            <th className="table-header-cell">Frota</th>
                            <th className="table-header-cell">Tipo</th>
                            <th className="table-header-cell">Modelo</th>
                            <th className="table-header-cell">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!data || data.length === 0) ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                                    Nenhum veículo encontrado.
                                </td>
                            </tr>
                        ) : data.map((vehicle) => (
                            <tr key={vehicle.id} className="table-row">
                                <td className="table-data-cell text-gray-200">{vehicle.plate}</td>
                                <td className="table-data-cell text-gray-400 font-mono">{vehicle.fleet || "000000"}</td>
                                <td className="table-data-cell text-gray-400 capitalize">{vehicle.type}</td>
                                <td className="table-data-cell text-gray-400">{vehicle.model}</td>
                                <td className="table-data-cell text-gray-400">
                                    {formatStatus(vehicle.status)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Controles de Paginação - Sempre visíveis no final do card */}
            {totalPages > 0 && (
                <div className="pagination-container">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Anterior
                    </button>

                    <div className="flex items-center gap-2">
                        {renderPageNumbers()}
                    </div>

                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Próxima
                    </button>
                </div>
            )}
        </div>
    );
}

// Formata o status para o padrão brasileiro
function formatStatus(status: string) {
    const s = status.toLowerCase();
    if (s === 'active' || s.includes("viagem")) return 'Em viagem';
    if (s === 'maintenance' || s.includes("manutenção")) return 'Em manutenção';
    if (s === 'available' || s.includes("disponível")) return 'Disponível';
    return status;
}
