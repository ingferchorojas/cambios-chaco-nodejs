# Cotizaciones de cambioschaco.com.py

Este proyecto es un ejemplo de web scraping utilizando Node.js y Puppeteer para extraer datos de la página web de Cambios Chaco.

## Descripción

Este script en Node.js se utiliza para extraer información de la tabla de cotizaciones de [Cambios Chaco](https://www.cambioschaco.com.py/). Utiliza Puppeteer, una biblioteca de control de navegador, para acceder a la página web, esperar a que la tabla se cargue y luego extraer los datos de las filas de la tabla.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/ingferchorojas/cambios-chaco-nodejs.git

2. Navega al directorio del proyecto:

   ```shell
   cd cambios-chaco-nodejs
   ```

3. Instala las dependencias utilizando npm:

   ```shell
   npm install
   ```

4. Ejecuta el script de scraping utilizando el siguiente comando:

   ```shell
   node scraping.js
   ```

Esto lanzará el script que accederá a la página web de Cambios Chaco, esperará a que se cargue la tabla de cotizaciones y extraerá los datos de las filas de la tabla. El resultado se imprime en formato json

```json
[
  { "currency": "Dólar Americano", "purchase": "7.220", "sale": "7.280" },
  { "currency": "Real", "purchase": "1.380", "sale": "1.450" },
  { "currency": "Peso Argentino", "purchase": "14", "sale": "18" },
  { "currency": "Euro", "purchase": "8.150", "sale": "8.350" },
  { "currency": "Peso Chileno", "purchase": "5", "sale": "10" },
  { "currency": "Peso Uruguayo", "purchase": "150", "sale": "230" },
  { "currency": "Peso Colombiano", "purchase": "1", "sale": "3" },
  { "currency": "Peso Mexicano", "purchase": "350", "sale": "500" },
  { "currency": "Boliviano", "purchase": "450", "sale": "1.000" },
  { "currency": "Nuevo Sol Peruano", "purchase": "1.500", "sale": "2.000" },
  { "currency": "Dólar Canadiense", "purchase": "4.000", "sale": "5.550" },
  { "currency": "Dólar Australiano", "purchase": "3.200", "sale": "5.300" },
  { "currency": "Corona Noruega", "purchase": "350", "sale": "700" },
  { "currency": "Corona Danesa", "purchase": "400", "sale": "900" },
  { "currency": "Corona Sueca", "purchase": "300", "sale": "650" },
  { "currency": "Libra Esterlina", "purchase": "7.000", "sale": "9.400" },
  { "currency": "Franco Suizo", "purchase": "6.000", "sale": "7.850" },
  { "currency": "Yen Japonés", "purchase": "40", "sale": "60" },
  { "currency": "Dinar Kuwaiti", "purchase": "12.000", "sale": "20.000" },
  { "currency": "Shekel Israelí", "purchase": "1.250", "sale": "2.000" },
  { "currency": "Rand Sudafricano", "purchase": "250", "sale": "430" },
  { "currency": "Rublo Ruso", "purchase": "20", "sale": "90" }
]
```


