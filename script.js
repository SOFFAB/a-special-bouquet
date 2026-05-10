const container = document.querySelector(".decor-container");

/* 💧 GOTAS */
for(let i=0;i<10;i++){
let d=document.createElement("div");
d.className="drop";
d.style.left=Math.random()*100+"vw";
d.style.animationDuration=(Math.random()*3+5)+"s";
container.appendChild(d);
}

/* 🌸 PÉTALOS */
for(let i=0;i<12;i++){
let p=document.createElement("div");
p.className="petal";
p.style.left=Math.random()*100+"vw";
p.style.animationDuration=(Math.random()*6+8)+"s";
container.appendChild(p);
}

/* ✨ DESTELLOS */

function createSparkles(){
const sparkles = document.getElementById("sparkles");

for(let i=0;i<8;i++){
let s = document.createElement("div");
s.className = "sparkle";
s.style.left = Math.random()*100 + "%";
s.style.top = Math.random()*100 + "%";
let scale = Math.random()*0.7 + 0.6;
s.style.transform = `scale(${scale})`;
sparkles.appendChild(s);
setTimeout(()=>{ s.remove(); },2000);
}
}

/* 🌷 INTERACCIÓN */

function waterPlant(){

const water = document.getElementById("water");
const closed = document.getElementById("orchid");
const open = document.getElementById("orchidBloom");
const sparkles = document.getElementById("sparkles");
const page = document.getElementById("page");

setTimeout(()=>{
water.classList.add("water-flow");
},600);

setTimeout(()=>{
closed.style.opacity="0";
open.style.opacity="1";
water.classList.remove("water-flow");
water.style.opacity="0";
},2600);

setTimeout(()=>{
sparkles.style.opacity="1";
createSparkles();
},4200);

setTimeout(()=>{
sparkles.style.opacity="0";
},6500);

setTimeout(()=>{
page.style.opacity="0";
},7500);

setTimeout(()=>{
window.location.href = "page2.html";
},8500);

}

/* 🔄 REINICIAR AL REGRESAR */

window.addEventListener("pageshow", function(event){
if(event.persisted){
window.location.reload();
}
});