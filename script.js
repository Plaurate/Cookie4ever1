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

let rezultats = 0;
let rezultati = [];

let cps = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;

let cursorCost = 100;
let grandmaCost = 200;
let farmCost = 500;

function update() {
  document.getElementById("rezultats").innerHTML = `Cookies : ${rezultats}`;
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
    alert("Why are you restarting if you have 0 points??");
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
document.getElementById(x).innerHTML = `${rezultati[i]} cookies`
}
}


// padStart aizpilda tukšās vietas string ar citu vērtību. piem. padStart(2, "0") nozīmē, ka ja ir mazāk par 2 vērtībām, strings tiks aizpildīts ar 0
function User() {
  const name = document.getElementById("name").value;
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  document.getElementById("date").innerHTML =
    `Hello, ${name}! Today's date is ${date.getDate()}.${month}.${date.getFullYear()}.`;
}

let rec = document.getElementsByClassName("recipes");
let i;


//this.nextElementSibling => atgriež elementu kas ir tieši aiz norādītā elementa vecāka
for (i = 0; i < rec.length; i++) {
  rec[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let recipe = this.nextElementSibling;
    if (recipe.style.display === "block") {
      recipe.style.display = "none";
    } else {
      recipe.style.display = "block";
    }
  });
}
