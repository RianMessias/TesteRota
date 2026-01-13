import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { VehiclesPage } from "./pages/VehiclesPage";

import { ErrorBoundary } from "./components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/vehicles" replace />} />
              <Route path="/vehicles" element={<VehiclesPage />} />
              {/* Outras rotas aqui */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
