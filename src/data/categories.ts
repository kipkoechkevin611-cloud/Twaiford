import { Category, Product } from '@/types/product';

// Categories for Twyford Tiles Kenya
export const categories: Category[] = [
  {
    id: 'floor-tiles',
    name: 'Floor Tiles',
    slug: 'floor-tiles',
    description: 'Premium floor tiles for residential and commercial spaces.',
    image: '/FLOOR TILES/Floor Tile 40×40 cm (Per Box) 800.webp',
    products: [
      {
        id: 'spc-floor-wood-grain',
        name: 'SPC Floor Tile - Wood Grain Design',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/SPC Floor Tile - Wood Grain Design.webp',
        description: '100% waterproof stone plastic composite flooring with realistic wood texture.',
        specifications: {
          'Type': 'SPC Flooring',
          'Design': 'Wood Grain',
          'Features': 'Water-resistant, Durable'
        },
        price: 2000,
        slug: 'spc-floor-wood-grain'
      },
      {
        id: 'floor-tile-40x40-840',
        name: 'Floor Tile 40×40 cm (Per Box)',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/Floor Tile 40×40 cm (Per Box) 800.webp',
        description: 'Premium floor tiles suitable for kitchens and dining areas.',
        specifications: {
          'Size': '40×40 cm',
          'Material': 'Ceramic'
        },
        price: 840,
        slug: 'floor-tile-40x40-840'
      },
      {
        id: 'floor-tile-40x40-800',
        name: 'Floor Tile 40×40 cm (Per Box)',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/Floor Tile 40×40 cm (Per Box) 800.webp',
        description: 'Premium floor tiles suitable for kitchens and dining areas.',
        specifications: {
          'Size': '40×40 cm',
          'Material': 'Ceramic'
        },
        price: 800,
        slug: 'floor-tile-40x40-800'
      },
      {
        id: 'floor-tile-50x50',
        name: 'Floor Tile 50×50 cm (Per Box)',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/Floor Tile 50×50 cm (Per Box)1550.webp',
        description: 'Large-format floor tiles with fewer grout lines.',
        specifications: {
          'Size': '50×50 cm',
          'Material': 'Ceramic'
        },
        price: 1550,
        slug: 'floor-tile-50x50'
      },
      {
        id: 'floor-tile-60x60',
        name: 'Floor Tile 60×60 cm (Per Box - 4 pcs)',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/Floor Tile 60×60 cm (Per Box - 4 pcs).webp',
        description: 'Extra-large premium tiles suitable for commercial spaces.',
        specifications: {
          'Size': '60×60 cm',
          'Pieces per Box': '4',
          'Material': 'Ceramic'
        },
        price: 2500,
        originalPrice: 3000,
        slug: 'floor-tile-60x60'
      },
      {
        id: 'floor-tile-30x30',
        name: 'Floor Tile 30×30 cm (Per Box - 17 pcs)',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/Floor Tile 30×30 cm (Per Box - 17 pcs).jpg',
        description: 'Versatile tiles for small rooms, patios and other applications.',
        specifications: {
          'Size': '30×30 cm',
          'Pieces per Box': '17',
          'Material': 'Ceramic'
        },
        price: 700,
        slug: 'floor-tile-30x30'
      },
      {
        id: 'floor-tile-40x40-12pcs',
        name: 'Floor Tile 40×40 cm (Per Box - 12 pcs)',
        category: 'Floor Tiles',
        categorySlug: 'floor-tiles',
        image: '/FLOOR TILES/Floor Tile 40×40 cm (Per Box - 12 pcs).jpg',
        description: 'Premium floor tiles suitable for kitchens and dining areas.',
        specifications: {
          'Size': '40×40 cm',
          'Pieces per Box': '12',
          'Material': 'Ceramic'
        },
        price: 800,
        slug: 'floor-tile-40x40-12pcs'
      }
    ]
  },
  {
    id: 'wall-tiles',
    name: 'Wall Tiles',
    slug: 'wall-tiles',
    description: 'Transform bathrooms, kitchens and accent walls with stylish wall finishes.',
    image: '/WALL TILES/Glossy Marble Effect Wall Tiles 30×60 cm.webp',
    products: [
      {
        id: 'wall-tile-20x30',
        name: 'Wall Tile 20×30 cm (Per Box)',
        category: 'Wall Tiles',
        categorySlug: 'wall-tiles',
        image: '/WALL TILES/Wall Tile 20×30 cm (Per Box).webp',
        description: 'Elegant wall tiles for bathrooms and feature walls.',
        specifications: {
          'Size': '20×30 cm',
          'Material': 'Ceramic'
        },
        price: 1080,
        slug: 'wall-tile-20x30'
      },
      {
        id: 'glossy-marble-wall-tiles',
        name: 'Glossy Marble Effect Wall Tiles 30×60 cm',
        category: 'Wall Tiles',
        categorySlug: 'wall-tiles',
        image: '/WALL TILES/Glossy Marble Effect Wall Tiles 30×60 cm.webp',
        description: 'Premium marble-look glossy tiles with a high-shine finish.',
        specifications: {
          'Size': '30×60 cm',
          'Finish': 'Glossy',
          'Effect': 'Marble'
        },
        price: 1500,
        originalPrice: 1800,
        slug: 'glossy-marble-wall-tiles'
      }
    ]
  },
  {
    id: 'faucets-mixers',
    name: 'Faucets & Mixers',
    slug: 'faucets-mixers',
    description: 'Contemporary designs with ceramic disc technology.',
    image: '/Faucets & Mixers/Basin Mixer Tap (Deck Mounted).webp',
    products: [
      {
        id: 'basin-mixer-tap',
        name: 'Basin Mixer Tap (Deck Mounted) - Chrome',
        category: 'Faucets & Mixers',
        categorySlug: 'faucets-mixers',
        image: '/Faucets & Mixers/Basin Mixer Tap (Deck Mounted).webp',
        description: 'Elegant chrome basin faucet with 360-degree swivel spout and smooth ceramic disc operation.',
        specifications: {
          'Type': 'Deck Mounted',
          'Finish': 'Chrome',
          'Features': '360-degree swivel spout, Ceramic disc'
        },
        price: 2500,
        originalPrice: 3200,
        slug: 'basin-mixer-tap'
      }
    ]
  },
  {
    id: 'wash-basins',
    name: 'Wash Basins',
    slug: 'wash-basins',
    description: 'Pedestal, countertop and undermount ceramic sinks.',
    image: '/Wash Basins/Undermount Ceramic Sink.webp',
    products: [
      {
        id: 'pedestal-sink',
        name: 'Pedestal Sink',
        category: 'Wash Basins',
        categorySlug: 'wash-basins',
        image: '/Wash Basins/Pedestal Sink.jpg',
        description: 'Space-saving ceramic pedestal sink with concealed plumbing.',
        specifications: {
          'Type': 'Pedestal Sink',
          'Material': 'Ceramic',
          'Features': 'Concealed plumbing'
        },
        price: 1500,
        slug: 'pedestal-sink'
      },
      {
        id: 'undermount-ceramic-sink',
        name: 'Undermount Ceramic Sink',
        category: 'Wash Basins',
        categorySlug: 'wash-basins',
        image: '/Wash Basins/Undermount Ceramic Sink.webp',
        description: 'Hidden-rim sink for seamless vanity installation.',
        specifications: {
          'Type': 'Undermount Sink',
          'Material': 'Ceramic',
          'Mounting': 'Undermount'
        },
        price: 4500,
        originalPrice: 5500,
        slug: 'undermount-ceramic-sink'
      },
      {
        id: 'ceramic-countertop-sink',
        name: 'Ceramic Countertop Sink',
        category: 'Wash Basins',
        categorySlug: 'wash-basins',
        image: '/Wash Basins/Ceramic Countertop Sink.webp',
        description: 'Modern white ceramic bowl basin.',
        specifications: {
          'Type': 'Countertop Sink',
          'Material': 'Ceramic',
          'Mounting': 'Countertop'
        },
        price: 4000,
        originalPrice: 4800,
        slug: 'ceramic-countertop-sink'
      },
      {
        id: 'kitchen-sink-double-bowl',
        name: 'Kitchen Sink - Double Bowl',
        category: 'Wash Basins',
        categorySlug: 'wash-basins',
        image: '/Wash Basins/Kitchen Sink - Double Bowl.jpg',
        description: 'Durable stainless steel double-bowl kitchen sink.',
        specifications: {
          'Type': 'Kitchen Sink',
          'Configuration': 'Double Bowl',
          'Material': 'Stainless Steel'
        },
        price: 5000,
        originalPrice: 6500,
        slug: 'kitchen-sink-double-bowl'
      },
      {
        id: 'small-ceramic-sink',
        name: 'Small Ceramic Sink - Compact',
        category: 'Wash Basins',
        categorySlug: 'wash-basins',
        image: '/Wash Basins/Small Ceramic Sink - Compact.webp',
        description: 'Space-saving sink for guest WCs and small bathrooms.',
        specifications: {
          'Type': 'Sink',
          'Size': 'Compact',
          'Material': 'Ceramic'
        },
        price: 1000,
        slug: 'small-ceramic-sink'
      }
    ]
  },
  {
    id: 'specialty-products',
    name: 'Specialty Products',
    slug: 'specialty-products',
    description: 'Epoxy flooring, water closets, bathroom accessories and professional tile installation products.',
    image: '/Specialty Products/3D Epoxy Flooring.jpg',
    products: [
      {
        id: '3d-epoxy-flooring',
        name: '3D Epoxy Flooring',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/3D Epoxy Flooring.jpg',
        description: 'Premium waterproof flooring for industrial and residential applications.',
        specifications: {
          'Type': 'Epoxy Flooring',
          'Finish': '3D Effect',
          'Durability': 'High'
        },
        price: 4500,
        originalPrice: 5500,
        slug: '3d-epoxy-flooring'
      },
      {
        id: 'ceramic-toilet-seat',
        name: 'Ceramic Toilet Seat',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Ceramic Toilet Seat.jpg',
        description: 'Comfortable soft-close toilet seat.',
        specifications: {
          'Type': 'Toilet Seat',
          'Material': 'Ceramic',
          'Features': 'Soft-close'
        },
        price: 5000,
        originalPrice: 6000,
        slug: 'ceramic-toilet-seat'
      },
      {
        id: 'asian-toilet-compact',
        name: 'Asian Toilet - Compact Design',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Asian Toilet - Compact Design.webp',
        description: 'Compact toilet with efficient flushing system.',
        specifications: {
          'Type': 'Asian Toilet',
          'Design': 'Compact',
          'Material': 'Ceramic'
        },
        price: 850,
        slug: 'asian-toilet-compact'
      },
      {
        id: 'urinal-wall-mounted',
        name: 'Urinal - Wall Mounted',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Urinal - Wall Mounted.webp',
        description: 'Wall-mounted ceramic urinal for commercial bathrooms.',
        specifications: {
          'Type': 'Urinal',
          'Mounting': 'Wall Mounted',
          'Application': 'Commercial'
        },
        price: 2000,
        originalPrice: 2800,
        slug: 'urinal-wall-mounted'
      },
      {
        id: 'tissue-paper-dispenser',
        name: 'Tissue Paper Dispenser - Stainless Steel',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Tissue Paper Dispenser - Stainless Steel.jpg',
        description: 'Durable stainless steel dispenser.',
        specifications: {
          'Type': 'Tissue Dispenser',
          'Material': 'Stainless Steel',
          'Finish': 'Stainless Steel'
        },
        price: 3500,
        originalPrice: 4500,
        slug: 'tissue-paper-dispenser'
      },
      {
        id: 'shower-kit-chrome',
        name: 'Shower Kit with Chrome Pipe',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Shower Kit with Chrome Pipe.jpg',
        description: 'Complete shower kit with chrome pipe, handheld shower head and wall bracket.',
        specifications: {
          'Type': 'Shower Kit',
          'Finish': 'Chrome',
          'Includes': 'Pipe, handheld shower head, wall bracket'
        },
        price: 2500,
        originalPrice: 3500,
        slug: 'shower-kit-chrome'
      },
      {
        id: 'aluminium-corner-strips',
        name: 'Aluminium Corner Strips - 2.5m',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Aluminium Corner Strips - 2.5m.jpg',
        description: '2.5m strips for tile-edge finishing and corner protection.',
        specifications: {
          'Material': 'Aluminium',
          'Length': '2.5m',
          'Use': 'Edge Protection'
        },
        price: 250,
        slug: 'aluminium-corner-strips'
      },
      {
        id: 'tile-adhesive',
        name: 'Tile Adhesive - 20kg Bag',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Tile Adhesive - 20kg Bag.jpg',
        description: 'High-quality adhesive for ceramic, porcelain and mosaic tiles.',
        specifications: {
          'Weight': '20kg',
          'Type': 'Tile Adhesive',
          'Strength': 'High'
        },
        price: 400,
        slug: 'tile-adhesive'
      },
      {
        id: 'tile-cutting-machine',
        name: 'Tile Cutting Machine - Manual',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Tile Cutting Machine - Manual.jpg',
        description: 'Manual tile cutter for ceramic, porcelain and mosaic tiles.',
        specifications: {
          'Type': 'Manual Tile Cutter',
          'Operation': 'Manual',
          'Suitability': 'Ceramic, Porcelain, Mosaic'
        },
        price: 7500,
        originalPrice: 9000,
        slug: 'tile-cutting-machine'
      },
      {
        id: 'marble-sheet',
        name: 'Marble Sheet - 2400x1200mm',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Marble Sheet - 2400x1200mm.jpg',
        description: '2400 × 1200mm sheet for wall cladding, feature walls and countertops.',
        specifications: {
          'Dimensions': '2400×1200mm',
          'Type': 'Marble Effect Sheet',
          'Application': 'Wall Cladding, Feature Walls, Countertops'
        },
        price: 2500,
        originalPrice: 3200,
        slug: 'marble-sheet'
      },
      {
        id: 'mazeras-stone-tiles',
        name: 'Mazeras Stone Tiles - Natural',
        category: 'Specialty Products',
        categorySlug: 'specialty-products',
        image: '/Specialty Products/Mazeras Stone Tiles - Natural.jpg',
        description: 'Natural stone tiles for outdoor flooring, patios and walkways.',
        specifications: {
          'Type': 'Natural Stone Tiles',
          'Material': 'Mazeras Stone',
          'Application': 'Outdoor Flooring, Patios, Walkways'
        },
        price: 1000,
        slug: 'mazeras-stone-tiles'
      }
    ]
  }
];

// Helper function to get all products from all categories
export const getAllProducts = (): Product[] => {
  return categories.flatMap(category => category.products);
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return getAllProducts().find(product => product.slug === slug);
};

// Helper function to get products by category slug
export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.products : [];
};
