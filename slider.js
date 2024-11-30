let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// Fungsi untuk memperbarui slide
function showSlide(index) {
    currentIndex = index;
    currentTranslate = -currentIndex * window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    document.querySelectorAll('.dot')[currentIndex].classList.add('active');
}

// Fungsi untuk mengatur posisi slider
function setSliderPosition() {
    document.querySelector('.slider').style.transform = `translateX(${currentTranslate}px)`;
}

// Fungsi ketika touch atau mouse mulai
function touchStart(index) {
    return function (event) {
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        currentIndex = index;
    };
}

// Fungsi ketika touch atau mouse berhenti
function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < document.querySelectorAll('.slide').length - 1) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    showSlide(currentIndex);
}

// Fungsi ketika touch atau mouse bergerak
function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
    }
}

// Mendapatkan posisi X dari touch atau mouse
function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// Animasi agar pergerakan terasa smooth
function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

// Auto-slide (opsional)
