export interface Vehicle {
    id: string;
    plate: string;
    fleet?: string;
    type: 'motor' | 'implement' | 'vehicle';
    model: string;
    status: string;
}

export interface VehicleLocation {
    id: string;
    plate: string;
    lat: number;
    lng: number;
    direction?: number;
    speed?: number;
    updatedAt?: string;
    createdAt?: string;
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
    vehicles: T[];
    total?: number;
    page: number;
    perPage: string | number;
    totalPages: number;
}
