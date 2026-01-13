import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Rota 361/);
});

test('loads dashboard components', async ({ page }) => {
    await page.goto('/');

    // Sidebar
    await expect(page.getByText('ROTA 361')).toBeVisible();

    // Header
    // Note: we might need to wait for nav
    await expect(page.getByRole('heading', { name: 'Veículos' })).toBeVisible();

    // Check default filter "Rastreados" is active (or check existence)
    await expect(page.getByText('Rastreados')).toBeVisible();
});

test('opens new vehicle modal', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Novo' }).click();

    await expect(page.getByText('Novo Veículo')).toBeVisible();
    await expect(page.getByLabel('Placa')).toBeVisible();
});
