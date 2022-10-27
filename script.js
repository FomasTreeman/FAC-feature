var racers = [1, 2, 3];
let winner = 0;

function addTortoise() {
    const racerNum = racers.length + 1;
    var img = document.createElement("img");
    img.src = "/tortoise.png";
    img.setAttribute("id", "racer" + racerNum);
    var para = document.createElement("p");
    para.innerText = racers.push(racerNum);
    document.querySelector(".racerContainer").appendChild(para);
    document.querySelector(".racerContainer").appendChild(img);
    document.querySelector(".racerContainer").appendChild(document.createElement("hr"));
    console.log("added tortoiser racer");
}

function start() {
    console.log("started");
    let speeds = racers.map((racer) => setSpeed(racer))
    
    console.log(speeds);
    setTimeout(() => {
        alert("racer " + (speeds.indexOf(Math.min(...speeds)) + 1)  + " won!");
    }, 7000);
}


function setSpeed(num) {
    let speed = ((Math.random() * 4) + 3); 
    let currentRacer =  document.getElementById("racer" + num);
    currentRacer.style.animation = "";
    setTimeout( function(){
        currentRacer.style.animation="racing " + speed +"s linear";
    }, 10);
    return speed;
}