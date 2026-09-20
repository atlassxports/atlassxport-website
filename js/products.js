/**
 * Central product data. To add a product, add one object below —
 * no other file needs to change. It will appear automatically in
 * the homepage grid, the contact form and product.html?product=<slug>.
 *
 * slogan       short bold line shown under the product name
 * description  paragraph shown on the product page
 * region/season reflect Morocco's general growing areas and export
 *              calendar for each crop (industry-sourced).
 * packaging / calibre read "Available on request" until real figures
 * are confirmed — never invent specifications.
 */
window.PRODUCTS = [
  {
    slug: "watermelons",
    name: "Watermelons",
    slogan: "Sun-ripened. Fresh. Moroccan.",
    description: "From Morocco’s leading watermelon-growing regions, we source throughout the season to offer fresh, carefully selected fruit with the colour, sweetness and consistency international markets expect.",
    image: "assets/photos/watermelon.jpg",
    color: "#c81e3e",
    flagship: true,
    season: "April – September",
    region: "Zagora, Marrakech & Beni Mellal",
    packaging: "Available on request",
    calibre: "Available on request",
  },
  {
    slug: "citrus",
    name: "Citrus",
    slogan: "Juicy, bright & full of flavour.",
    description: "Moroccan citrus benefits from abundant sunshine and a long growing season. We work with trusted growers in Morocco’s established citrus-growing regions to bring carefully selected fruit from orchard to international markets.",
    image: "assets/photos/orange.jpg",
    color: "#e8720c",
    season: "November – June",
    region: "Souss-Massa, Berkane & Gharb",
    packaging: "Available on request",
    calibre: "Available on request",
  },
  {
    slug: "pomegranates",
    name: "Pomegranates",
    slogan: "Deep colour. Bold flavour.",
    description: "Moroccan pomegranates combine vibrant colour with a naturally sweet-tart flavour. We source selected fruit from trusted producers, ready for fresh markets at home and abroad.",
    image: "assets/photos/pomegranate.jpg",
    color: "#7a1442",
    season: "Mid-September – November",
    region: "Beni Mellal & Fès-Meknès",
    packaging: "Available on request",
    calibre: "Available on request",
  },
  {
    slug: "tomatoes",
    name: "Tomatoes",
    slogan: "Grown under the Moroccan sun.",
    description: "From classic varieties to market-specific selections, our tomatoes are sourced from established Moroccan growing areas and selected for freshness, appearance and consistency.",
    image: "assets/photos/tomato.jpg",
    color: "#8c1116",
    season: "October – May",
    region: "Souss-Massa (Agadir)",
    packaging: "Available on request",
    calibre: "Available on request",
  },
  {
    slug: "peppers",
    name: "Peppers",
    slogan: "Crisp, colourful & carefully selected.",
    description: "Morocco’s warm growing conditions produce vibrant, high-quality peppers. We source according to variety, colour, size and the needs of each destination market.",
    image: "assets/photos/pepper.jpg",
    color: "#145c39",
    season: "Year-round · peak April–August",
    region: "Souss-Massa (Agadir)",
    packaging: "Available on request",
    calibre: "Available on request",
  },
];
