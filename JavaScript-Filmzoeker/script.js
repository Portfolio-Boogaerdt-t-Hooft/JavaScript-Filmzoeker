const ul = document.getElementById('allMovies');

const showPostersinHTML = (arr) => {
    ul.innerHTML = "";
    arr.map((movie) => {
        const newLi = document.createElement('li');
        const allMovies = ul.appendChild(newLi);
        const link = `<a target="_blank" href="http://imdb.com/title/${movie.imdbID}/">`;
        const img = `<img src="${movie.Poster}" alt="${movie.Title}"/>`;
        const endTags = `</a>`;
        allMovies.innerHTML = link + img + endTags;
    })
}
showPostersinHTML(movies)


const filterMovies = (wordInMovieTitle) => {
    showPostersinHTML(movies.filter(movie => movie.Title.includes(wordInMovieTitle)));
};

const latest = movies.filter(movie => movie.Year >= 2014);

const filteredMovies = document.getElementsByName("moviefilter");
filteredMovies.forEach(movie => {
    movie.addEventListener("change", function (event) {
        handleOnChangeEvent(event);
    })
});

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "allmovies":
            showPostersinHTML(movies);
            break;
        case "newestmovies":
            showPostersinHTML(latest);
            break;
        case "avengers":
            filterMovies("Avengers");
            break;
        case "xmen":
            filterMovies("X-Men");
            break;
        case "princess":
            filterMovies("Princess");
            break;
        case "batman":
            filterMovies("Batman");
            break;
        default:
    }
};








