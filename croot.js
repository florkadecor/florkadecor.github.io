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
            footerMenuSetActive();
            break;
        case "vendors":
            // Kode untuk value2
            renderHTML('content', 'content/vendor.html', runSliderJS);
            footerMenuSetActive();
            break;
        case "profile":
            renderHTML('content', 'content/profile.html', runSliderJS);
            footerMenuSetActive();
            break;
        case "store":
            renderHTML('content', 'content/paket.html', runSliderandFlipJS);
            footerMenuSetActive();
            break;
        case "inspirations":
            renderHTML('content', 'content/inspirasi.html', runSliderJS);
            footerMenuSetActive();
            break;
        default:
            renderHTML('content', 'content/home.html', runSliderJS);
            footerMenuSetActive();
            // Kode untuk kondisi default (opsional)
    }
}


function footerMenuSetActive(){
    // Dapatkan semua elemen menu
    const menuItems = document.querySelectorAll('.menu-item');

    // Ambil href saat ini (misalnya, dari URL browser atau atribut yang dipilih)
    const currentHref = window.location.hash; // Mengambil fragment dari URL, seperti #home

    // Loop melalui elemen menu untuk menyesuaikan dengan href
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentHref) {
            // Tambahkan kelas aktif ke elemen yang sesuai
            item.classList.add('active');
        } else {
            // Hapus kelas aktif dari elemen lain
            item.classList.remove('active');
        }
    });
}



function loadSliderJS() {
    console.log('slider js sudah di load');
    addJSInHead("slider.js");
    // Tambahkan kode tambahan di sini, misalnya inisialisasi event listener
}

function runSliderJS() {
    console.log('slider js sudah di run');
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
}

function runSliderJSandTab() {
    console.log('slider js sudah di run');
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
    //tab
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.venue-feed');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all tab contents
            contents.forEach(content => (content.style.display = 'none'));
            // Show content for the selected tab
            const selectedTab = tab.getAttribute('data-tab');
            document.getElementById(selectedTab).style.display = 'block';
        });
    });

}

function runSliderandFlipJS() {
    console.log('slider js sudah di run');
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
    startFlipping('.grid-item');
}


