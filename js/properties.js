// Sample property data. Replace with real listings.
const PROPERTIES = [
  {
    id: 1,
    title: "2-Bed Apartment, City Centre",
    price: "€950 / month",
    location: "Brussels",
    bedrooms: 2,
    image: "images/property-placeholder.svg",
    featured: true
  },
  {
    id: 2,
    title: "Cosy Studio Near the Park",
    price: "€650 / month",
    location: "Brussels",
    bedrooms: 1,
    image: "images/property-placeholder.svg",
    featured: true
  },
  {
    id: 3,
    title: "3-Bed House with Garden",
    price: "€1,450 / month",
    location: "Brussels",
    bedrooms: 3,
    image: "images/property-placeholder.svg",
    featured: true
  }
];

function propertyCardHtml(property) {
  return `
    <article class="property-card">
      <img src="${property.image}" alt="${property.title}">
      <div class="property-card-body">
        <h3>${property.title}</h3>
        <p class="property-price">${property.price}</p>
        <p class="property-meta">${property.location} &middot; ${property.bedrooms} bed${property.bedrooms > 1 ? "s" : ""}</p>
      </div>
    </article>
  `;
}

function renderProperties(containerId, properties) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = properties.map(propertyCardHtml).join("");
}
