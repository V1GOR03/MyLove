// إنشاء القلوب والزهور المتحركة
const colors = ['heart','flower'];
for(let i=0; i<30; i++){
    let item = document.createElement('div');
    item.classList.add('background-item', colors[Math.floor(Math.random()*colors.length)]);
    item.style.position = 'absolute';
    item.style.left = Math.random()*100 + 'vw';
    item.style.top = Math.random()*100 + 'vh';
    item.style.width = 15 + Math.random()*25 + 'px';
    item.style.height = item.style.width;
    item.style.opacity = 0.8;
    item.style.animation = `float ${5 + Math.random()*5}s linear infinite`;
    // قلب
    if(item.classList.contains('heart')){
        item.style.backgroundColor = '#ff4b5c';
        item.style.clipPath = 'polygon(50% 0%, 61% 8%, 68% 23%, 68% 38%, 50% 60%, 32% 38%, 32% 23%, 39% 8%)';
    }
    // زهرة
    if(item.classList.contains('flower')){
        item.style.backgroundColor = '#ffb6c1';
        item.style.borderRadius = '50%';
    }
    document.body.appendChild(item);
}

// حركة القلوب والزهور (keyframes)
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(-10%) scale(1); }
    50% { transform: translateY(50%) scale(1.2); }
    100% { transform: translateY(110%) scale(1); }
}
`;
document.head.appendChild(style);

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
