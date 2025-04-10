function checkAtbilde() {
    const atbilde = {
      q1: 'c',
      q2: 'a',
      q3: 'd',
      q4: 'a',
      q5: 'b'
    };

    let score = 0;
    for (let q in atbilde) {
      const izvēle = document.querySelector(`input[name="${q}"]:checked`);
      if (izvēle && izvēle.value === atbilde[q]) {
        score++;
      }
    }

    document.getElementById('result').textContent = `You got ${score} out of 5 correct!`;

  }

let rezultats = 1000;
let rezultati = [];

let cps = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;

let cursorCost = 100;
let grandmaCost = 200;
let farmCost = 500;

function update() {
  document.getElementById("rezultats").innerHTML = `Score : ${rezultats}`;
  document.getElementById("cps").innerHTML = `CPS : ${cps}`;
  document.getElementById("counts").innerHTML = `Cursors: ${cursors}   | ` + `Grandmas: ${grandmas}| ` + `Farms: ${farms}`;
  document.getElementById("Cursor").innerHTML =`Cursor - (${cursorCost})` 
  document.getElementById("Grandma").innerHTML =`Grandma - (${grandmaCost})` 
  document.getElementById("Farm").innerHTML =`Farm - (${farmCost})` 
}


function klikskis() {
  rezultats++;
  update();
}

function restart() {
  if (rezultats > 0) {
    rezultati.push(rezultats);
    HighScore()
    rezultats = 0;
    cps = 0;
    cursors = 0;
    grandmas = 0;
    farms = 0;
    cursorCost = 100;
    grandmaCost = 200;
    farmCost = 500;
    update();
    console.log(rezultati);
  } else {
    alert("YOU HAVE 0 POINTS WHY DO YOU WANT TO RESTART???");
  }
}



function Cursor() {
  if (rezultats >= cursorCost) {
    rezultats -= cursorCost;
    cursors++;
    cps += 1;
    cursorCost = Math.round(cursorCost * 1.05);
    update();
  }
}

function Grandma() {
  if (rezultats >= grandmaCost) {
    rezultats -= grandmaCost;
    grandmas++;
    cps += 5;
    grandmaCost = Math.round(grandmaCost * 1.05);
    update();
  }
}

function Farm() {
  if (rezultats >= farmCost) {
    rezultats -= farmCost;
    farms++;
    cps += 10;
    farmCost = Math.round(farmCost * 1.05);
    update();
  }
}

setInterval(() => {rezultats += cps; 
  update();
}, 1000);

function HighScore() {
rezultati.sort((a, b) => b - a);
for (let i = 0; i < Math.min(5, rezultati.length);i++){ 
let x = `${i+1}.Vieta`
console.log(x)
document.getElementById(x).innerHTML = rezultati[i]
}
}
