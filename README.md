# React Clothing Shop App

A simple, elegant React-based online shop where users can browse clothing items, filter by category, and search by name. The app includes multiple pages (`Home`, `About`, `Contact`) using React Router.

---

## Features

- **Multi-page navigation** using React Router (`Home`, `About`, `Contact`).
- **Search functionality** to quickly find items by keyword.
- **Filter buttons** to display only a specific category of clothing.
- **Responsive product grid** built with CSS Grid for clean, mobile-friendly layout.
- **Interactive UI** with hover effects and smooth transitions.

---

## Technologies Used

- **React** – Functional components, hooks (`useState`, `useEffect`).
- **React Router v6** – Client-side routing for multi-page experience.
- **CSS** – Custom styles with CSS Grid and Flexbox.

---

## Project Structure

```
src/
│
├── App.js           # Main Router with navigation
├── Home.js          # Homepage with search + filter + product grid
├── About.js         # About page
├── Contact.js       # Contact page
├── Clothes.js       # Component to display clothing cards
├── Buttons.js       # Category filter buttons
├── data.js          # Clothing data array
└── App.css          # Styles for the app
```

---

The app will run at **http://localhost:3000**

---

## Usage

- Navigate between **Shop**, **About**, and **Contact** using the nav bar.
- Use the **search bar** to find items by keyword.
- Click category **buttons** to filter items.
- Hover over a product card to see the interactive scale effect.

---

## License

This project is open-source and available under the [MIT License](LICENSE).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
