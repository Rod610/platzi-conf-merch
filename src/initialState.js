export default {
  gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  cart: [{
    'id': '1',
    'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
    'title': 'Camiseta',
    'price': 25,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'inStock': true,
    'leadTime': '4-5 days'
  },
  {
    'id': '3',
    'image': 'https://arepa.s3.amazonaws.com/mug.png',
    'title': 'Mug',
    'price': 10,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'inStock': false,
    'leadTime': '4-5 days'
  }],
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
      'id': '1',
      'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
      'title': 'Camiseta',
      'price': 25,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'inStock': true,
      'leadTime': '4-5 days'
    },
    {
      'id': '3',
      'image': 'https://arepa.s3.amazonaws.com/mug.png',
      'title': 'Mug',
      'price': 10,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'inStock': false,
      'leadTime': '4-5 days'
    },
    {
      'id': '4',
      'image': 'https://arepa.s3.amazonaws.com/pin.png',
      'title': 'Pin',
      'price': 4,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'inStock': true,
      'leadTime': '4-5 days'
    },
    {
      'id': '5',
      'image': 'https://arepa.s3.amazonaws.com/stickers1.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'inStock': true,
      'leadTime': '4-5 days'
    },
    {
      'id': '6',
      'image': 'https://arepa.s3.amazonaws.com/stickers2.png',
      'title': 'Stickers',
      'price': 2,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'inStock': false,
      'leadTime': '4-5 days'
    },
    {
      'id': '7',
      'image': 'https://arepa.s3.amazonaws.com/hoodie.png',
      'title': 'Hoodie',
      'price': 35,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'inStock': true,
      'leadTime': '4-5 days'
    },
  ],
};