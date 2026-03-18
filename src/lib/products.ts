export const products = [
  {
    id: 1,
    name: "Blue Crabs",
    description:
      "Experience the rich, buttery taste of freshly caught Atlantic salmon, perfect for grilling, baking, or pan-searing. Packed with omega-3s and protein, each fillet is carefully selected for premium quality and freshness, ensuring a melt-in-your-mouth experience.",
    price: 19.2,
    images: [
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
      "/product1.png",
    ],
    weights: [1, 2, 3, 5],
    unit: "lb",
    rating: 4.2,
    categoryId: 1,
    isPreorder: true, // NEW
    preorderPickupDate: "2026-04-05", // NEW
  },
  {
    id: 2,
    name: "Craw Fish",
    description:
      "Indulge in succulent king crab legs, hand-selected for their size, flavor, and freshness. Perfect for steaming, boiling, or grilling, these crab legs deliver sweet, tender meat that's ideal for gourmet meals at home.",
    price: 32.45,
    images: [
      "/product2.png",
      "/product2.png",
      "/product2.png",
      "/product2.png",
      "/product2.png",
    ],
    weights: [1, 2, 4],
    unit: "dozan",
    rating: 4.8,
    categoryId: 2,
    isPreorder: true, // NEW
    preorderPickupDate: "2026-04-10", // NEW
  },
  {
    id: 3,
    name: "Shrimp",
    description:
      "Our tiger prawns are large, juicy, and freshly sourced, perfect for grilling, stir-frying, or making a delicious prawn cocktail. Rich in protein and low in fat, they offer a sweet and tender bite every time.",
    price: 24.99,
    images: [
      "/product3.png",
      "/product3.png",
      "/product3.png",
      "/product3.png",
      "/product3.png",
    ],
    weights: [0.5, 1, 1.5, 2],
    unit: "lb",
    rating: 4.5,
    categoryId: 3,
    isPreorder: false, // Not pre-order
  },
];

export const categories = [
  {
    id: 1,
    name: "Blue Crabs",
    description: "Live crabs perfect for steaming and boiling.",
    image: "/product1.png",
    productCount: 1,
  },
  {
    id: 2,
    name: "Craw Fish",
    description: "Live crawfish fish ideal for seafood boils.",
    image: "/product2.png",
    productCount: 1,
  },
  {
    id: 3,
    name: "Shrimp",
    description: "Juicy shrimp for grilling and curries.",
    image: "/product3.png",
    productCount: 1,
  }
];
