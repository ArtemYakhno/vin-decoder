# 🚗 VIN Decoder

A clean and responsive web application for decoding Vehicle Identification Numbers (VINs). Enter a VIN and instantly get detailed information about the vehicle — make, model, year, country of origin, and more.

🔗 **Live Demo** → [artemyakhno.github.io/vin-decoder](https://artemyakhno.github.io/vin-decoder/)

---

## ✨ Features

- 🔍 Decode any 17-character VIN number
- 📋 Display detailed vehicle information
- ✅ Built-in VIN format validation
- 📱 Fully responsive design
- ⚡ Fast and lightweight — built with Vite

---

## 🛠️ Tech Stack

- **React** — UI library
- **TypeScript** — type safety
- **Vite** — build tool
- **TanStack Query** — server state management & data fetching
- **React Hook Form + Zod** — form handling & validation
- **Axios** — API requests
- **SCSS** — styling

---

## 🌐 API

This project uses the **NHTSA vPIC API** — a free, public API provided by the U.S. National Highway Traffic Safety Administration.

- Base URL: `https://vpic.nhtsa.dot.gov/api`
- No registration or API key required
- Returns detailed vehicle data based on manufacturer submissions

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ArtemYakhno/vin-decoder.git
cd vin-decoder
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

---

## 📦 Build & Deploy

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

---

## 👤 Author

**Artem Yakhno**
- GitHub: [@ArtemYakhno](https://github.com/ArtemYakhno)
