// Function untuk menambahkan loader ke dalam body
export function showLoader() {
    // Mendapatkan elemen dengan ID 'content'
    const content = document.getElementById('content');
    // Ganti isi dengan string HTML loader
    content.innerHTML = `
      <div class="loader-container">
        <img src="/logo.png" alt="Loader" style="width: 150px; height: auto;">
        <p class="loader-text">Harap tunggu sebentar...</p>
      </div>
    `;
  }
  
  // Function untuk menghapus loader
 export function hideLoader() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
      loader.remove(); // Hapus elemen loader dari DOM
    }
  }