var racers = [1, 2, 3];
let winner = 0;

function addTortoise() {
    var img = document.createElement("img");
    img.src = "/tortoise.png";
    var para = document.createElement("p");
    para.innerText = racers.push(racers.length + 1);
    document.querySelector(".racerContainer").appendChild(para);
    document.querySelector(".racerContainer").appendChild(img);
    document.querySelector(".racerContainer").appendChild(document.createElement("hr"));
    console.log("added tortoiser racer");
}

function start() {
    console.log("started");
    console.log("racer" + 1 )
    let speeds = racers.map((racer) => setSpeed(racer))
    
    console.log(speeds);
    setTimeout(() => {
        alert("racer " + (speeds.indexOf(Math.min(...speeds)) + 1)  + " won!");
    }, 7000);
}


function setSpeed(num) {
    let speed = ((Math.random() * 4) + 3); 
    document.getElementById("racer" + num).style.animation="racing " + speed +"s linear";
    return speed;
}