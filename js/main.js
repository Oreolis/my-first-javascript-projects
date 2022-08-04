let count = 0;
let peopleEl = document.getElementById("number-people");
let saveEl = document.getElementById("save-el");
let decrementBtn = document.getElementById("decrement-btn");

function incrementNumber() {
    count += 1;
    peopleEl.textContent = count;
}

function decrementNumber() {
    if (count > 0) {
        count -= 1;
        peopleEl.textContent = count;
    }
}

function saveNumber() {
    let currentCount = count + " - ";
    saveEl.textContent += currentCount;
    peopleEl.textContent = 0;
    count = 0;
}



// BASKETBALL LOGIC

let homeEl = document.getElementById('home-points'),
    guestEl = document.getElementById('guest-points')
    homePts = Number(homeEl.textContent),
    guestsPts = Number(guestEl.textContent);

function incrementHomePts(element) {
    let dataIncr = Number(element.dataset.increment);
    homePts += dataIncr
    homeEl.innerText = homePts
}

function incrementGuestsPts(element) {
    let dataIncr = Number(element.dataset.increment);
    guestsPts += dataIncr
    guestEl.innerText = guestsPts
}



// SHOMI VEZBANJE

// let count = 0

function resetGame() {
    homePts = homeEl.textContent = guestsPts = guestEl.textContent = 0
}

function incrementFunction (e) {
    let currTarget = Number(e.target.dataset.increment); // 3
    let pointsElement = e.target.closest(".actions").previousElementSibling
    
    count += currTarget // 0 + 3
    pointsElement.textContent = count // 3
    console.log(count, currTarget, pointsElement.textContent)
}

document.querySelectorAll(".actions").forEach(el => el.addEventListener("click", incrementFunction))
















// Declaring function
function countdown() {
    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
}

// Calling function
// countdown();
