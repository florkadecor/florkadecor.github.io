// Function untuk menambahkan loader ke dalam body
export function showLoader() {
    // Mendapatkan elemen dengan ID 'content'
    const content = document.getElementById('content');
    // Membuat elemen div untuk loader
    const loader = document.createElement('div');
    loader.className = 'loader-container'; // Tambahkan class CSS untuk container loader
  
    // Menambahkan elemen gambar ke dalam loader
    const img = document.createElement('img');
    img.src = '/logo.png'; // Path ke gambar logo
    img.alt = 'Loader';
    img.style.width = '150px'; // Atur ukuran gambar
    img.style.height = 'auto';
  
    // Menambahkan elemen teks di bawah gambar
    const text = document.createElement('p');
    text.innerText = 'Harap tunggu sebentar...'; // Teks loader
    text.className = 'loader-text'; // Tambahkan class untuk teks (untuk styling CSS)
  
    // Tambahkan gambar dan teks ke dalam loader container
    loader.appendChild(img);
    loader.appendChild(text);
    content.innerHTML=loader;
  
    // Ganti konten di dalam #content dengan loader
    content.replaceChildren(loader);
    // Tambahkan loader ke body
    //content.appendChild(loader);
    // Ganti konten asli dengan loader
    //content.replaceChild(loader, content.firstChild);
  }
  
  // Function untuk menghapus loader
 export function hideLoader() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
      loader.remove(); // Hapus elemen loader dari DOM
    }
  }