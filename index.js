// 1️⃣ إنشاء القلوب والزهور المتحركة
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
    if(item.classList.contains('heart')){
        item.style.backgroundColor = '#ff4b5c';
        item.style.clipPath = 'polygon(50% 0%, 61% 8%, 68% 23%, 68% 38%, 50% 60%, 32% 38%, 32% 23%, 39% 8%)';
    }
    if(item.classList.contains('flower')){
        item.style.backgroundColor = '#ffb6c1';
        item.style.borderRadius = '50%';
    }
    document.body.appendChild(item);
}

// 2️⃣ حركة القلوب والزهور
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(-10%) scale(1); }
    50% { transform: translateY(50%) scale(1.2); }
    100% { transform: translateY(110%) scale(1); }
}
.background-item { position: absolute; z-index: 0; }
`;
document.head.appendChild(style);

// 3️⃣ إنشاء زر الأغنية
const musicBtn = document.createElement('div');
musicBtn.id = 'musicBtn';
musicBtn.style.width = '40px';
musicBtn.style.height = '40px';
musicBtn.style.backgroundColor = '#ff4b5c';
musicBtn.style.position = 'fixed';
musicBtn.style.bottom = '20px';
musicBtn.style.right = '20px';
musicBtn.style.cursor = 'pointer';
musicBtn.style.display = 'flex';
musicBtn.style.justifyContent = 'center';
musicBtn.style.alignItems = 'center';
musicBtn.style.transform = 'rotate(-45deg)';
musicBtn.style.transition = 'transform 0.3s, background-color 0.5s';
document.body.appendChild(musicBtn);

const song = document.createElement('audio');
song.id = 'song';
song.src = 'Somewhere Only We Know.mp3';
document.body.appendChild(song);

musicBtn.addEventListener('click', () => {
    if(song.paused){
        song.play();
        musicBtn.style.transform = 'rotate(-45deg) scale(1.2)';
        musicBtn.style.backgroundColor = '#ff1f3d';
    } else {
        song.pause();
        musicBtn.style.transform = 'rotate(-45deg) scale(1)';
        musicBtn.style.backgroundColor = '#ff4b5c';
    }
});

// 4️⃣ إنشاء الأزرار التفاعلية
const btnContainer = document.createElement('div');
btnContainer.style.display = 'flex';
btnContainer.style.justifyContent = 'center';
btnContainer.style.margin = '30px';
btnContainer.style.gap = '20px';

const btn1 = document.createElement('button');
btn1.textContent = 'اختيار 1';
btn1.style.padding = '12px 25px';
btn1.style.fontSize = '16px';
btn1.style.borderRadius = '10px';
btn1.style.border = 'none';
btn1.style.cursor = 'pointer';
btn1.style.backgroundColor = '#ff4b5c';
btn1.style.color = '#fff';
btn1.style.transition = 'background-color 0.3s';

const btn2 = document.createElement('button');
btn2.textContent = 'اختيار 2';
btn2.style.padding = '12px 25px';
btn2.style.fontSize = '16px';
btn2.style.borderRadius = '10px';
btn2.style.border = 'none';
btn2.style.cursor = 'pointer';
btn2.style.backgroundColor = '#ff4b5c';
btn2.style.color = '#fff';
btn2.style.transition = 'background-color 0.3s';

btnContainer.appendChild(btn1);
btnContainer.appendChild(btn2);
document.body.appendChild(btnContainer);

const response = document.createElement('div');
response.id = 'response';
response.style.textAlign = 'center';
response.style.fontSize = '18px';
response.style.marginTop = '20px';
response.style.display = 'none';
document.body.appendChild(response);

// 5️⃣ وظائف الأزرار
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
