/* ✨ DECORACIÓN */

const container =
document.querySelector(".decor-container");

/* ✨ BRILLOS */

for(let i=0;i<12;i++){

let s=document.createElement("div");

s.className="sparkle-fall";

s.style.left=Math.random()*100+"vw";

s.style.animationDuration=
(Math.random()*5+8)+"s";

s.style.animationDelay=
(Math.random()*5)+"s";

container.appendChild(s);
}

/* 🍃 HOJAS */

for(let i=0;i<10;i++){

let l=document.createElement("div");

l.className="leaf";

l.style.left=Math.random()*100+"vw";

l.style.animationDuration=
(Math.random()*7+10)+"s";

l.style.animationDelay=
(Math.random()*4)+"s";

container.appendChild(l);
}

/* 💌 MODAL */

const modal =
document.getElementById("modalOverlay");

const modalTicket =
document.getElementById("modalTicket");

const cancelBtn =
document.getElementById("cancelBtn");

const redeemBtn =
document.getElementById("redeemBtn");

let currentTicket = null;
let currentIndex = null;
let currentText = "";

/* 🎟️ TIRITAS */

const tickets =
document.querySelectorAll(".ticket");

/* 💾 STORAGE */

tickets.forEach((ticket,index)=>{

if(
localStorage.getItem(
"ticket-"+index
)==="used"
){

ticket.classList.add("redeemed");

ticket.style.pointerEvents=
"none";
}

/* ✨ CLICK */

ticket.addEventListener("click",()=>{

currentTicket = ticket;
currentIndex = index;

currentText =
ticket.innerText;

ticket.style.transition=
"all .45s ease";

ticket.style.transform=
"rotate(8deg) translateY(80px)";

ticket.style.opacity="0";

setTimeout(()=>{

modal.classList.add("show");

modalTicket.innerText=
currentText;

},280);

});
});

/* ❌ CANCELAR */

cancelBtn.addEventListener("click",()=>{

modal.classList.remove("show");

currentTicket.style.transform=
"translateY(0) rotate(0deg)";

currentTicket.style.opacity="1";

});

/* 💌 REDIMIR */

redeemBtn.addEventListener("click",()=>{

localStorage.setItem(
"ticket-"+currentIndex,
"used"
);

currentTicket.classList.add(
"redeemed"
);

currentTicket.style.transform=
"translateY(0)";

currentTicket.style.opacity=
"0.55";

currentTicket.style.pointerEvents=
"none";

modal.classList.remove("show");

/* 📱 WHATSAPP */

const phone =
"525512212268";

const message =
`Mensaje importante 💌

He decidido usar uno de mis regalos.

El elegido es:

${currentText}

Por el 10 de mayo.`;

window.location.href =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

});

/* 🍵 TÉ */

const teaScene =
document.querySelector(".tea-scene");

const teaWater =
document.querySelector(".tea-water");

teaScene.addEventListener("click",()=>{

if(
teaScene.classList.contains("active")
)return;

teaScene.classList.add("pouring");

/* 💦 AGUA */

setTimeout(()=>{

teaScene.classList.remove("pouring");

teaScene.classList.add("active");

/* ☁️ VAPOR */

setTimeout(()=>{

teaScene.classList.add("steaming");

},400);

/* 🌿 IR A PÁGINA 3 */

setTimeout(()=>{

window.location.href =
"page3.html";

},7600);

},1400);

});