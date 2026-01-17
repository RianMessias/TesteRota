import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;


// Criamos a instância do Axios para não precisar repetir a URL em todo lugar
const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
});

// Esse interceptor roda sempre que enviamos uma requisição
api.interceptors.request.use((config) => {
    console.log("Requisição enviada para:", config.url);
    return config;
});

// Esse interceptor roda sempre que recebemos uma resposta (ou erro) da API
api.interceptors.response.use(
    (response) => {
        // Se deu tudo certo, apenas retornamos a resposta
        console.log("Resposta recebida com sucesso!");
        return response;
    },
    (error) => {
        console.log("Houve um erro na chamada da API:", error.message);

        // Tentamos pegar a mensagem de erro que veio do servidor
        const message = error.response?.data?.message || "Ocorreu um erro na requisição";

        // Dependendo do status (401, 403, 500), mostramos um alerta diferente
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
