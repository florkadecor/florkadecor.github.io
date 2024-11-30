export function runafterGetPaketSPE(data){
    console.log("render html paket");
    renderHTMLPaket(data);
    //perintah yang jalan setelah renderHTMLPaket berhasil di load sempurna
    console.log("buat bisa di klik slidernya");
    runSliderJS();
}

function renderHTMLPaket(data){
    const slider = document.querySelector('.slider');
    const dotsContainer = document.querySelector('.dots');

    data.forEach((item, index) => {
      // Create slide element
      const slide = document.createElement('div');
      slide.className = 'slide';

      slide.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <div class="text-overlay">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      `;
      slider.appendChild(slide);

      // Create dot element
      const dot = document.createElement('span');
      dot.className = 'dot';
      //if (index === 0) dot.classList.add('active'); // Set first dot as active
      dotsContainer.appendChild(dot);
    });
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