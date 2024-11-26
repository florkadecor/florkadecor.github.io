import {renderHTML,addJSInHead} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/url.js";


onHashChange(handleHashChange);
// Memanggil renderHTML dengan callback
renderHTML('content', 'content/home.html', afterContentLoaded);

function afterContentLoaded() {
    console.log('Konten telah dimuat dan dimasukkan ke dalam DOM.');
    addJSInHead("slider.js");
    // Tambahkan kode tambahan di sini, misalnya inisialisasi event listener
}



function handleHashChange(event) {
    console.log('Hash changed!');
    console.log('Old URL:', event.oldURL);
    console.log('New URL:', event.newURL);

    // Ambil hash dari URL
    const currentHash = window.location.hash;
    console.log('Current Hash:', currentHash);

    // Tambahkan logika berdasarkan hash
    if (currentHash === '#section1') {
        console.log('Navigating to Section 1');
    } else if (currentHash === '#section2') {
        console.log('Navigating to Section 2');
    } else {
        console.log('Navigating to default section');
    }
}
