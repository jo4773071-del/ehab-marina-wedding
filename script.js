const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const mainPage = document.getElementById("mainPage");

/* فتح الدعوة */

openBtn.onclick = () => {

  intro.style.transition = "all 0.8s ease";
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.1)";

  setTimeout(() => {

    intro.style.display = "none";

    mainPage.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 800);

};

/* العد التنازلي */

const weddingDate =
new Date("2026-07-26T18:00:00").getTime();

function updateCountdown(){

  const now = new Date().getTime();

  const distance = weddingDate - now;

  if(distance < 0){

    document.getElementById("timer").innerHTML =
    "<h2>🎉 تمت المناسبة 🎉</h2>";

    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("timer").innerHTML = `

    <div class="time-box">
      <div class="number">${days}</div>
      <div class="label">يوم</div>
    </div>

    <div class="time-box">
      <div class="number">${hours}</div>
      <div class="label">ساعة</div>
    </div>

    <div class="time-box">
      <div class="number">${minutes}</div>
      <div class="label">دقيقة</div>
    </div>

    <div class="time-box">
      <div class="number">${seconds}</div>
      <div class="label">ثانية</div>
    </div>

  `;

}

updateCountdown();

setInterval(updateCountdown,1000);
function createFlower(){

const flower =
document.createElement("div");

flower.classList.add("flower");

flower.innerHTML = "🌸";

flower.style.left =
Math.random()*100 + "vw";

flower.style.animationDuration =
(Math.random()*5+5)+"s";

document.body.appendChild(flower);

setTimeout(()=>{
flower.remove();
},10000);

}

setInterval(createFlower,800);
const sections =
document.querySelectorAll(
".section,.hero,.countdown,.footer"
);

function reveal(){

sections.forEach(sec=>{

const top =
sec.getBoundingClientRect().top;

if(top < window.innerHeight-100){

sec.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
reveal
);

reveal();