// إنشاء قلوب وورود عشوائية
const colors = ["#ff4b5c", "#ff99cc", "#ff66aa"];
const container = document.getElementById('hearts-flowers');

for(let i=0; i<50; i++){
    const el = document.createElement('div');
    el.className = Math.random() > 0.5 ? "heart" : "flower";
    el.style.left = Math.random() * 100 + "vw";
    el.style.width = el.style.height = 10 + Math.random() * 20 + "px";
    el.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration = 5 + Math.random()*5 + "s";
    container.appendChild(el);
}

// زر الأغنية
const musicBtn = document.getElementById('musicBtn');
const song = document.getElementById('song');

musicBtn.addEventListener('click', () => {
    if(song.paused){
        song.play();
        musicBtn.classList.add('playing');
    } else {
        song.pause();
        musicBtn.classList.remove('playing');
    }
});

// الأزرار التفاعلية
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const response = document.getElementById('response');

btn1.addEventListener('click', () => {
    response.textContent = "لقد اخترت الاختيار 1";
    response.style.display = "block";
    btn2.style.display = "none";
});

btn2.addEventListener('click', () => {
    response.textContent = "لقد اخترت الاختيار 2";
    response.style.display = "block";
    btn1.style.display = "none";
});
