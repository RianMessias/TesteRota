import { render, screen } from '@testing-library/react';
import { VehicleTable } from './VehicleTable';
import type { Vehicle } from '../../types/vehicle';

describe('VehicleTable', () => {
    it('renders loading state', () => {
        render(<VehicleTable data={[]} isLoading={true} />);
        expect(screen.getByText(/Carregando veículos/i)).toBeInTheDocument();
    });

    it('renders data correctly', () => {
        const mockData: Vehicle[] = [
            {
                id: '1',
                plate: 'ABC-1234',
                fleetNumber: '100',
                type: 'motor',
                model: 'FH 460',
                status: 'active'
            }
        ];

        render(<VehicleTable data={mockData} isLoading={false} />);
        expect(screen.getByText('ABC-1234')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('renders empty state', () => {
        render(<VehicleTable data={[]} isLoading={false} />);
        expect(screen.getByText(/Nenhum veículo encontrado/i)).toBeInTheDocument();
    });
});
