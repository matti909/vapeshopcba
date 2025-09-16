export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "rechargeable" | "disposable" | "essence" | "resistance";
  inStock: boolean;
  rating: number;
  reviews: number;
  features: string[];
  colors?: string[];
  flavors?: string[];
  flavor?: string; // Single flavor string for compatibility
  puffCount?: number; // Number of puffs
  brand?: string; // Brand name
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedFlavor?: string;
}

