const API_URL = 'https://api.covid19india.org/data.json'
let div = document.querySelector("#table-items")
let head = document.querySelector("#head")

async function coronaData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data.statewise);

    // retreives and shows the  total statistics of coronavirus infections in India
    const { active, confirmed, deaths, recovered } = data.statewise[0];

    let totalConfirmed = document.createElement("li");
    totalConfirmed.textContent = `Confirmed : ${confirmed}`
    head.appendChild(totalConfirmed);

    let totalActive = document.createElement("li");
    totalActive.textContent = `Active : ${active}`
    head.appendChild(totalActive);

    let totalRecovered = document.createElement("li");
    totalRecovered.textContent = `Recovered : ${recovered}`
    head.appendChild(totalRecovered);

    let totalDeaths = document.createElement("li");
    totalDeaths.textContent = `Deaths: ${deaths}`
    head.appendChild(totalDeaths);



    //retreiving the data of each state and appending the data as list items to the parent ul tag
    for (let i = 1; i < data.statewise.length; i++) {
        const { active, confirmed, deaths, state, recovered } = data.statewise[i];

        let ul = document.createElement("ul")
        ul.classList.add("list-items")
        ul.classList.add("horizontal-list")

        let stateItem = document.createElement("li");
        stateItem.textContent = state;
        ul.appendChild(stateItem);

        let confirmedItem = document.createElement("li")
        confirmedItem.textContent = confirmed;
        ul.appendChild(confirmedItem);

        let activeItem = document.createElement("li");
        activeItem.textContent = active;
        ul.appendChild(activeItem);

        let recoveredItem = document.createElement("li");
        recoveredItem.textContent = recovered;
        ul.appendChild(recoveredItem);

        let deathItem = document.createElement("li");
        deathItem.textContent = deaths;
        ul.appendChild(deathItem);

        //finally, append the created ul tag to the parent div tag
        div.appendChild(ul);
    }
}
coronaData().catch(error => {
    console.error(error);
});;
