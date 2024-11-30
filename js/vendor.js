export function renderVendor(elementname,data){//'.feed-grid'
    // Select the feed-grid container
    const feedGrid = document.querySelector(elementname);

    // Generate feed-item elements dynamically
    data.forEach(item => {
    const feedItem = document.createElement('div');
    feedItem.className = 'feed-item';
    
    feedItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}">
        <h3>${item.title}</h3>
        <p>${generateStars(item.rating)} <span>${item.rating}</span></p>
        <p class="description">${item.description}</p>
    `;
    
    feedGrid.appendChild(feedItem);
    });
}

// Function to generate rating stars
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '⭐';
    }
    return stars;
  }