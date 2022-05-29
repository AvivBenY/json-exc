const userList = document.querySelector(".user-display");
const img = document.querySelector(".img");
const fullName = document.querySelector(".full-name");
const cityEl = document.querySelector(".city");
const countryEl = document.querySelector(".country");
const genderEl = document.querySelector(".gender");
const btn = document.querySelector(".button-75");
const infoDiv = document.querySelector(".card");


const res = fetch("https://randomuser.me/api/");

const promis = res.then(function (answer) {
    return answer.json();
});

promis.then(function (user) {
    userDisplay(user);
})

btn.onclick = function(){
const res = fetch("https://randomuser.me/api/");

const promis = res.then(function (answer) {
    return answer.json();
});

promis.then(function (user) {
    userDisplay(user);
})
}

function userDisplay(user) {
    infoDiv.children.innerHTML = "";

    console.log(user.results[0].gender);
    
    img.src = user.results[0].picture.large; 
    
    genderEl.textContent = `Gender: ${user.results[0].gender}`;

    fullName.textContent = `Full Name: ${user.results[0].name.first} ${user.results[0].name.last}`;    

    cityEl.textContent = `City: ${user.results[0].location.city}`;

    countryEl.textContent = `Country: ${user.results[0].location.country}`;

    
}

//function newId(){location.reload();}