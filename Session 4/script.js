const API_KEY = "YOUR_API_KEY";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const movieContainer = document.getElementById("movieContainer");

// ----------------------------
// Load Favorites
// ----------------------------

const savedFavorites = localStorage.getItem("favorites");

let favorites = savedFavorites
    ? JSON.parse(savedFavorites)
    : [];

// ----------------------------
// Render Movies
// ----------------------------

const renderMovies = (movies) => {

    movieContainer.innerHTML = "";

    const cards = movies.map((movie) => {

        const isFavorite = favorites.some(
            (fav) => fav.imdbID === movie.imdbID
        );

        return `
            <div class="card">

                <img
                    src="${movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/150"}"
                    alt="${movie.Title}"
                >

                <h2>${movie.Title}</h2>

                <p>Year : ${movie.Year}</p>

                <button
                    class="favorite-btn"
                    onclick="addFavorite('${movie.imdbID}')"
                >
                    ${isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
                </button>

            </div>
        `;

    }).join("");

    movieContainer.innerHTML = cards;

};

// ----------------------------
// Current Search Results
// ----------------------------

let currentMovies = [];

// ----------------------------
// Favorites
// ----------------------------

const addFavorite = (movieId) => {

    const movie = currentMovies.find(
        (item) => item.imdbID === movieId
    );

    if (!movie) return;

    const alreadyExists = favorites.some(
        (item) => item.imdbID === movieId
    );

    if (alreadyExists) return;

    favorites.push(movie);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    renderMovies(currentMovies);

};

window.addFavorite = addFavorite;

// ----------------------------
// Search Movies
// ----------------------------

const searchMovies = async () => {

    const movieName = searchInput.value.trim();

    if (movieName === "") {

        movieContainer.innerHTML = "";
        result.textContent = "";

        return;
    }

    result.textContent = `Searching for ${movieName}...`;

    movieContainer.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
        );

        const data = await response.json();

        if (data.Response === "False") {

            movieContainer.innerHTML = `<p>${data.Error}</p>`;
            return;

        }

        currentMovies = data.Search;

        renderMovies(currentMovies);

    } catch (error) {

        console.log(error);

        movieContainer.innerHTML =
            "<p>Something went wrong.</p>";

    }

};

// ----------------------------
// Debouncing
// ----------------------------

let timer;

searchInput.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        searchMovies();

    }, 500);

});

// ----------------------------
// Search Button
// ----------------------------

searchBtn.addEventListener("click", searchMovies);

// ----------------------------
// Enter Key
// ----------------------------

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchMovies();
    }

});