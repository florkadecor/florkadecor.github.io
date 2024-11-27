// Daftar gambar unik, judul, dan deskripsi untuk setiap grid
const gridContent = [
    {
        images: ['grid1_image1.jpg', 'grid1_image2.jpg', 'grid1_image3.jpg'],
        title: 'Judul 1',
        description: 'Deskripsi untuk grid 1'
    },
    {
        images: ['grid2_image1.jpg', 'grid2_image2.jpg', 'grid2_image3.jpg'],
        title: 'Judul 2',
        description: 'Deskripsi untuk grid 2'
    },
    {
        images: ['grid3_image1.jpg', 'grid3_image2.jpg', 'grid3_image3.jpg'],
        title: 'Judul 3',
        description: 'Deskripsi untuk grid 3'
    },
    {
        images: ['grid4_image1.jpg', 'grid4_image2.jpg', 'grid4_image3.jpg'],
        title: 'Judul 4',
        description: 'Deskripsi untuk grid 4'
    },
    {
        images: ['grid5_image1.jpg', 'grid5_image2.jpg', 'grid5_image3.jpg'],
        title: 'Judul 5',
        description: 'Deskripsi untuk grid 5'
    },
    {
        images: ['grid6_image1.jpg', 'grid6_image2.jpg', 'grid6_image3.jpg'],
        title: 'Judul 6',
        description: 'Deskripsi untuk grid 6'
    },
];

function startFlipping(nameofclass) {
    const gridItems = document.querySelectorAll(nameofclass);//'.grid-item'

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
