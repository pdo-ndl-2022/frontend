import { test, expect } from '@playwright/test';

test('Login button should redirect to auth0', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const login = page.getByRole('button', { name: 'Login' });

  await login.click();

  await expect(page).toHaveTitle(/Log in | Sido/);
});
