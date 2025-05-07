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
  card.addEventListener("click", () => {
    window.location.href = `details.html?house=${listing.id}`;
  });

  listingsContainer.appendChild(card);
});
