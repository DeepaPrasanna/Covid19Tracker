let state = document.getElementById("state")
// fetch('https://api.covid19india.org/data.json')
//     .then((response) => {
//         // console.log(response)
//         return response.json();
//     })
//     .then((data) => {
//         let arr = data.statewise;
//         console.log(arr)
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i].state + "\n" + arr[i].confirmed);
//         }
//     })
//     
const API_URL = 'https://api.covid19india.org/data.json'
// let ul = document.querySelector(".list-items")
let div = document.querySelector(".table-items")

async function coronaData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data.statewise); 
    for (let i = 0; i < data.statewise.length; i++) {
        const { active, confirmed, deaths, state } = data.statewise[i];
        // console.log(active)
        // console.log(confirmed)
        // console.log(deaths)
        // console.log(state)
        // document.getElementById("state").textContent = state;
        // document.getElementById("confirmed").textContent = confirmed;
        // document.getElementById("deaths").textContent = deaths;

        // document.getElementById("active").textContent = active;
        let ul = document.createElement("ul")
        ul.classList.add("list-items")
        ul.classList.add("horizontal-list")

        let stateItem = document.createElement("li");
        stateItem.textContent = state;
        ul.appendChild(stateItem);

        let activeItem = document.createElement("li");
        activeItem.textContent = active;
        ul.appendChild(activeItem);

        let confirmedItem = document.createElement("li")
        confirmedItem.textContent = confirmed;
        ul.appendChild(confirmedItem);

        let deathItem = document.createElement("li");
        deathItem.textContent = deaths;
        ul.appendChild(deathItem);

        div.appendChild(ul);





    }

}
coronaData().catch(error => {
    console.error(error);
});;
