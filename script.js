var racers = [1, 2, 3];
let winner = 0;

function addTortoise() {
    const racerNum = racers.length + 1;
    var img = document.createElement("img");
    img.src = "/tortoise.png";
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
    console.log(speeds, Math.max(...speeds));
    setTimeout(() => {
        alert("racer " + (speeds.indexOf(Math.min(...speeds)) + 1)  + " won!");
    }, Math.max(...speeds) * 1000);
}


function setSpeed(num) {
    let speed = ((Math.random() * 4) + 3); 
    let currentRacer =  document.getElementById("racer" + num);
    currentRacer.style.animation = "";
    setTimeout( function(){5
        console.log(speed);
        currentRacer.style.animation="racing " + speed +"s linear";
    }, 10);
    return speed;
}