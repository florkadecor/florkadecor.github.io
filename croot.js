import {renderHTML,addJSInHead} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.8/element.js";




// Memanggil renderHTML dengan callback
renderHTML('content', 'content/home.html', afterContentLoaded);

function afterContentLoaded() {
    console.log('Konten telah dimuat dan dimasukkan ke dalam DOM.');
    addJSInHead("slider.js");
    // Tambahkan kode tambahan di sini, misalnya inisialisasi event listener
}
