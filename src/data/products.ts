import { Product } from "@/types/product";


export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Panjabi",
    price: 1490,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
    rating: 4.8,
    colors: ["White", "Navy"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Premium cotton panjabi with a comfortable regular fit."
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    category: "Jeans",
    price: 1990,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    rating: 4.6,
    colors: ["Blue", "Black"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    description: "Stretchable slim-fit denim jeans for everyday wear."
  },
  {
    id: 3,
    name: "Oversized Graphic T-Shirt",
    category: "T-Shirt",
    price: 890,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    rating: 4.7,
    colors: ["Black", "White", "Green"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Soft oversized t-shirt with trendy graphic print."
  },
  {
    id: 4,
    name: "Formal Cotton Shirt",
    category: "Shirt",
    price: 1590,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    rating: 4.5,
    colors: ["Sky Blue", "White"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Elegant formal shirt perfect for office and events."
  },
  {
    id: 5,
    name: "Casual Polo Shirt",
    category: "Polo",
    price: 1190,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
    rating: 4.4,
    colors: ["Maroon", "Black"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Breathable polo shirt with premium cotton fabric."
  },
  {
    id: 6,
    name: "Hooded Sweatshirt",
    category: "Hoodie",
    price: 2290,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    rating: 4.9,
    colors: ["Gray", "Black"],
    sizes: ["L", "XL"],
    inStock: true,
    description: "Warm fleece hoodie designed for winter comfort."
  },
  {
    id: 7,
    name: "Women's Floral Kurti",
    category: "Kurti",
    price: 1690,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    rating: 4.8,
    colors: ["Pink", "Blue"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description: "Elegant floral printed kurti for casual outings."
  },
  {
    id: 8,
    name: "Leather Sneakers",
    category: "Shoes",
    price: 2990,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    rating: 4.7,
    colors: ["White", "Black"],
    sizes: ["40", "41", "42", "43"],
    inStock: true,
    description: "Stylish leather sneakers with cushioned sole."
  },
  {
    id: 9,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 3490,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
    rating: 4.9,
    colors: ["Silver", "Black"],
    sizes: [],
    inStock: true,
    description: "Minimal stainless steel wrist watch with leather strap."
  },
  {
    id: 10,
    name: "Travel Backpack",
    category: "Bags",
    price: 2590,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    rating: 4.6,
    colors: ["Black", "Navy"],
    sizes: [],
    inStock: true,
    description: "Large-capacity backpack for work and travel."
  },
  {
    id: 11,
    name: "Women's Leather Handbag",
    category: "Bags",
    price: 2790,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    rating: 4.5,
    colors: ["Brown", "Black"],
    sizes: [],
    inStock: false,
    description: "Premium leather handbag with spacious compartments."
  },
  {
    id: 12,
    name: "Sports Running Shoes",
    category: "Shoes",
    price: 3290,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600",
    rating: 4.9,
    colors: ["White", "Blue"],
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
    description: "Lightweight running shoes with breathable mesh upper."
  }
];

export default products;