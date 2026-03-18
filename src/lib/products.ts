export const products = [
  {
    id: 1,
    name: "Blue Crabs",
    description:
      "Experience the rich, buttery taste of freshly caught Atlantic salmon, perfect for grilling, baking, or pan-searing. Packed with omega-3s and protein, each fillet is carefully selected for premium quality and freshness, ensuring a melt-in-your-mouth experience.",
    price: 19.2,
    images: [
      "/product1.png",
      "/crabs2.jpg",
      "/crabs3.jpg",
      "/crabs4.jpg",
      "/crabs5.jpg",
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
    name: "Obsters",
    description:
      "Experience the rich, buttery taste of freshly caught Atlantic salmon, perfect for grilling, baking, or pan-searing. Packed with omega-3s and protein, each fillet is carefully selected for premium quality and freshness, ensuring a melt-in-your-mouth experience.",
    price: 19.2,
    images: [
      "/oysters1.jpg",
      "/oysters2.jpg",
      "/oysters3.jpg",
      "/oysters4.jpg",
      "/oysters5.jpg",
    ],
    weights: [1, 2, 3, 5],
    unit: "lb",
    rating: 4.2,
    categoryId: 1,
    isPreorder: true, // NEW
    preorderPickupDate: "2026-04-05", // NEW
  },
  {
    id: 3,
    name: "Mussels",
    description:
      "Experience the rich, buttery taste of freshly caught Atlantic salmon, perfect for grilling, baking, or pan-searing. Packed with omega-3s and protein, each fillet is carefully selected for premium quality and freshness, ensuring a melt-in-your-mouth experience.",
    price: 19.2,
    images: [
      "/mussels1.jpg",
      "/mussels2.jpg",
      "/mussels3.jpg",
      "/mussels4.jpg",
      "/mussels5.jpg",
    ],
    weights: [1, 2, 3, 5],
    unit: "lb",
    rating: 4.2,
    categoryId: 1,
    isPreorder: true, // NEW
    preorderPickupDate: "2026-04-05", // NEW
  },


  {
    id: 4,
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
    id: 5,
    name: "Red Swamp Crawfish",
    description:
      "Indulge in succulent king crab legs, hand-selected for their size, flavor, and freshness. Perfect for steaming, boiling, or grilling, these crab legs deliver sweet, tender meat that's ideal for gourmet meals at home.",
    price: 32.45,
    images: [
      "/red-swamp-crawfish5.jpg",
      "/red-swamp-crawfish1.jpg",
      "/red-swamp-crawfish2.jpg",
      "/red-swamp-crawfish3.jpg",
      "/red-swamp-crawfish4.jpg",

    ],
    weights: [1, 2, 4],
    unit: "dozan",
    rating: 4.8,
    categoryId: 2,
    isPreorder: true, // NEW
    preorderPickupDate: "2026-04-10", // NEW
  },
  {
    id: 6,
    name: "Rusty Crawfish",
    description:
      "Indulge in succulent king crab legs, hand-selected for their size, flavor, and freshness. Perfect for steaming, boiling, or grilling, these crab legs deliver sweet, tender meat that's ideal for gourmet meals at home.",
    price: 32.45,
    images: [
      "/rusty-crawfish1.jpg",
      "/rusty-crawfish2.jpg",
      "/rusty-crawfish3.jpg",
      "/rusty-crawfish4.jpg",
      "/rusty-crawfish5.jpg",
    ],
    weights: [1, 2, 4],
    unit: "dozan",
    rating: 4.8,
    categoryId: 2,
    isPreorder: true, // NEW
    preorderPickupDate: "2026-04-10", // NEW
  },



  {
    id: 7,
    name: "Shrimp",
    description:
      "Our tiger prawns are large, juicy, and freshly sourced, perfect for grilling, stir-frying, or making a delicious prawn cocktail. Rich in protein and low in fat, they offer a sweet and tender bite every time.",
    price: 24.99,
    images: [
      "/product3.png",
      "/denia-prawn1.jpg",
      "/denia-prawn4.jpg",
      "/denia-prawn5.jpg",
      "/denia-prawn3.jpg",
    ],
    weights: [0.5, 1, 1.5, 2],
    unit: "lb",
    rating: 4.5,
    categoryId: 3,
    isPreorder: false, // Not pre-order
  },
  {
    id: 8,
    name: "Denia Prawn",
    description:
      "Our Denia prawns are large, juicy, and freshly sourced, perfect for grilling, stir-frying, or making a delicious prawn cocktail. Rich in protein and low in fat, they offer a sweet and tender bite every time.",
    price: 24.99,
    images: [
      "/denia-prawn2.jpg",
      "/denia-prawn1.jpg",
      "/denia-prawn3.jpg",
      "/denia-prawn4.jpg",
      "/denia-prawn5.jpg",
    ],
    weights: [0.5, 1, 1.5, 2],
    unit: "lb",
    rating: 4.5,
    categoryId: 3,
    isPreorder: false, // Not pre-order
  },
  {
    id: 9,
    name: "white Prawn",
    description:
      "Our white prawns are large, juicy, and freshly sourced, perfect for grilling, stir-frying, or making a delicious prawn cocktail. Rich in protein and low in fat, they offer a sweet and tender bite every time.",
    price: 24.99,
    images: [
      "/white-prawn1.jpg",
      "/white-prawn2.jpg",
      "/white-prawn3.jpg",
      "/white-prawn4.jpg",
      "/white-prawn5.jpg",
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
  },
];
