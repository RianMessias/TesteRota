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

/**
 * Hook para buscar veículos com paginação
 */
export function useVehicles(params: UseVehiclesParams) {
    return useQuery({
        queryKey: ["vehicles", params],
        queryFn: async () => {
            const { data } = await api.get<ApiResponse<ApiPaginatedContent<Vehicle>>>("/recruitment/vehicles/list-with-paginate", {
                params,
            });

            // Mapeia para a estrutura interna da aplicação
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
        placeholderData: (previousData) => previousData,
    });
}

/**
 * Hook para buscar as localizações de todos os veículos (tempo real)
 */
export function useVehicleLocations() {
    return useQuery({
        queryKey: ["vehicleLocations"],
        queryFn: async () => {
            const { data } = await api.get<ApiResponse<any>>("/recruitment/vehicles/list-all-vehicle-locations");

            // Trata as diferentes possibilidades de retorno da API
            if (Array.isArray(data.content)) {
                return data.content as VehicleLocation[];
            } else if (Array.isArray(data.content?.items)) {
                return data.content.items as VehicleLocation[];
            }
            return [] as VehicleLocation[];
        },
        refetchInterval: 30000, // Atualiza a cada 30 segundos
    });
}

/**
 * Hook para busca infinita de veículos (carregar mais)
 */
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
