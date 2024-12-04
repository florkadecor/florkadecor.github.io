import {renderHTML,addJSInHead,onClick} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";
import {onHashChange,getHash} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";
import {get} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/api.js";
import {renderVendor} from "/js/vendor.js";
import {runafterGetPaket} from "/js/paket.js";
import {showLoader} from "/js/loader.js";

onClick("phoneiconcall",waFlorka);
onClick("barsicon",barsMenu);

function barsMenu(){
    window.open('https://www.instagram.com/florkadeco.id', '_blank');
}
//call wa atau wa dulu
function waFlorka(){
    window.open('https://wa.me/6285721000489', '_blank');
}

onHashChange(handleHashChange);
// Memanggil renderHTML dengan callback
renderHTML('content', 'content/home.html', initLoad);



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
            showLoader();
            // Kode untuk value1
            renderHTML('content', 'content/home.html', unmuteButtonVideoBG);
            footerMenuSetActive();
            break;
        case "vendors":
            showLoader();
            // Kode untuk value2
            renderHTML('content', 'content/vendor.html', runSliderJSandTab);
            footerMenuSetActive();
            break;
        case "profile":
            showLoader();
            renderHTML('content', 'content/profile.html', runSliderJS);
            footerMenuSetActive();
            break;
        case "store":
            showLoader();
            renderHTML('content', 'content/paket.html', runSliderandFlipJS);
            footerMenuSetActive();
            break;
        case "paketspe":
            showLoader();
            renderHTML('content', 'content/paketcontent.html', runPaketSPE);
            footerMenuSetActive();
            break;
        case "paketakad":
            showLoader();
            renderHTML('content', 'content/paketcontent.html', runPaketAkad);
            footerMenuSetActive();
            break;
        case "paketoutdoor":
            showLoader();
            renderHTML('content', 'content/paketcontent.html', runPaketOutdoor);
            footerMenuSetActive();
            break;
        case "paketindoor":
            renderHTML('content', 'content/paketcontent.html', runPaketIndoor);
            footerMenuSetActive();
            break;
        case "paketgrande":
            showLoader();
            renderHTML('content', 'content/paketcontent.html', runPaketGrande);
            footerMenuSetActive();
            break;
        case "pakettradisional":
            showLoader();
            renderHTML('content', 'content/paketcontent.html', runPaketTradisional);
            footerMenuSetActive();
            break;
        case "inspirations":
            showLoader();
            renderHTML('content', 'content/inspirasi.html', runSliderJS);
            footerMenuSetActive();
            break;
        default:
            showLoader();
            renderHTML('content', 'content/home.html', unmuteButtonVideoBG);
            footerMenuSetActive();
            // Kode untuk kondisi default (opsional)
    }
}

function runPaketSPE(){
    get("/data/paket/spe/spe.json",runafterGetPaket);
}
function runPaketAkad(){
    get("/data/paket/akad/akad.json",runafterGetPaket);
}
function runPaketOutdoor(){
    get("/data/paket/outdoor/outdoor.json",runafterGetPaket);
}
function runPaketIndoor(){
    get("/data/paket/indoor/indoor.json",runafterGetPaket);
}
function runPaketGrande(){
    get("/data/paket/grande/grande.json",runafterGetPaket);
}
function runPaketTradisional(){
    get("/data/paket/tradisional/tradisional.json",runafterGetPaket);
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

function initLoad(){
    unmuteButtonVideoBG();
    loadSliderJS();
}

function unmuteButtonVideoBG(){
    console.log("js unmute button");
    document.getElementById('unmute-btn').addEventListener('click', function () {
        const video = document.getElementById('background-video');
    
        // Toggle mute/unmute
        if (video.muted) {
            video.muted = false;
            this.textContent = 'Mute';
        } else {
            video.muted = true;
            this.textContent = 'Unmute';
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
    //isi dulu vendornya
    get("/data/vendor/wo/wo.json",runafterGetVendorWO);
    get("/data/vendor/venue/venue.json",runafterGetVendorVenue);
    //tab diaktivasi
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

function runafterGetVendorWO(result){
    console.log(result);
    renderVendor("#feed-grid-wo",result);
}

function runafterGetVendorVenue(result){
    console.log(result);
    renderVendor("#feed-grid-venue",result);
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


