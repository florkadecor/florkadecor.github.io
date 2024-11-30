// Daftar gambar unik, judul, deskripsi, dan url untuk setiap grid
const gridContent = [
    {
        images: ['paket/sre1.png', 'paket/sre2.png', 'paket/sre3.png'],
        title: 'Siraman, Pengajian Engagement',
        description: 'Paket Siraman dan Pengajian, Engangement',
        url: '#paketspe'
    },
    {
        images: ['paket/akad1.png', 'paket/akad2.png', 'paket/akad3.png'],
        title: 'Akad',
        description: 'Paket Untuk Akad',
        url: '#paketakad'
    },
    {
        images: ['paket/outd1.png', 'paket/outd2.png', 'paket/outd3.png', 'paket/outd4.png', 'paket/outd5.png'],
        title: 'Outdoor',
        description: 'Paket Untuk Outdoor',
        url: '#paketoutdoor'
    },
    {
        images: ['paket/ind1.png', 'paket/ind2.png', 'paket/ind3.png', 'paket/ind4.png', 'paket/ind5.png', 'paket/ind6.png', 'paket/ind7.png', 'paket/ind8.png'],
        title: 'Indoor',
        description: 'Paket Untuk Indoor',
        url: '#paketindoor'
    },
    {
        images: ['paket/gr1.png', 'paket/gr2.png', 'paket/gr3.png', 'paket/gr4.png'],
        title: 'Grande',
        description: 'Paket Grande',
        url: '#paketgrande'
    },
    {
        images: ['paket/tr1.png', 'paket/tr2.png', 'paket/tr3.png', 'paket/tr4.png', 'paket/tr5.png', 'paket/tr6.png', 'paket/tr7.png', 'paket/tr8.png'],
        title: 'Tradisional',
        description: 'Paket Tradisional',
        url: '#pakettradisional'
    },
];

function startFlipping(nameofclass) {
    const gridItems = document.querySelectorAll(nameofclass); // '.grid-item'

    gridItems.forEach((item, index) => {
        const content = gridContent[index % gridContent.length]; // Dapatkan konten untuk grid ini
        const images = content.images; // Daftar gambar
        let currentImageIndex = 0; // Lacak gambar yang aktif

        const flipContainer = document.createElement('div');
        const frontImage = document.createElement('img');
        const backImage = document.createElement('img');
        const overlay = document.createElement('div'); // Overlay untuk judul dan deskripsi
        const title = document.createElement('h3');
        const description = document.createElement('p');

        // Setup elemen overlay
        overlay.className = 'overlay';
        title.textContent = content.title;
        description.textContent = content.description;
        overlay.appendChild(title);
        overlay.appendChild(description);

        // Setup flip container dan gambar
        flipContainer.className = 'flip-container';
        frontImage.src = images[currentImageIndex];
        backImage.src = images[(currentImageIndex + 1) % images.length];
        backImage.className = 'back';

        flipContainer.appendChild(frontImage);
        flipContainer.appendChild(backImage);
        item.appendChild(flipContainer);
        item.appendChild(overlay); // Tambahkan overlay ke grid item

        // Tambahkan event listener untuk klik grid item
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            window.location.href = content.url; // Arahkan ke URL ketika grid diklik
        });

        // Flip secara berkala
        setInterval(() => {
            // Flip dimulai
            item.classList.toggle('flipping');

            // Setelah animasi selesai, ubah gambar
            setTimeout(() => {
                item.classList.remove('flipping');

                // Perbarui indeks gambar
                currentImageIndex = (currentImageIndex + 1) % images.length;

                // Tukar gambar depan dan belakang
                frontImage.src = backImage.src;
                backImage.src = images[(currentImageIndex + 1) % images.length];
            }, 800); // Durasi animasi sesuai CSS
        }, 3000 + index * 500); // Interval bergantian antar grid
    });
}

// Panggil fungsi setelah DOM selesai dimuat
/* document.addEventListener('DOMContentLoaded', function() {
    startFlipping('.grid-item');
}); */
