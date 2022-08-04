let getFilmHtml = ""

updateHtml()

function updateHtml() {
    getFilmHtml = ""
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let film = JSON.parse(localStorage.getItem(key))
        renderHtml(film[0])

    }
    document.querySelector("#main-container").innerHTML = getFilmHtml
}

function renderHtml(data) {
    getFilmHtml +=  `
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
                            <button id="${data.imdbID}" onclick="deleteFromStorage(this.id)" href="#"><i class="fa-solid fa-circle-plus"></i> Remove</button>
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

function deleteFromStorage(clicked_id) {
    localStorage.removeItem(clicked_id)
    updateHtml()
}


