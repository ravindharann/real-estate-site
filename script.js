const listings = [
    {
      title: "2BHK House in Cuddalore",
      price: "₹45 Lakhs",
      image: "assert/house1.avif"
    },
    {
      title: "Old House in Cuddalore Pudhupalayam",
      price: "₹20.5 Lakhs",
      image: "assert/house2.jpeg"
    },
    {
      title: "New House in Cuddalore",
      price: "₹45 Lakhs",
      image: "assert/house3.jpg"
    }
  ];
  
  const listingsContainer = document.getElementById("listings");
  
  listings.forEach(listing => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${listing.image}" alt="${listing.title}">
      <div class="card-content">
        <h3>${listing.title}</h3>
        <p>Price: ${listing.price}</p>
      </div>
    `;
    listingsContainer.appendChild(card);
  });
  
