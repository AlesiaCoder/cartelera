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

        let id = evaUnits.unidadesEva[index].id;
        let serialN = evaUnits.unidadesEva[index].nSerie;
        let img = evaUnits.unidadesEva[index].imgEva;
        let type =evaUnits.unidadesEva[index].tipoDeModelo;
        let pilot = evaUnits.unidadesEva[index].piloto;
        let soul = evaUnits.unidadesEva[index].alma;
        let data = evaUnits.unidadesEva[index].datos;
        evasSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title-title">${id}. ${serialN}</h3>
                    <h5 class="card-title-director">Tipo de modelo : ${type}</h5>
                    <h5 class="card-title-genre">Piloto : ${pilot}</h5>
                    <h5 class="card-title-description">Datos : ${data}</h5>
                </div>
            </div>
        `
    };
})
