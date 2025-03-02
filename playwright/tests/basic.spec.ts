import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://tinyurl.com/pawel-kosiniak-cv/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Paweł Kosiniak - CV/);
});

