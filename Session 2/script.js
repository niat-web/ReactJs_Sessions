// =========================
// DOM Selection
// =========================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const movieContainer = document.getElementById("movieContainer");


// =========================
// Arrays of Objects
// =========================

const movies = [
    {
        title: "Batman",
        year: 2022,
        genre: "Action"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi"
    },
    {
        title: "Avengers",
        year: 2019,
        genre: "Action"
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi"
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Action"
    }
];


// =========================
// forEach()
// =========================

console.log("Movie Titles");

movies.forEach((movie) => {
    console.log(movie.title);
});


// =========================
// map()
// =========================

const movieTitles = movies.map((movie) => {
    return movie.title;
});

console.log(movieTitles);


// =========================
// filter()
// =========================

const actionMovies = movies.filter((movie) => {
    return movie.genre === "Action";
});

console.log(actionMovies);


// =========================
// Destructuring
// =========================

const sampleMovie = movies[0];

const { title, year, genre } = sampleMovie;

console.log(title);
console.log(year);
console.log(genre);


// =========================
// Array Destructuring
// =========================

const colors = ["Red", "Blue", "Green"];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);


// =========================
// Spread Operator
// =========================

const moreMovies = [
    ...movies,
    {
        title: "Joker",
        year: 2019,
        genre: "Drama"
    }
];

console.log(moreMovies);


// =========================
// Render Movies
// =========================

const renderMovies = (movieList) => {

    const cards = movieList.map((movie) => {

        return `
            <div class="card">
                <h2>${movie.title}</h2>
                <p>Year : ${movie.year}</p>
                <p>Genre : ${movie.genre}</p>
            </div>
        `;

    });

    movieContainer.innerHTML = cards.join("");

};


// Initial Render

renderMovies(movies);


// =========================
// Search Button
// =========================

searchBtn.addEventListener("click", () => {

    const searchText = searchInput.value.toLowerCase();

    result.textContent = `Searching for ${searchInput.value}...`;

    const filteredMovies = movies.filter((movie) => {

        return movie.title
            .toLowerCase()
            .includes(searchText);

    });

    renderMovies(filteredMovies);

});


// =========================
// Live Search
// =========================

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredMovies = movies.filter((movie) => {

        return movie.title
            .toLowerCase()
            .includes(searchText);

    });

    renderMovies(filteredMovies);

});