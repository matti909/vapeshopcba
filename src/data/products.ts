import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'VapeMax Pro 3000',
    description: 'Vape recargable de alta gama con batería de larga duración y control de temperatura',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/7148621/pexels-photo-7148621.jpeg',
    category: 'rechargeable',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: ['Batería 3000mAh', 'Control de temperatura', 'Pantalla OLED', 'Carga rápida USB-C'],
    colors: ['Negro', 'Plata', 'Azul', 'Rosa']
  },
  {
    id: '2',
    name: 'CloudPuff Disposable',
    description: 'Vape desechable con 2500 puffs y sabores intensos',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg',
    category: 'disposable',
    inStock: true,
    rating: 4.6,
    reviews: 89,
    features: ['2500 puffs', 'Sin mantenimiento', 'Activación por inhalación', 'Compacto'],
    flavors: ['Menta', 'Fresa', 'Mango', 'Uva', 'Sandía']
  },
  {
    id: '3',
    name: 'Essence Tropical Mix',
    description: 'Esencia premium con mezcla de frutas tropicales, 30ml',
    price: 15.99,
    image: 'https://images.pexels.com/photos/7148619/pexels-photo-7148619.jpeg',
    category: 'essence',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ['30ml', 'Sabor intenso', 'Sin nicotina', 'Ingredientes naturales'],
    flavors: ['Tropical Mix', 'Coco', 'Piña', 'Maracuyá']
  },
  {
    id: '4',
    name: 'Resistencia Mesh 0.2Ω',
    description: 'Resistencias de malla para mejor sabor y vapor denso',
    price: 12.99,
    image: 'https://images.pexels.com/photos/7148618/pexels-photo-7148618.jpeg',
    category: 'resistance',
    inStock: true,
    rating: 4.7,
    reviews: 78,
    features: ['Tecnología Mesh', '0.2Ω resistencia', 'Vapor denso', 'Pack de 5 unidades']
  },
  {
    id: '5',
    name: 'VapeStorm Elite',
    description: 'Vape recargable con doble batería y sistema de enfriamiento',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/7148621/pexels-photo-7148621.jpeg',
    category: 'rechargeable',
    inStock: true,
    rating: 4.9,
    reviews: 203,
    features: ['Doble batería 4000mAh', 'Sistema de enfriamiento', 'Pantalla táctil', 'Bluetooth'],
    colors: ['Negro Mate', 'Titanio', 'Oro Rosa']
  },
  {
    id: '6',
    name: 'MiniPuff Compact',
    description: 'Vape desechable ultra compacto con 1500 puffs',
    price: 18.99,
    image: 'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg',
    category: 'disposable',
    inStock: false,
    rating: 4.4,
    reviews: 67,
    features: ['1500 puffs', 'Ultra compacto', 'Diseño ergonómico', 'LED indicador'],
    flavors: ['Menta Fresca', 'Cereza', 'Limón']
  }
];