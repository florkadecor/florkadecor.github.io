// Function untuk menambahkan loader ke dalam body
export function showLoader() {
    // Mendapatkan elemen dengan ID 'content'
    const content = document.getElementById('content');
    // Ganti isi dengan string HTML loader
    content.innerHTML = `
      <div class="loader-container">
        <img src="/logo.png" alt="Loader" style="width: 150px; height: auto;">
        <p class="loader-text" id="typing-text"></p> <!-- Teks untuk animasi -->
      </div>
    `;

    // Mulai efek mengetik
    const text = "Harap tunggu sebentar...";
    const typingElement = document.getElementById('typing-text');
    let index = 0;
    type(text,typingElement,index); // Jalankan fungsi mengetik
  }
  
  // Function untuk menghapus loader
 export function hideLoader() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
      loader.remove(); // Hapus elemen loader dari DOM
    }
  }

  function type(text,typingElement,index) {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index); // Tambahkan satu karakter
      index++;
      setTimeout(type, 100); // Delay per karakter (100ms)
    }
  }