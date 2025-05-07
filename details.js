// Dummy data (same as in script.js)
const listings = [
    {
      id: 1,
      title: "2BHK House in Cuddalore",
      price: "₹45 Lakhs",
      image: "assert/house1.avif",
      description: "Spacious 2BHK with garden and parking in a calm neighborhood."
    },
    {
      id: 2,
      title: "Old House in Cuddalore Pudhupalayam",
      price: "₹20.5 Lakhs",
      image: "assert/house2.jpeg",
      description: "Renovation-friendly house in a prime location."
    },
    {
      id: 3,
      title: "New House in Cuddalore",
      price: "₹45 Lakhs",
      image: "assert/house3.jpg",
      description: "Modern house with all amenities and a large balcony."
    }
  ];
  
  // Get query param
  const urlParams = new URLSearchParams(window.location.search);
  const houseId = parseInt(urlParams.get("house"));
  
  const house = listings.find(h => h.id === houseId);
  const detailsContainer = document.getElementById("details");
  
  if (house) {
    detailsContainer.innerHTML = `
      <section class="details">
        <h2>${house.title}</h2>
        <img src="${house.image}" alt="${house.title}" style="width:100%; max-height:300px; object-fit:cover; border-radius:8px;">
        <p><strong>Price:</strong> ${house.price}</p>
        <p><strong>Description:</strong> ${house.description}</p>
      </section>
    `;
  } else {
    detailsContainer.innerHTML = `<p>House not found.</p>`;
  }
  
