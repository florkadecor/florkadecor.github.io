import {renderHTML,addJSInHead,onClick} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";
import {onHashChange,getHash} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";



onClick("phoneiconcall",waFlorka);

function waFlorka(){
    window.open('https://wa.me/6285721000489', '_blank');
}

onHashChange(handleHashChange);
// Memanggil renderHTML dengan callback
renderHTML('content', 'content/home.html', loadSliderJS);

function loadSliderJS() {
    console.log('slider js sudah di load');
    addJSInHead("slider.js");
    // Tambahkan kode tambahan di sini, misalnya inisialisasi event listener
}

function runSliderJS() {
    console.log('run slider');
    // Menambahkan event listener untuk setiap slide
    slides.forEach((slide, index) => {
        const slideImage = slide.querySelector('img');
        slideImage.addEventListener('dragstart', (e) => e.preventDefault());

        // Touch events
        slide.addEventListener('touchstart', touchStart(index));
        slide.addEventListener('touchend', touchEnd);
        slide.addEventListener('touchmove', touchMove);

        // Mouse events
        slide.addEventListener('mousedown', touchStart(index));
        slide.addEventListener('mouseup', touchEnd);
        slide.addEventListener('mousemove', touchMove);
        slide.addEventListener('mouseleave', touchEnd);
    });
    // Auto-slide (opsional)
    setInterval(() => {
        if (!isDragging) {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    }, 5000);

}


function handleHashChange(event) {
    console.log('Hash changed!');
    console.log('Old URL:', event.oldURL);
    console.log('New URL:', event.newURL);

    // Ambil hash dari URL
    const currentHash = getHash();
    console.log('Current Hash:', currentHash);

    // Tambahkan logika berdasarkan hash
    switch(currentHash) {
        case "home":
            // Kode untuk value1
            renderHTML('content', 'content/home.html', runSliderJS);
            break;
        case "vendors":
            // Kode untuk value2
            renderHTML('content', 'content/vendor.html', runSliderJS);
            break;
        case "profile":
            renderHTML('content', 'content/profile.html', runSliderJS);
            break;
        case "store":
            renderHTML('content', 'content/paket.html', runSliderJS);
            break;
        case "inspirations":
            renderHTML('content', 'content/inspirasi.html', runSliderJS);
            break;
        default:
            renderHTML('content', 'content/home.html', runSliderJS);
            // Kode untuk kondisi default (opsional)
    }
}
