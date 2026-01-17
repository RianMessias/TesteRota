import { render, screen, fireEvent } from '@testing-library/react';
import { VehicleTable } from './VehicleTable';
import type { Vehicle } from '../../types/vehicle';

describe('VehicleTable', () => {
    const mockOnPageChange = vi.fn();

    const defaultProps = {
        currentPage: 1,
        totalPages: 10,
        onPageChange: mockOnPageChange,
    };

    const mockData: Vehicle[] = [
        {
            id: '1',
            plate: 'ABC-1234',
            fleet: '100',
            type: 'motor',
            model: 'FH 460',
            status: 'active'
        },
        {
            id: '2',
            plate: 'XYZ-9999',
            fleet: '200',
            type: 'implement',
            model: 'R 440',
            status: 'available'
        }
    ];

    beforeEach(() => {
        mockOnPageChange.mockClear();
    });

    it('renders loading state', () => {
        render(<VehicleTable data={[]} isLoading={true} {...defaultProps} />);
        expect(screen.getByText(/carregando veículos/i)).toBeInTheDocument();
    });

    it('renders data correctly', () => {
        render(<VehicleTable data={mockData} isLoading={false} {...defaultProps} />);

        expect(screen.getByText('ABC-1234')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('Em viagem')).toBeInTheDocument();

        expect(screen.getByText('XYZ-9999')).toBeInTheDocument();
        expect(screen.getByText('200')).toBeInTheDocument();
        expect(screen.getByText('Disponível')).toBeInTheDocument();
    });

    it('renders empty state when data is empty', () => {
        render(<VehicleTable data={[]} isLoading={false} {...defaultProps} />);
        expect(screen.getByText(/nenhum veículo encontrado/i)).toBeInTheDocument();
    });

    it('calls onPageChange when clicking a page number', () => {
        render(<VehicleTable data={mockData} isLoading={false} {...defaultProps} />);

        const page2Button = screen.getByText('2');
        fireEvent.click(page2Button);

        expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    it('calls onPageChange when clicking "Próxima"', () => {
        render(<VehicleTable data={mockData} isLoading={false} {...defaultProps} />);

        const nextButton = screen.getByText(/próxima/i);
        fireEvent.click(nextButton);

        expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    it('disables "Anterior" button on first page', () => {
        render(<VehicleTable data={mockData} isLoading={false} {...defaultProps} />);

        const prevButton = screen.getByText(/anterior/i);
        expect(prevButton).toBeDisabled();
    });
});
