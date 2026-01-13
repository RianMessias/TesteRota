import type { Vehicle } from "../../types/vehicle";
import { cn } from "../../lib/utils";

interface VehicleTableProps {
    data: Vehicle[];
    isLoading: boolean;
}

export function VehicleTable({ data, isLoading }: VehicleTableProps) {
    if (isLoading) {
        return <div className="p-8 text-center text-gray-400">Carregando veículos...</div>;
    }

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
                                <td className="px-6 py-4 text-sm text-gray-400">{vehicle.fleetNumber || "-"}</td>
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
