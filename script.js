var racers = [1, 2, 3];
let winner = 0;

document.addEventListener("keypress", (event) => {if (event.key == "Enter") start(); console.log(event.key)})

function closeCard() {
    let card = document.getElementById("card");
    let blur = document.getElementById("blur");
    let images = document.querySelectorAll("img");
    images.forEach(element => { 
        element.style.animationFillMode = "none";
    });
    card.style.display = "none";
    blur.style.display = "none";
}

function addTortoise() {
    const racerNum = racers.length + 1;
    var img = document.createElement("img");
    img.src = "./tortoise.png";
    console.log(img);
    img.setAttribute("id", "racer" + racerNum);
    var div = document.createElement("div");
    div.setAttribute("id", "container");
    var para = document.createElement("p");
    para.innerText = racers.push(racerNum);
    var name = document.getElementById("name").value;
    var h2 = document.createElement("h2");
    h2.innerText = name;
    div.appendChild(para);
    div.appendChild(h2);
    document.querySelector(".racerContainer").appendChild(div);
    document.querySelector(".racerContainer").appendChild(img);
    document.querySelector(".racerContainer").appendChild(document.createElement("hr"));
    console.log("added tortoiser racer");
}

function start() {
    console.log("started");
    let speeds = racers.map((racer) => setSpeed(racer))
    let card = document.getElementById("card");
    let blur = document.getElementById("blur");
    console.log(speeds, Math.max(...speeds));
    setTimeout(() => {
        console.log("winner");
        blur.style.display = "block";
        card.style.display = "block";
        document.getElementById("winner").innerHTML = "racer " + (speeds.indexOf(Math.min(...speeds)) + 1) + " won!";
        // alert("racer " + (speeds.indexOf(Math.min(...speeds)) + 1) + " won!");
    }, Math.max(...speeds) * 1000);
}


function setSpeed(num) {
    let speed = ((Math.random() * 4) + 3);
    let currentRacer = document.getElementById("racer" + num);
    currentRacer.style.animation = "";
    setTimeout(function () {
        currentRacer.style.animation = "racing " + speed + "s linear";
        currentRacer.style.animationFillMode = "forwards";

    }, 10);
    return speed;
}