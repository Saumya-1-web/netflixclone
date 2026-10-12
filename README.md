# Netflix Clone - Educational Project

A responsive, client-side **Netflix Clone** built as an educational front-end project. It mimics the core Netflix browsing experience, complete with movie filtering, dynamic searching, a custom watch list, and a fully interactive modal popup player.

## 🚀 Features

* **Dynamic Movie Feed:** Dynamically renders detailed media cards (titles, release years, ratings, durations, and high-quality posters) from a JavaScript data store.
* **Live Search Integration:** Filters titles in real time as you type into the navigation search bar.
* **Category Filtering:** Easily toggle between **All Movies**, **TV Shows**, or specialized categories via interactive chips.
* **Personalized "My List":** Save or remove your favorite titles instantly using a persistent state backed by `localStorage`.
* **Immersive Modals:** Clean, modern modal popups displaying full cinematic descriptions, metadata, and an inline iframe player streaming embedded movie trailers.
* **Fully Responsive Design:** Optimized layouts built with modern CSS (Grid, Flexbox, media queries, and fluid typography) that adapt cleanly to desktop, tablet, and mobile screens.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure (`<article>`, `<main>`, `<iframe>`).
* **CSS3:** Custom layouts, sticky navigations, grid matrices, scaling layers, and custom keyframe loading animations (`@keyframes modalAppear`).
* **Vanilla JavaScript (ES6+):** Runtime DOM manipulation, client-side event binding, array processing pipeline filters, and localized storage mechanisms.

## 📂 Project Structure

```text
├── index.html       # Structural layout & UI configurations
├── styles.css       # Layout rules, animations, and responsive breakpoints
└── script.js        # Media dataset, application state, and action bindings
```

## ⚙️ Setup & Installation

1. Clone or download this project repository to your local directory.
2. Open the directory containing your project files.
3. Launch the project by double-clicking `index.html` or running it through a local development server extension (such as Live Server in VS Code).

## 📊 Embedded Data Mock

The application leverages a central dataset structured as follows:

```javascript
{
    id: 1,
    title: "Stranger Things",
    category: "series",
    year: 2016,
    rating: "TV-14",
    duration: "4 Seasons",
    description: "When a young boy disappears...",
    poster: "https://tmdb.org...",
    trailer: "https://youtube.com..."
}
```

---
*Disclaimer: This is a Netflix-inspired educational project constructed exclusively using HTML, CSS, and JavaScript.*
