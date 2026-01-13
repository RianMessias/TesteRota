import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;


const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
});

// Request Interceptor
api.interceptors.request.use((config) => {
    // Hidden logging for debugging in console if needed, but not cluttering
    return config;
});

// Response Interceptor for Global Error Handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || "Ocorreu um erro na requisição";

        if (error.response?.status === 401) {
            toast.error("Sessão expirada ou token inválido. Verifique o .env", { id: 'auth-error' });
        } else if (error.response?.status === 403) {
            toast.error("Você não tem permissão para realizar esta ação.");
        } else if (error.response?.status >= 500) {
            toast.error("Erro interno no servidor. Tente novamente mais tarde.");
        } else if (error.code === 'ERR_NETWORK') {
            toast.error("Erro de conexão. Verifique sua internet.");
        } else {
            toast.error(message);
        }

        return Promise.reject(error);
    }
);

export default api;
