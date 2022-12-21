const requestURL = "../json/peliculas.json";


async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.peliculas.length ; index++)
    {

        const moviesSection = document.getElementById("movieSection");

        let id = movies.peliculas[index].id;
        let img = movies.peliculas[index].caratula;
        let title = movies.peliculas[index].titulo;
        let description = movies.peliculas[index].descripcion;
        let genre = movies.peliculas[index].genero;
        let director =movies.peliculas[index].director;
        moviesSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title-title">${id}. ${title}</h3>
                <h5 class="card-title-director"><img class= "iconPotion"src="/icons/icons8-maná-502.png">Director : ${director}</h5>
                <h5 class="card-title-genre"><img class= "iconPotion"src="/icons/icons8-maná-502.png">Género : ${genre}</h5>
                <h5 class="card-title-description"><img class= "iconPotion"src="/icons/icons8-maná-502.png">Sinopsis : ${description}</h5>

            </div>
        </div>
    `

};
})
