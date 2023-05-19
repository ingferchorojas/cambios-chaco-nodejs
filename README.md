# Cambios Chaco Node.js

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

Esto lanzará el script que accederá a la página web de Cambios Chaco, esperará a que se cargue la tabla de cotizaciones y extraerá los datos de las filas de la tabla.


