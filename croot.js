import {renderHTML,addJSInHead,onClick} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";
import {onHashChange,getHash} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";



onClick("phoneiconcall",waFlorka);

//call wa atau wa dulu
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
    console.log('slider js sudah di run');
    //addJSInHead("sliderrun.js");
    currentIndex = 0;
    isDragging = false;
    startPos = 0;
    currentTranslate = 0;
    prevTranslate = 0;
    // Menambahkan event listener untuk setiap slide
    document.querySelectorAll('.slide').forEach((slide, index) => {
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
    // Tambahkan kode tambahan di sini, misalnya inisialisasi event listener
    // Auto-slide (opsional)
/*     setInterval(() => {
        if (!isDragging) {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
            showSlide(currentIndex);
        }
    }, 5000); */
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
