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
