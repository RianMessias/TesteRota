export interface Vehicle {
    id: string;
    plate: string;
    fleetNumber?: string;
    type: 'motor' | 'implement' | 'vehicle';
    model: string;
    status: string;
}

export interface VehicleLocation {
    id: string;
    plate: string;
    latitude: number;
    longitude: number;
    direction?: number;
    speed?: number;
    updatedAt?: string;
}

// Internal app usage (mapped from API)
export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        total: number;
        page: number;
        lastPage: number;
        perPage: number;
    };
}

// Actual API response structure
export interface ApiResponse<T> {
    statusCode: number;
    message: string;
    content: T;
}

export interface ApiPaginatedContent<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
