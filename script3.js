const audio =
document.getElementById("audio");

const playBtn =
document.getElementById("playBtn");

let playing = false;

/* ▶️ PLAY / STOP */

playBtn.addEventListener("click",()=>{

if(!playing){

/* ▶️ EMPEZAR DESDE 0 */

audio.currentTime = 0;

audio.play();

playBtn.innerHTML = "❚❚";

playing = true;

}else{

/* ⏹️ DETENER Y REINICIAR */

audio.pause();

audio.currentTime = 0;

playBtn.innerHTML = "▶";

playing = false;
}

});

/* 🎵 TERMINÓ */

audio.addEventListener(
"ended",
()=>{

audio.currentTime = 0;

playBtn.innerHTML = "▶";

playing = false;

});

/* ⌨️ FLECHAS */

document.addEventListener(
"keydown",
(e)=>{

if(e.key==="ArrowLeft"){

window.location.href =
"page2.html";

}

if(e.key==="ArrowRight"){

window.location.href =
"page4.html";

}

});