import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import api from "../services/api";
import type { Vehicle, VehicleLocation, PaginatedResponse, ApiResponse, ApiPaginatedContent } from "../types/vehicle";

interface UseVehiclesParams {
    page?: number;
    perPage?: number;
    filter?: string;
    type?: string;
    typeVehicle?: string;
}

export function useVehicles(params: UseVehiclesParams) {
    return useQuery({
        queryKey: ["vehicles", params],
        queryFn: async () => {
            console.log("Buscando dados na API...");
            const response = await api.get<ApiResponse<ApiPaginatedContent<Vehicle>>>("/recruitment/vehicles/list-with-paginate", {
                params: params,
            });

            const dadosDaApi = response.data;
            console.log("Dados recebidos com sucesso!");

            // Retornamos os dados formatados para o que o componente precisa
            return {
                data: dadosDaApi.content.vehicles,
                meta: {
                    total: dadosDaApi.content.total || (dadosDaApi.content.totalPages * (Number(dadosDaApi.content.perPage) || 10)),
                    page: dadosDaApi.content.page,
                    lastPage: dadosDaApi.content.totalPages,
                    perPage: Number(dadosDaApi.content.perPage) || 10
                }
            } as PaginatedResponse<Vehicle>;
        },
        placeholderData: (previousData) => previousData,
    });
}

export function useVehicleLocations() {
    return useQuery({
        queryKey: ["vehicleLocations"],
        queryFn: async () => {
            console.log("Buscando localizações para o mapa...");
            const response = await api.get<ApiResponse<any>>("/recruitment/vehicles/list-all-vehicle-locations");
            const dados = response.data;

            // Verificamos onde os itens estão na resposta da API
            if (Array.isArray(dados.content)) {
                return dados.content as VehicleLocation[];
            } else if (Array.isArray(dados.content?.items)) {
                return dados.content.items as VehicleLocation[];
            }
            return [] as VehicleLocation[];
        },
        refetchInterval: 30000, // Atualiza a cada 30 segundos
    });
}

export function useInfiniteVehicles(params: Omit<UseVehiclesParams, 'page'>) {
    return useInfiniteQuery({
        queryKey: ["vehicles", "infinite", params],
        queryFn: async ({ pageParam }) => {
            const { data } = await api.get<ApiResponse<ApiPaginatedContent<Vehicle>>>("/recruitment/vehicles/list-with-paginate", {
                params: { ...params, page: pageParam },
            });
            return {
                data: data.content.vehicles,
                meta: {
                    total: data.content.total || (data.content.totalPages * (Number(data.content.perPage) || 10)),
                    page: data.content.page,
                    lastPage: data.content.totalPages,
                    perPage: Number(data.content.perPage) || 10
                }
            } as PaginatedResponse<Vehicle>;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.meta.page < lastPage.meta.lastPage) {
                return lastPage.meta.page + 1;
            }
            return undefined;
        },
    });
}
