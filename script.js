// ===============================
// TYPEWRITER EFFECT
// ===============================

const text =
`Happy Birthday HAMZA ❤️

You are not just my best friend,
you are one of the most beautiful
people in my life.

May your smile never fade,
May your dreams come true,
May Allah bless you always.

Enjoy your special day. 🎂❤️`;

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,45);

    }

}

typingEffect();


// ===============================
// SURPRISE BUTTON
// ===============================

const btn = document.getElementById("surpriseBtn");

btn.onclick = function(){

    startFireworks();

    createConfetti();

    document.querySelector(".letter")
    .scrollIntoView({

        behavior:"smooth"

    });

}


// ===============================
// HEARTS
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=
    4+Math.random()*6+"s";

    document.getElementById("hearts")
    .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);


// ===============================
// BALLOONS
// ===============================

const colors=[
"red",
"blue",
"yellow",
"green",
"purple"
];

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon "+colors[
Math.floor(Math.random()*colors.length)
];

balloon.style.left=
Math.random()*100+"%";

balloon.style.animationDuration=
8+Math.random()*8+"s";

document.getElementById("balloons")
.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},16000);

}

setInterval(createBalloon,900);// ===============================
// FIREWORKS
// ===============================

function startFireworks(){

    for(let i=0;i<35;i++){

        setTimeout(()=>{

            const fire=document.createElement("div");

            fire.className="firework";

            fire.style.left=Math.random()*window.innerWidth+"px";

            fire.style.top=Math.random()*window.innerHeight+"px";

            fire.style.background=
            `hsl(${Math.random()*360},100%,60%)`;

            document.body.appendChild(fire);

            setTimeout(()=>{

                fire.remove();

            },1400);

        },i*120);

    }

}

// ===============================
// CONFETTI
// ===============================

function createConfetti(){

    for(let i=0;i<150;i++){

        const conf=document.createElement("div");

        conf.style.position="fixed";
        conf.style.width="10px";
        conf.style.height="10px";
        conf.style.left=Math.random()*100+"vw";
        conf.style.top="-20px";
        conf.style.background=
        `hsl(${Math.random()*360},100%,60%)`;
        conf.style.opacity="1";
        conf.style.zIndex="9999";
        conf.style.borderRadius="50%";

        document.body.appendChild(conf);

        const speed=3+Math.random()*4;
        const drift=(Math.random()-0.5)*2;

        let y=-20;
        let x=parseFloat(conf.style.left);

        const fall=setInterval(()=>{

            y+=speed;
            x+=drift;

            conf.style.top=y+"px";
            conf.style.left=x+"px";

            if(y>window.innerHeight){

                clearInterval(fall);
                conf.remove();

            }

        },20);

    }

}

// ===============================
// SPARKLES
// ===============================

function sparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(sparkle,180);

// ===============================
// SHOOTING STARS
// ===============================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting";

    star.style.top=Math.random()*250+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },5000);

}

setInterval(shootingStar,6000);// ===============================
// MUSIC CONTROLS
// ===============================

const music = document.getElementById("music");

// Browsers autoplay ko block kar sakte hain.
window.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// ===============================
// MOUSE GLOW
// ===============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "25px";
glow.style.height = "25px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "#ff4fa3";
glow.style.boxShadow = "0 0 35px #ff4fa3";
glow.style.zIndex = "99999";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 12 + "px";
    glow.style.top = e.clientY - 12 + "px";

});

// ===============================
// HEART CURSOR
// ===============================

document.addEventListener("click", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "22px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "1.5s";
    heart.style.zIndex = "99999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.top = (e.clientY - 120) + "px";
        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 1500);

});

// ===============================
// CANDLE EFFECT
// ===============================

const candle = document.querySelector(".candle");

if (candle) {

    candle.addEventListener("click", () => {

        candle.style.opacity = ".4";

        alert("🎂 Wish Made Successfully!\n\nHappy Birthday HAMZA ❤️");

    });

}

// ===============================
// SURPRISE MESSAGE
// ===============================

btn.addEventListener("mouseover", () => {

    btn.innerHTML = "🎉 Click Me 🎉";

});

btn.addEventListener("mouseleave", () => {

    btn.innerHTML = "🎁 Open Surprise";

});

// ===============================
// PAGE LOADED
// ===============================

window.onload = () => {

    console.log("Happy Birthday HAMZA Website Loaded ❤️");

};// ==========================
// LOCK SCREEN
// ==========================

const PASSWORD = "0408";

function unlock(){

    let pin = document.getElementById("pin").value;

    if(pin===PASSWORD){

        document.getElementById("lockScreen").style.display="none";

        music.play().catch(()=>{});

        startFireworks();

        createConfetti();

    }

    else{

        document.getElementById("error").innerHTML="❌ Incorrect PIN";

        document.getElementById("pin").value="";

    }

}