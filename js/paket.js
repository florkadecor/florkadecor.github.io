export function runafterGetPaketSPE(data){
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
