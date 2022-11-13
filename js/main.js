const elFilmsList = document.querySelector(".films__list");
const elFilmTemplate = document.querySelector("#film-template").content;
const elGenreTemplate = document.querySelector("#film-genre-template").content;
const elFilmsFilterForm = document.querySelector(".films-form");
const elFilmsSelect = document.querySelector(".film-select");
const elFilmsSearchInput = document.querySelector(".film-search-input");

const unicGenres = (films) => {
    let genres = []
    films.map((film) => {
        film.genres.map(genre => {
            if(!genres.includes(genre)){
                genres.push(genre)
            }
        })
    })
    return genres
}
unicGenres(films)


const renderGenres = (genres, el) => {
    el.innerHTML = null

    genres.map( (genre) => {
        let newOpt = document.createElement('option')

        newOpt.value = genre
        newOpt.textContent  = genre

        el.appendChild(newOpt)
    })
}
renderGenres(unicGenres(films), elFilmsSelect)


const renderFilm = (films, el) => {
    el.innerHTML = null

    films.map(film => {
        let filmTepm = elFilmTemplate.cloneNode(true)

        filmTepm.querySelector('.film__title').textContent = film.title
        filmTepm.querySelector('.film__image').src = film.poster
        filmTepm.querySelector('.film__overview').textContent = film.overview

        el.appendChild(filmTepm)
    })
}
renderFilm(films, elFilmsList)