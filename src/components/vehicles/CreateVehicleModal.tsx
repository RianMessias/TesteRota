import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";

const vehicleSchema = z.object({
    plate: z.string().min(7, "A placa deve ter pelo menos 7 caracteres").max(8, "Placa inválida"),
    fleetNumber: z.string().min(1, "O número da frota é obrigatório"),
    model: z.string().min(1, "O modelo é obrigatório"),
    type: z.enum(["motor", "implement"] as const, {
        message: "Selecione um tipo válido",
    }),
});

type VehicleFormData = z.infer<typeof vehicleSchema>;

interface CreateVehicleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CreateVehicleModal({ isOpen, onClose }: CreateVehicleModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<VehicleFormData>({
        resolver: zodResolver(vehicleSchema),
    });

    const onSubmit = (data: VehicleFormData) => {
        console.log("Criando veículo:", data);
        alert("Veículo criado com sucesso! (Simulação)");
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-sidebar border border-gray-800 rounded-lg w-full max-w-md p-6 shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                    <X size={20} />
                </button>

                <h2 className="text-xl font-bold text-white mb-6">Novo Veículo</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Placa
                        </label>
                        <input
                            {...register("plate")}
                            className="w-full bg-background border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-accent"
                            placeholder="Ex: ABC1234"
                        />
                        {errors.plate && (
                            <span className="text-red-500 text-xs mt-1">{errors.plate.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Frota
                        </label>
                        <input
                            {...register("fleetNumber")}
                            className="w-full bg-background border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-accent"
                            placeholder="Ex: 000001"
                        />
                        {errors.fleetNumber && (
                            <span className="text-red-500 text-xs mt-1">{errors.fleetNumber.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Modelo
                        </label>
                        <input
                            {...register("model")}
                            className="w-full bg-background border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-accent"
                            placeholder="Ex: FH 460"
                        />
                        {errors.model && (
                            <span className="text-red-500 text-xs mt-1">{errors.model.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Tipo
                        </label>
                        <select
                            {...register("type")}
                            className="w-full bg-background border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-accent"
                        >
                            <option value="">Selecione...</option>
                            <option value="motor">Motor</option>
                            <option value="implement">Implemento</option>
                        </select>
                        {errors.type && (
                            <span className="text-red-500 text-xs mt-1">{errors.type.message}</span>
                        )}
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-accent hover:bg-sky-600 text-white rounded transition-colors"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
