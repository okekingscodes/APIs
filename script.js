
/*
var btn = document.getElementById("btn");

btn.addEventListener('click', () => {

    fetch('https://corona.lmao.ninja/v2/countries')
    .then((response) => {
        console.log(response);
    })
})

*/
/*
var btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    // fetch request to API function

    fetch('simple.txt')
    .then((response) => {
        return (response.text());
    })
    .then((data) => {
        var content = document.getElementById('content');
        var template = `
        <h4>File Data</h4>
        `
        template += `
        <p>${data}</p>
        `
        content.innerHTML = template;
        
    })
})

*/

var btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    // fetch request to API function

    fetch('https://corona.lmao.ninja/v2/countries')
    .then((response) => {
        return (response.json());
    })
    .then((data) => {
        var content = document.getElementById('content');
        var template = `
        <h4>Covid Cases</h4>
        `
        
        data.forEach((element) => {
            template += `
                <ul class="listing">
                <li class="list"><strong>Country: ${element.country}</strong></li>
                <li class="list"><strong>Cases: ${element.cases}</strong></li>
                <li class="list"><strong>Death: ${element.death}</strong></li>
                </ul>
            `
        })
        content.innerHTML = template;
        
    })
})