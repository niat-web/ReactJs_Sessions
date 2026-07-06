const API_KEY = "YOUR_API_KEY";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const movieContainer = document.getElementById("movieContainer");


// ----------------------------
// Render Movies
// ----------------------------

const renderMovies = (movies) => {

    movieContainer.innerHTML = "";

    const movieCards = movies.map((movie) => {

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

            </div>
        `;

    }).join("");

    movieContainer.innerHTML = movieCards;

};


// ----------------------------
// Search Movies
// ----------------------------

const searchMovies = async () => {

    const movieName = searchInput.value.trim();

    if (movieName === "") {

        result.textContent = "Please enter a movie name.";
        movieContainer.innerHTML = "";

        return;
    }

    result.textContent = `Searching for ${movieName}...`;

    try {

        movieContainer.innerHTML = "<p>Loading...</p>";

        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
        );

        const data = await response.json();

        console.log(data);

        if (data.Response === "False") {

            movieContainer.innerHTML = `<p>${data.Error}</p>`;
            return;

        }

        renderMovies(data.Search);

    }

    catch (error) {

        console.log(error);

        movieContainer.innerHTML =
            "<p>Something went wrong. Please try again.</p>";

    }

};


// ----------------------------
// Button Click
// ----------------------------

searchBtn.addEventListener("click", searchMovies);


// ----------------------------
// Press Enter
// ----------------------------

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchMovies();
    }

});