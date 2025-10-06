# 📊 InfoVerse

InfoVerse es un dashboard full-stack que integra múltiples fuentes de datos (clima, noticias, criptomonedas, tipo de cambio) en una única interfaz moderna y responsiva. Con backend en Node.js + Express y frontend en React + Vite.

---

## 🎯 Objetivo

Proveer un panel centralizado donde el usuario pueda **consultar datos en tiempo real** de diversas áreas:

- Clima por ciudad  
- Noticias por categoría  
- Precios de criptomonedas  
- Tasas de intercambio entre monedas  

Con una interfaz atractiva, navegación fluida y adaptabilidad para diferentes dispositivos.

---

## 🧩 Tecnologías / Dependencias principales

### Backend (dashboard-backend)

- `express`  
- `cors`  
- `dotenv`  
- `axios`  
- `swagger-ui-express` (para documentación Swagger)  
- (posible) `jsPDF` / XSLX para exportación PDF / Excel  
- Otras utilidades que hayas usado (middleware, validación, etc.)

### Frontend (dashboard-frontend)

- `react` / `react-dom`  
- `react-router-dom`  
- `axios`  
- `@mui/material` + `@mui/icons-material`  
- `@emotion/react` / `@emotion/styled`  
- `@fortawesome/react-fontawesome` + iconos FontAwesome  
- Otros como chart.js, react-chartjs-2, etc.  

---

## 🔑 APIs externas usadas

- **OpenWeatherMap API** — para datos climáticos  
- **NewsAPI** — para titulares de noticias  
- **CoinGecko API** — precios de criptomonedas  
- **ExchangeRate API** — tasas de cambio entre monedas  

---
