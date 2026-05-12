import { journey, step, monitor, expect } from '@elastic/synthetics';

journey('Mi primer monitor', ({ page }) => {
  monitor.use({
    id: 'mi-primer-monitor',
    name: 'Mi Primer Monitor',
    schedule: 5,
  });

  step('Abrir Elastic', async () => {
    await page.goto('https://www.elastic.co');
  });

  step('Validar página cargada', async () => {
    await expect(page).toHaveTitle(/Elastic/);
  });
});