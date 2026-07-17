# 🛍️ Oxivos Fashion Store

A modern, full-featured fashion e-commerce frontend built with **Next.js 16** and **React 19**. Browse products, search and filter by category, view detailed product pages, manage a shopping cart, and enjoy smooth page animations throughout.

**🔗 Live Site:** [oxivos-fashion-store.vercel.app](https://oxivos-fashion-store.vercel.app/)
**📦 Repository:** [github.com/Saddam2508/-fashion_store](https://github.com/Saddam2508/-fashion_store)

---

## ✨ Features

- 🏠 **Home Page** — Hero banner and a curated preview of products
- 🖼️ **All Products Page** — Full product gallery with search and category filtering
- 🔍 **Live Search** — Debounced search with minimum character validation
- 🗂️ **Category Filter** — Filter products dynamically by category
- 📄 **Product Details Page** — Full product info including price, sizes, colors, rating, and stock status
- 🛒 **Shopping Cart** — Add products to cart via React Context
- 🎬 **Smooth Animations** — Slide-in, fade-in, and staggered entrance animations powered by Motion
- 📱 **Fully Responsive** — Optimized layouts for mobile, tablet, and desktop
- ⚡ **Optimized Images** — Using `next/image` for automatic image optimization

---

## 🧰 Tech Stack

| Category          | Technology                                     |
| ----------------- | ---------------------------------------------- |
| Framework         | [Next.js 16](https://nextjs.org/) (App Router) |
| Language          | TypeScript                                     |
| UI Library        | React 19                                       |
| Component Library | [HeroUI](https://heroui.com/)                  |
| Styling           | Tailwind CSS 4, DaisyUI                        |
| Animation         | [Motion](https://motion.dev/) (Framer Motion)  |
| Icons             | Lucide React, React Icons, Gravity UI Icons    |
| Notifications     | React Toastify                                 |
| Carousel/Slider   | Swiper                                         |
| Linting           | ESLint                                         |
| Deployment        | Vercel                                         |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── all-products/       # Product listing page
│   ├── all-products/[id]/  # Product details page
│   ├── cart/                # Shopping cart page
│   └── page.tsx             # Home page
├── components/
│   ├── banner/               # Hero banner
│   ├── card/                 # Product & details cards
│   ├── category/             # Category filter
│   ├── products/             # Product listing components
│   └── search/                # Search component
├── context/
│   ├── ProductContext.tsx    # Product state, search & filter logic
│   └── CartContext.tsx       # Shopping cart state
├── helper/
│   └── fetchData.tsx          # Data fetching utilities
└── types/
    └── product.ts              # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm / yarn / pnpm / bun

### Installation

```bash
git clone https://github.com/Saddam2508/-fashion_store.git
cd -fashion_store
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🧭 Key Pages & Routes

| Route                | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `/`                  | Home page with banner and featured product preview   |
| `/all-products`      | Full product gallery with search and category filter |
| `/all-products/[id]` | Individual product details page                      |
| `/cart`              | Shopping cart page                                   |

---

## 🎨 Notable Implementation Details

- **Search & Filter Architecture** — Search term and selected category are stored in a shared `ProductContext`, with a single centralized `useEffect` responsible for combining both filters against the master product list, keeping search and category filtering always in sync.
- **Home vs. Listing Page Isolation** — The home page renders a limited product preview directly from server-fetched data, independent of the global search/filter state used on the full listing page.
- **Animated UI** — Product cards and detail sections use Motion's `variants`, `staggerChildren`, and `whileInView` for polished entrance animations.

---

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com/), the platform built by the creators of Next.js. Every push to the `main` branch triggers an automatic deployment.

To deploy your own copy:

1. Push your fork to GitHub
2. Import the repository into [Vercel](https://vercel.com/new)
3. Vercel will auto-detect the Next.js framework and deploy

---

## 📄 License

This project is open for learning and personal use. Feel free to fork and build upon it.

---

## 👤 Author

**Md Saddam Hossain**
GitHub: [@Saddam2508](https://github.com/Saddam2508)
