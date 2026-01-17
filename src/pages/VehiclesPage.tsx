import { useState } from "react";
import { useVehicles, useVehicleLocations } from "../hooks/useVehicles";
import { VehicleTable } from "../components/vehicles/VehicleTable";
import { VehicleMap } from "../components/vehicles/VehicleMap";
import { CreateVehicleModal } from "../components/vehicles/CreateVehicleModal";

export function VehiclesPage() {
    // Esse estado guarda se estamos vendo "Rastreados" ou "Outros"
    const [filterType, setFilterType] = useState<"tracked" | "other">("tracked");

    // Esse estado guarda o texto que o usuário digita na barra de busca
    const [search, setSearch] = useState("");

    // Esse estado controla qual página da lista estamos vendo no momento
    const [page, setPage] = useState(1);

    // Esse estado controla se a janelinha (modal) de cadastro está aberta
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Aqui usamos o hook para buscar os veículos de acordo com os filtros
    const { data: vehiclesData, isLoading: isLoadingVehicles } = useVehicles({
        page: page, // informamos a página atual
        perPage: 10, // limite de 10 por página
        type: filterType === "tracked" ? "tracked" : "notTracked",
        filter: search || undefined
    });

    // Aqui buscamos as localizações para mostrar os pontos no mapa
    const { data: locationsData } = useVehicleLocations();

    return (
        <div className="space-y-6">
            <div className="list-controls-container">
                <div className="flex items-center gap-32 w-full md:w-auto mb-4 md:mb-0">
                    <h2 className="text-white font-bold text-lg">Lista</h2>

                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${filterType === 'tracked' ? 'border-accent' : 'border-gray-500 group-hover:border-gray-400'}`}>
                                {filterType === 'tracked' && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                            </div>
                            <input
                                type="radio"
                                name="filterType"
                                checked={filterType === 'tracked'}
                                onChange={() => {
                                    setFilterType('tracked');
                                    setPage(1);
                                }}
                                className="hidden"
                            />
                            <span className={`${filterType === 'tracked' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'} font-medium`}>Rastreados</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${filterType === 'other' ? 'border-accent' : 'border-gray-500 group-hover:border-gray-400'}`}>
                                {filterType === 'other' && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                            </div>
                            <input
                                type="radio"
                                name="filterType"
                                checked={filterType === 'other'}
                                onChange={() => {
                                    setFilterType('other');
                                    setPage(1);
                                }}
                                className="hidden"
                            />
                            <span className={`${filterType === 'other' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'} font-medium`}>Outros</span>
                        </label>
                    </div>
                </div>

                <div className="flex w-full md:w-auto gap-3">
                    <div className="relative flex-1 md:w-80">
                        <input
                            type="text"
                            placeholder="Buscar por placa ou frota"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            className="w-full bg-[#02121c] border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-gray-500 text-sm"
                        />
                    </div>

                    <button
                        onClick={() => {
                            console.log("Abrindo o modal de novo veículo...");
                            setIsModalOpen(true);
                        }}
                        className="btn-novo"
                    >
                        Novo
                    </button>
                </div>
            </div>

            <CreateVehicleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {filterType === "tracked" && (
                <div className="map-card p-6 flex flex-col">
                    <h3 className="text-white font-bold pl-1 mb-4">Mapa rastreador</h3>
                    <div className="flex-1 rounded-lg overflow-hidden">
                        <VehicleMap locations={locationsData || []} />
                    </div>
                </div>
            )}

            <div className="w-full pb-6">
                <VehicleTable
                    data={vehiclesData?.data || []}
                    isLoading={isLoadingVehicles}
                    currentPage={page}
                    totalPages={vehiclesData?.meta.lastPage || 0}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}
