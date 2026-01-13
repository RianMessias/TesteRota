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
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="table-header-row">
                            <th className="table-header-cell">Placa</th>
                            <th className="table-header-cell">Frota</th>
                            <th className="table-header-cell">Tipo</th>
                            <th className="table-header-cell">Modelo</th>
                            <th className="px-6 text-xs font-bold text-white uppercase tracking-wider text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {(!data || data.length === 0) ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                                    Nenhum veículo encontrado.
                                </td>
                            </tr>
                        ) : data.map((vehicle) => (
                            <tr key={vehicle.id} className="hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-300">{vehicle.plate}</td>
                                <td className="px-6 py-4 text-sm text-gray-400">{vehicle.fleet || "-"}</td>
                                <td className="px-6 py-4 text-sm text-gray-400 capitalize">{vehicle.type}</td>
                                <td className="px-6 py-4 text-sm text-gray-400">{vehicle.model}</td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={cn(
                                            "px-3 py-1 text-xs font-medium rounded-full",
                                            getStatusColor(vehicle.status)
                                        )}
                                    >
                                        {formatStatus(vehicle.status)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 0 && (
                <div className="flex items-center justify-between px-6 py-4 border-t border-border mt-2">
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

function getStatusColor(status: string) {
    const s = status.toLowerCase();
    if (s.includes("viagem") || s === 'active') return "bg-green-500/10 text-green-500 border border-green-500/20";
    if (s.includes("manutenção") || s === 'maintenance') return "bg-red-500/10 text-red-500 border border-red-500/20";
    if (s.includes("disponível") || s === 'available') return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
    return "bg-blue-500/10 text-blue-500 border border-blue-500/20";
}

function formatStatus(status: string) {
    if (status === 'active') return 'Em viagem';
    if (status === 'maintenance') return 'Em manutenção';
    return status;
}
