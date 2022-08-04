let getFilmHtml = ""
let films = []

const searchBtn = document.querySelector("#search-btn")
const searchEl = document.querySelector("#search-input")
const savedFilmsLocalStorage = JSON.parse(localStorage.getItem("savedFilms"))

searchBtn.addEventListener("click", async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=dec6795d&s=${searchEl.value}&t=movie`)
    const data = await res.json()
    getFilmHtml = ""
    let id = 1
    films = []
    for (let item of data.Search) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=dec6795d&i=${item.imdbID}&type=movie`)
        const data = await res.json()
        renderFilms(data, id)
        id++
        films.push(data)
    }
    document.querySelector("#main-container").innerHTML = getFilmHtml 
})

function renderFilms(data, id) {
    getFilmHtml +=`
        <div id="wrapper">
            <section id="films-container">
                <img src="${data.Poster}" alt="">
        
                <div class="film-data">
                    <div class="film-title">
                        <h3>${data.Title}</h3> 
                        <p>⭐️ ${data.imdbRating}</p>
                    </div>
        
                    <div class="film-info">
                        <p>${data.Runtime}</p>
                        <p>${data.Genre}</p>
                        <button id="${data.imdbID}" onclick="saveToLocal(this.id)"><i class="fa-solid fa-circle-plus"></i> Watchlist</button>
                    </div>
        
                    <div class="film-plot">
                        <p class="film-plot">${data.Plot}</p>
                    </div>
                </div>
            </section>
            <hr>    
        </div> 
        `
    }



function saveToLocal(id) {
    let film = films.filter(film => film.imdbID === id)
    localStorage.setItem(film[0].imdbID, JSON.stringify(film))
    document.getElementById(id).innerHTML = `<i class="fa-solid fa-check"></i> Added`
}

     







     


        
        
