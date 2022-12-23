const requestURL = "../json/listaEvas.json";


async function fetchEvasJson(){
    const response = await fetch(requestURL);
    const evaUnits = await response.json();
    return evaUnits;
}

fetchEvasJson().then(evaUnits => {
    for (let index = 0; index < evaUnits.unidadesEva.length ; index++)
    {

        const evasSection = document.getElementById("evaSection");

        let img = evaUnits.unidadesEva[index].imgEva;
        let alt = evaUnits.unidadesEva[index].alt;
        let id = evaUnits.unidadesEva[index].id;
        let serialN = evaUnits.unidadesEva[index].nSerie;
        let type =evaUnits.unidadesEva[index].tipoDeModelo;
        let pilot = evaUnits.unidadesEva[index].piloto;
        let soul = evaUnits.unidadesEva[index].alma;
        let data = evaUnits.unidadesEva[index].datos;
        evasSection.innerHTML += `
            <div class="cardEva">
                <div class="evaImgContainer">
                    <img src="${img}" class="evaImg" alt="${alt}">
                </div>
                <div class="eva-heading">
                    <h2 class="eva-heading__title">${id}. ${serialN}</h2>
                    <h2 class="eva-heading__title">Tipo de modelo: ${type}</h2>
                    <h1 class="eva-heading__title">Piloto: ${pilot}</h1>
                    <h3 class="eva-heading__episode-number">Alma: ${soul}</h3>
                    <p class="eva-heading__episode-title">Datos: ${data}</p>
                </div>
            </div>
        `
    };
})
