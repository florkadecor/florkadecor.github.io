import {renderHTML,addJSInHead} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";
import {onHashChange,getHash} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";


onHashChange(handleHashChange);
// Memanggil renderHTML dengan callback
renderHTML('content', 'content/home.html', loadSliderJS);

function loadSliderJS() {
    console.log('slider js sudah di load');
    addJSInHead("slider.js");
    // Tambahkan kode tambahan di sini, misalnya inisialisasi event listener
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
            renderHTML('content', 'content/home.html');
            break;
        case "vendors":
            // Kode untuk value2
            renderHTML('content', 'content/vendor.html');
            break;
        case "profile":
            renderHTML('content', 'content/profile.html');
            break;
        case "store":
            renderHTML('content', 'content/paket.html');
            break;
        case "inspirations":
            renderHTML('content', 'content/inspirasi.html');
            break;
        default:
            renderHTML('content', 'content/home.html');
            // Kode untuk kondisi default (opsional)
    }
}
