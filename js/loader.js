// Function untuk menambahkan loader ke dalam body
export function showLoader() {
    // Mendapatkan elemen dengan ID 'content'
    const content = document.getElementById('content');
    // Ganti isi dengan string HTML loader
    content.innerHTML = `
      <div class="loader-container">
      
<svg class="lds-microsoft" width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(0)"><circle cx="81.73413361164941" cy="74.35045716034882" fill="#e15b64" r="5" transform="rotate(340.001 49.9999 50)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="0s"></animateTransform>
</circle><circle cx="74.35045716034882" cy="81.73413361164941" fill="#f47e60" r="5" transform="rotate(348.352 50.0001 50.0001)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.0625s"></animateTransform>
</circle><circle cx="65.3073372946036" cy="86.95518130045147" fill="#f8b26a" r="5" transform="rotate(354.236 50 50)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.125s"></animateTransform>
</circle><circle cx="55.22104768880207" cy="89.65779445495241" fill="#abbd81" r="5" transform="rotate(357.958 50.0002 50.0002)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.1875s"></animateTransform>
</circle><circle cx="44.77895231119793" cy="89.65779445495241" fill="#849b87" r="5" transform="rotate(359.76 50.0064 50.0064)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.25s"></animateTransform>
</circle><circle cx="34.692662705396415" cy="86.95518130045147" fill="#e15b64" r="5" transform="rotate(0.183552 50 50)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.3125s"></animateTransform>
</circle><circle cx="25.649542839651176" cy="81.73413361164941" fill="#f47e60" r="5" transform="rotate(1.86457 50 50)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.375s"></animateTransform>
</circle><circle cx="18.2658663883506" cy="74.35045716034884" fill="#f8b26a" r="5" transform="rotate(5.45126 50 50)">
  <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.4375s"></animateTransform>
</circle><animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s"></animateTransform></g></svg>
        <img src="/logo.png" alt="Loader" style="width: 150px; height: auto;">
        <p class="loader-text">Mohon tunggu sebentar...</p>
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