export const stockProducts = Array.from({ length: 24 }, (_, i) => {
  const index = i + 1;
  const imageNumber = ((i % 4) + 1).toString().padStart(2, "0");

  const names = [
    "Classic Black Tee",
    "White Hoodie",
    "Denim Jeans",
    "Black Sneakers",
  ];
  const colors = ["Black", "White", "Denim Blue", "Gray"];
  const sizesList = [
    ["S", "M", "L", "XL"],
    ["S", "M", "L"],
    ["28", "30", "32", "34"],
    ["8", "9", "10", "11"],
  ];
  const catagory = ["latest", "top"];

  return {
    id: index,
    name: names[i % names.length],
    href: "#",
    imageSrc: `https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-${imageNumber}.jpg`,
    imageAlt: `Preview of ${names[i % names.length]}`,
    price: 30 + (i % 5) * 10,
    originalPrice: 50 + (i % 5) * 10,
    color: colors[i % colors.length],
    sizes: sizesList[i % sizesList.length],
    rating: parseFloat((4.5 + (i % 5) * 0.1).toFixed(1)), // e.g. 4.5 to 4.9
    reviews: 60 + i * 7,
    catagory: catagory[i % catagory.length],
  };
});
