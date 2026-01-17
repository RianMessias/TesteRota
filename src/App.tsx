import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Layout } from "./components/layout/Layout";
import { VehiclesPage } from "./pages/VehiclesPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

const queryClient = new QueryClient();

// O componente App é o coração da nossa aplicação React
function App() {
  return (
    // QueryClientProvider é necessário para o React Query funcionar
    <QueryClientProvider client={queryClient}>
      {/* ErrorBoundary serve para o app não travar se houver algum erro crítico */}
      <ErrorBoundary>
        {/* Toaster serve para mostrar as mensagens de alerta no topo da tela (notifications) */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#001E2E',
              color: '#fff',
              border: '1px solid #002D44',
            },
          }}
        />
        {/* BrowserRouter gerencia as trocas de página (rotas) do navegador */}
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* Se o usuário entrar na raiz (/), redirecionamos automaticamente para /vehicles */}
              <Route path="/" element={<Navigate to="/vehicles" replace />} />
              <Route path="/vehicles" element={<VehiclesPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
