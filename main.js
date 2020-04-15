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
//     .catch(error => {
//         console.error(error);
//     });
coronaData();
async function coronaData() {
    const response = await fetch('https://api.covid19india.org/data.json');
    const data = await response.json();
    console.log(data.statewise);
}