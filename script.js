/* =====================================
   NETFLIX CLONE - JAVASCRIPT
===================================== */

// Movie data
const movies = [
    {
        id: 1,
        title: "Stranger Things",
        category: "series",
        year: 2016,
        rating: "TV-14",
        duration: "4 Seasons",
        description: "When a young boy disappears, a small town uncovers a mystery involving secret experiments, supernatural forces, and a strange girl.",
        poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
    },
    {
        id: 2,
        title: "Wednesday",
        category: "series",
        year: 2022,
        rating: "TV-14",
        duration: "1 Season",
        description: "Wednesday Addams investigates mysterious events at Nevermore Academy while discovering more about her unusual abilities.",
        poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        trailer: "https://www.youtube.com/embed/Di310WS8zLk"
    },
    {
        id: 3,
        title: "Money Heist",
        category: "series",
        year: 2017,
        rating: "TV-MA",
        duration: "5 Parts",
        description: "A criminal mastermind known as the Professor plans an ambitious heist with a team of carefully selected criminals.",
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
    },
    {
        id: 4,
        title: "Squid Game",
        category: "series",
        year: 2021,
        rating: "TV-MA",
        duration: "2 Seasons",
        description: "People facing financial difficulties enter a mysterious competition where familiar children's games have deadly consequences.",
        poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        trailer: "https://www.youtube.com/embed/oqxAJKy0ii4"
    },
    {
        id: 5,
        title: "The Witcher",
        category: "series",
        year: 2019,
        rating: "TV-MA",
        duration: "3 Seasons",
        description: "Geralt of Rivia, a monster hunter, navigates a world filled with magic, dangerous creatures, and complicated destinies.",
        poster: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
        trailer: "https://www.youtube.com/embed/ndl1W4ltcmg"
    },
    {
        id: 6,
        title: "Extraction",
        category: "movie",
        year: 2020,
        rating: "R",
        duration: "1h 56m",
        description: "A fearless mercenary takes on a dangerous mission to rescue an abducted boy from a criminal underworld.",
        poster: "https://image.tmdb.org/t/p/w500/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
        trailer: "https://www.youtube.com/embed/L6P3nI6VnlY"
    },
    {
        id: 7,
        title: "Enola Holmes",
        category: "movie",
        year: 2020,
        rating: "PG-13",
        duration: "2h 3m",
        description: "Sherlock Holmes's younger sister uses her intelligence and courage to search for her missing mother.",
        poster: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
        trailer: "https://www.youtube.com/embed/1d0Zf9sXlHk"
    },
    {
        id: 8,
        title: "The Adam Project",
        category: "movie",
        year: 2022,
        rating: "PG-13",
        duration: "1h 46m",
        description: "A time-travelling pilot teams up with his younger self to confront the past and help save the future.",
        poster: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
        trailer: "https://www.youtube.com/embed/IE8HIsIrq4o"
    }
];

// Get HTML elements
const movieContainer = document.getElementById("movieContainer");
const searchInput = document.getElementById("searchInput");

const movieModal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPoster = document.getElementById("modalPoster");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalDuration = document.getElementById("modalDuration");

const trailerModal = document.getElementById("trailerModal");
const trailerFrame = document.getElementById("trailerFrame");

const heroPlayBtn = document.getElementById("heroPlayBtn");
const heroInfoBtn = document.getElementById("heroInfoBtn");
const modalPlayBtn = document.getElementById("modalPlayBtn");

const closeMovieBtn = document.getElementById("closeMovie");
const closeTrailerBtn = document.getElementById("closeTrailer");
const myListBtn = document.getElementById("myListBtn");

// Application state
let currentCategory = "all";
let showingMyList = false;
let selectedMovie = null;

// Restore saved list from localStorage
let myList = [];

try {
    const savedList = JSON.parse(
        localStorage.getItem("netflixMyList")
    );

    if (Array.isArray(savedList)) {
        myList = savedList.filter(id =>
            movies.some(movie => movie.id === id)
        );
    }
} catch (error) {
    myList = [];
}

// Save My List
function saveMyList() {
    try {
        localStorage.setItem(
            "netflixMyList",
            JSON.stringify(myList)
        );
    } catch (error) {
        console.error("Could not save My List.", error);
    }
}

// Display movie cards
function displayMovies(movieArray) {
    if (!movieContainer) return;

    movieContainer.innerHTML = "";

    if (movieArray.length === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent =
            "No titles found. Try another search or category.";

        movieContainer.appendChild(message);
        return;
    }

    movieArray.forEach(function (movie) {
        const card = document.createElement("article");
        card.className = "movie-card";

        card.innerHTML = `
            <img
                src="${movie.poster}"
                alt="${movie.title} poster"
                class="movie-poster"
                loading="lazy"
            >

            <div class="movie-info">
                <h3></h3>

                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span>${movie.rating}</span>
                </div>

                <div class="movie-buttons">
                    <button class="play-btn" data-action="play">
                        ▶ Play
                    </button>

                    <button class="info-btn" data-action="info">
                        More Information
                    </button>

                    <button class="list-btn" data-action="list">
                        ${myList.includes(movie.id)
                            ? "✓ My List"
                            : "+ My List"}
                    </button>
                </div>
            </div>
        `;

        // Add the correct movie title
        card.querySelector("h3").textContent = movie.title;

        // FIX: Pass this card's own movie to the details function
        card.querySelector('[data-action="info"]')
            .addEventListener("click", function () {
                showMovieDetails(movie);
            });

        // Play the selected movie's trailer
        card.querySelector('[data-action="play"]')
            .addEventListener("click", function () {
                playTrailer(movie);
            });

        // Add or remove the selected movie from My List
        card.querySelector('[data-action="list"]')
            .addEventListener("click", function () {
                toggleMyList(movie.id);
            });

        movieContainer.appendChild(card);
    });
}

// Filter and search movies
function getVisibleMovies() {
    let result = movies;

    if (showingMyList) {
        result = result.filter(function (movie) {
            return myList.includes(movie.id);
        });
    } else if (currentCategory !== "all") {
        result = result.filter(function (movie) {
            return movie.category === currentCategory;
        });
    }

    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    if (searchTerm) {
        result = result.filter(function (movie) {
            return movie.title.toLowerCase().includes(searchTerm);
        });
    }

    return result;
}

// Refresh displayed movies
function updateMovies() {
    displayMovies(getVisibleMovies());
}

// Open the correct movie information
function showMovieDetails(movie) {
    selectedMovie = movie;

    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;

    modalPoster.src = movie.poster;
    modalPoster.alt = movie.title + " poster";

    modalYear.textContent = movie.year;
    modalRating.textContent = movie.rating;
    modalDuration.textContent = movie.duration;

    movieModal.style.display = "flex";
    movieModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

// Close information modal
function closeMovieDetails() {
    movieModal.style.display = "none";
    movieModal.setAttribute("aria-hidden", "true");

    if (trailerModal.style.display !== "flex") {
        document.body.style.overflow = "";
    }
}

// Play selected trailer
function playTrailer(movie) {
    if (!movie || !movie.trailer) return;

    selectedMovie = movie;

    trailerFrame.src = movie.trailer + "?autoplay=1";
    trailerModal.style.display = "flex";
    trailerModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

// Close trailer and stop audio
function closeTrailer() {
    trailerFrame.src = "";

    trailerModal.style.display = "none";
    trailerModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

// Toggle My List
function toggleMyList(movieId) {
    if (myList.includes(movieId)) {
        myList = myList.filter(function (id) {
            return id !== movieId;
        });
    } else {
        myList.push(movieId);
    }

    saveMyList();
    updateMovies();
}

// Search while typing
if (searchInput) {
    searchInput.addEventListener("input", updateMovies);
}

// Category filters
document.querySelectorAll("[data-category]").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        currentCategory = button.dataset.category || "all";
        showingMyList = false;

        // Update active filter button
        document.querySelectorAll(".filter-btn").forEach(function (btn) {
            btn.classList.toggle("active", btn === button);
        });

        const sectionTitle = document.getElementById("sectionTitle");

        if (sectionTitle) {
            if (currentCategory === "movie") {
                sectionTitle.textContent = "Popular Movies";
            } else if (currentCategory === "series") {
                sectionTitle.textContent = "Popular TV Shows";
            } else {
                sectionTitle.textContent = "Popular on Netflix";
            }
        }

        updateMovies();

        // Scroll to the movie section
        document.getElementById("browse").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// My List navigation
if (myListBtn) {
    myListBtn.addEventListener("click", function (event) {
        event.preventDefault();

        showingMyList = true;

        document.querySelectorAll(".filter-btn").forEach(function (btn) {
            btn.classList.remove("active");
        });

        const sectionTitle = document.getElementById("sectionTitle");

        if (sectionTitle) {
            sectionTitle.textContent = "My List";
        }

        updateMovies();

        document.getElementById("browse").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Hero buttons use the first movie
const featuredMovie = movies[0];

if (heroPlayBtn) {
    heroPlayBtn.addEventListener("click", function () {
        playTrailer(featuredMovie);
    });
}

if (heroInfoBtn) {
    heroInfoBtn.addEventListener("click", function () {
        showMovieDetails(featuredMovie);
    });
}

// Play trailer from the information modal
if (modalPlayBtn) {
    modalPlayBtn.addEventListener("click", function () {
        if (selectedMovie) {
            closeMovieDetails();
            playTrailer(selectedMovie);
        }
    });
}

// Close buttons
if (closeMovieBtn) {
    closeMovieBtn.addEventListener("click", closeMovieDetails);
}

if (closeTrailerBtn) {
    closeTrailerBtn.addEventListener("click", closeTrailer);
}

// Close modals when clicking outside their content
movieModal.addEventListener("click", function (event) {
    if (event.target === movieModal) {
        closeMovieDetails();
    }
});

trailerModal.addEventListener("click", function (event) {
    if (event.target === trailerModal) {
        closeTrailer();
    }
});

// Close with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMovieDetails();
        closeTrailer();
    }
});

// Display all movies when the page opens
displayMovies(movies);