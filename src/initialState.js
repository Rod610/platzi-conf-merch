export default {
  gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  cart: [],
  buyer: {
    firstName: "Rodrigo",
    lastName: "Martinez",
    email: "lol@lol.com",
    address: "Central Park, West 57th Street, Nueva York, EE. UU.",
    apto: "1",
    city: "Nueva York",
    country: "EE. UU",
    region: "Nueva York",
    postalCode: "10001",
    phone: "123456789"
  },
  orders: [],
  products: [
    {
      'id': 1,
      'featuredImage': { 'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-boxart-1200x675' },
      'title': 'Nintendo Switch - OLED Model White set',
      'price': 349.99,
      'description': 'Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch™ system - OLED model.',
      'inStock': true,
      'rating': 3,
      'leadTime': '4-5 days',
      'type': 'Hardware',
      'quantity':1,
      'images': [{
        'id': 1,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-boxart-1200x675',
        'alt': 'image1'
      }, {
        'id': 2,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-console-front-1200x675',
        'alt': 'image2'
      }, {
        'id': 3,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-console-dock-joy-con-grip-1200x675',
        'alt': 'image3'
      }, {
        'id': 4,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-console_joy-con-detached-1200x675',
        'alt': 'image4'
      }]
    },
    {
      'id': 2,
      'featuredImage': { 'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-pokemon-scarlet-pokemon-violet/112875-nintendo-switch-oled-pokemon-scar-vio-package-1200x675' },
      'title': 'Nintendo Switch – OLED Model Pokémon Scarlet & Violet Edition',
      'price': 379.99,
      'description': 'The Nintendo Switch – OLED Model: Pokémon Scarlet & Violet Edition system features special illustrations of the Legendary Pokémon appearing in the Pokémon Scarlet and Pokémon Violet games, Koraidon and Miraidon, as well as the partner Pokémon Sprigatito, Fuecoco, and Quaxly.',
      'inStock': false,
      'rating': 5,
      'leadTime': '20 days',
      'type': 'Hardware',
      'quantity':1,
      'images': [{
        'id': 1,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-pokemon-scarlet-pokemon-violet/112875-nintendo-switch-oled-pokemon-scar-vio-package-1200x675',
        'alt': 'image1'
      }, {
        'id': 2,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-pokemon-scarlet-pokemon-violet/112875-nintendo-switch-oled-pokemon-scar-vio-dock-console-joy-con-1200x675',
        'alt': 'image2'
      }, {
        'id': 3,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-pokemon-scarlet-pokemon-violet/112875-nintendo-switch-oled-pokemon-scar-vio-dock-console-front-1200x675',
        'alt': 'image3'
      }, {
        'id': 4,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-pokemon-scarlet-pokemon-violet/112875-nintendo-switch-oled-pokemon-scar-vio-console-back-1200x675',
        'alt': 'image4'
      }]
    },
    {
      'id': 3,
      'featuredImage': { 'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-oled-model-neon-blue-neon-red/115464-switch-oled-red-blue-box-art-1200x675' },
      'title': 'Nintendo Switch - OLED Model Neon Blue/Neon Red set',
      'price': 349.99,
      'description': 'Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch™ system - OLED model.',
      'inStock': true,
      'rating': 3,
      'leadTime': '4-5 days',
      'type': 'Hardware',
      'quantity':1,
      'images': [{
        'id': 1,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-neon-blue-neon-red/115464-switch-oled-red-blue-box-art-1200x675',
        'alt': 'image1'
      }, {
        'id': 2,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-neon-blue-neon-red/115464-switch-oled-red-blue-console-front-1200x675',
        'alt': 'image2'
      }, {
        'id': 3,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-neon-blue-neon-red/115464-switch-oled-red-blue-console-dock-joy-con_grip-1200x675',
        'alt': 'image3'
      }, {
        'id': 4,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-oled-model-neon-blue-neon-red/115464-switch-oled-red-blue-console-_joy-con-detached-1200x675',
        'alt': 'image4'
      }]
    },
    {
      'id': 4,
      'featuredImage': { 'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-acnh/112183-nintendo-switch-animal-crossing-bundle-package-front-1200x675' },
      'title': 'Nintendo Switch Animal Crossing: New Horizons Edition',
      'price': 299.99,
      'description': 'This Nintendo Switch™ system takes design inspiration from the new Animal Crossing™: New Horizons game.',
      'inStock': true,
      'rating': 4,
      'leadTime': '4-5 days',
      'type': 'Hardware',
      'quantity':1,
      'images': [{
        'id': 1,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-acnh/112183-nintendo-switch-animal-crossing-bundle-package-front-1200x675',
        'alt': 'image1'
      }, {
        'id': 2,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-acnh/112183-nintendo-switch-animal-crossing-bundle-console-joy-con-front-screen-on-1200x675',
        'alt': 'image2'
      }, {
        'id': 3,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/hardware/nintendo-switch-acnh/112183-nintendo-switch-animal-crossing-bundle-console-joy-con-back-1200x675',
        'alt': 'image3'
      }, {
        'id': 4,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/bo_15px_solid_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/hardware/nintendo-switch-acnh/112183-nintendo-switch-animal-crossing-bundle-console-dock-1200x675',
        'alt': 'image4'
      }]
    },
    {
      'id': 5,
      'featuredImage': { 'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/mario-kart-live-home-circuit/112728-mario-kart-live-mario-kart-package-1200x675' },
      'title': 'Mario Kart Live: Home Circuit - Mario Set',
      'price': 99.99,
      'description': 'Control a real-life Mario Kart with Nintendo Switch and watch it come to life in the game!',
      'inStock': true,
      'rating': 3,
      'leadTime': '4-5 days',
      'type': 'Hardware',
      'quantity':1,
      'images': [{
        'id': 1,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/mario-kart-live-home-circuit/112728-mario-kart-live-mario-kart-package-1200x675',
        'alt': 'image1'
      }, {
        'id': 2,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/mario-kart-live-home-circuit/112728-mario-kart-live-mario-kart-items-1200x675',
        'alt': 'image2'
      }, {
        'id': 3,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/mario-kart-live-home-circuit/112728-mario-kart-live-mario-kart-kart-profile-angle-1200x675',
        'alt': 'image3'
      }, {
        'id': 4,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/mario-kart-live-home-circuit/112728-mario-kart-live-mario-kart-kart-back-1200x675',
        'alt': 'image4'
      }]
    },
    {
      'id': 6,
      'featuredImage': { 'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1100/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/enhanced-wireless-controller-pikachu-025/115370-power-a-controller-wireless-pikachu-25-package-1200x675' },
      'title': 'Enhanced Wireless Controller - Pikachu 025',
      'price': 49.99,
      'description': 'Play your favorite Nintendo Switch games* like a pro with this officially licensed PowerA Enhanced Wireless Controller.',
      'inStock': true,
      'rating': 4,
      'leadTime': '4-5 days',
      'type': 'Hardware',
      'quantity':1,
      'images': [{
        'id': 1,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/enhanced-wireless-controller-pikachu-025/115370-power-a-controller-wireless-pikachu-25-front-1200x675',
        'alt': 'image1'
      }, {
        'id': 2,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/enhanced-wireless-controller-pikachu-025/115370-power-a-controller-wireless-pikachu-25-package-open-1200x675',
        'alt': 'image2'
      }, {
        'id': 3,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/enhanced-wireless-controller-pikachu-025/115370-power-a-controller-wireless-pikachu-25-package-1200x675',
        'alt': 'image3'
      }, {
        'id': 4,
        'src': 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/products/accessories/nintendo-switch/controllers/pro-controllers-and-gamepads/enhanced-wireless-controller-pikachu-025/115370-power-a-controller-wireless-pikachu-25-back-1200x675',
        'alt': 'image4'
      }]
    },
  ],
};