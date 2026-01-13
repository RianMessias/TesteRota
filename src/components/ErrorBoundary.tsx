import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen w-full flex items-center justify-center bg-gray-900 text-white p-8">
                    <div className="max-w-md space-y-4">
                        <h1 className="text-2xl font-bold text-red-500">Algo deu errado</h1>
                        <p className="text-gray-300">Ocorreu um erro ao renderizar a aplicação.</p>
                        <pre className="bg-gray-800 p-4 rounded text-xs overflow-auto">
                            {this.state.error?.message}
                        </pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                        >
                            Recarregar página
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
