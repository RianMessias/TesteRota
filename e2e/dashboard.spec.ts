import { test, expect } from '@playwright/test';

test.describe('Vehicle Management Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should complete full vehicle management flow', async ({ page }) => {
        // 1. Access page and check title
        await expect(page).toHaveTitle(/Rota 361/);
        await expect(page.getByRole('heading', { name: 'Veículos' })).toBeVisible();

        // 2. Test filtering (switching radio buttons)
        const outrosRadio = page.getByText('Outros');
        const rastreadosRadio = page.getByText('Rastreados');

        await outrosRadio.click();
        // Check if map is hidden when 'Outros' is selected (based on VehiclesPage.tsx logic)
        await expect(page.getByText('Mapa rastreador')).not.toBeVisible();

        await rastreadosRadio.click();
        await expect(page.getByText('Mapa rastreador')).toBeVisible();

        // 3. Search filter
        const searchInput = page.getByPlaceholder('Buscar por placa ou frota');
        await searchInput.fill('ABC1234');
        // No specific assertion here as it depends on mock data/live API, 
        // but we ensure the input works.

        // 4. Open and validate "Novo Veículo" modal
        await page.getByRole('button', { name: 'Novo' }).click();
        await expect(page.getByText('Novo Veículo')).toBeVisible();

        // 5. Validate form fields inside modal
        const plateInput = page.locator('input[name="plate"]');
        const fleetInput = page.locator('input[name="fleetNumber"]');
        const modelInput = page.locator('input[name="model"]');
        const typeSelect = page.locator('select[name="type"]');

        await expect(plateInput).toBeVisible();
        await expect(fleetInput).toBeVisible();
        await expect(modelInput).toBeVisible();
        await expect(typeSelect).toBeVisible();

        // Test validation (submit empty form)
        await page.getByRole('button', { name: 'Salvar' }).click();

        // Zod error messages
        await expect(page.getByText('A placa deve ter pelo menos 7 caracteres')).toBeVisible();
        await expect(page.getByText('O número da frota é obrigatório')).toBeVisible();
        await expect(page.getByText('O modelo é obrigatório')).toBeVisible();

        // Close modal
        await page.locator('button').filter({ has: page.locator('svg') }).click(); // The X button
        await expect(page.getByText('Novo Veículo')).not.toBeVisible();
    });
});
