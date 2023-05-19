const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto('https://www.cambioschaco.com.py/');

    // Esperar a que la tabla se cargue completamente
    await page.waitForSelector('.cotiz-tabla');

    const data = await page.$$eval('.cotiz-tabla tbody tr', (rowElements) => {
      return rowElements.map((row) => {
        const currencyElement = row.querySelector('td a');
        const purchaseElement = row.querySelector('.purchase');
        const saleElement = row.querySelector('.sale');
        // Verificar si los elementos existen antes de obtener el texto
        const currency = currencyElement ? currencyElement.textContent.trim() : '';
        const purchase = purchaseElement ? purchaseElement.textContent.trim() : '';
        const sale = saleElement ? saleElement.textContent.trim() : '';
        return { currency, purchase, sale };
      });
    });

    // Filtrar los objetos con currency no vacío
    const filteredData = data.filter((obj) => obj.currency !== '');

    console.log(filteredData);

    await browser.close();
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
})();
