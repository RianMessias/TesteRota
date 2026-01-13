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
            const { data } = await api.get<ApiResponse<ApiPaginatedContent<Vehicle>>>("/recruitment/vehicles/list-with-paginate", {
                params,
            });

            // Map to internal structure
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

export function useVehicleLocations() {
    return useQuery({
        queryKey: ["vehicleLocations"],
        queryFn: async () => {
            // The API likely returns { content: { items: [...] } } or { content: [...] }
            // Based on logs, it seems to be content.items or content itself?
            // Subagent showed content.items for paginated. For list-all?
            // Assuming list-all returns content as array directly (common pattern) or content.items. 
            // We'll check safely.
            const { data } = await api.get<ApiResponse<any>>("/recruitment/vehicles/list-all-vehicle-locations");

            if (Array.isArray(data.content)) {
                return data.content as VehicleLocation[];
            } else if (Array.isArray(data.content?.items)) {
                return data.content.items as VehicleLocation[];
            }
            return [] as VehicleLocation[];
        },
        refetchInterval: 30000, // Refresh every 30s
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
