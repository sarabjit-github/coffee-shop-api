const allProducts = [
  {
    id: 1,
    title: "Vanilla Late",
    price: 5.12,
    description:
      "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
    category: {
      hot: true,
      cold: false,
    },
    image: "https://i.ibb.co/DMYsNyM/cup1.jpg",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Cappuccino",
    price: 4.3,
    description:
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
    category: {
      hot: true,
      cold: true,
    },
    image: "https://i.ibb.co/bKcqNvG/cup2.jpg",
    rating: {
      rate: 4.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "Americano",
    price: 7,
    description:
      "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water. Pro tip: if you’re making your own, pour the espresso first, then add the hot water.",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/1dH8rHk/cup3.jpg",
    rating: {
      rate: 4.2,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Espresso",
    price: 3.6,
    description:
      "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/wRF98y0/cup4.jpg",
    rating: {
      rate: 4.6,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Doppio",
    price: 4.8,
    description:
      "A double shot of espresso, the doppio is perfect for putting extra pep in your step..",
    category: {
      hot: true,
      cold: true,
    },
    image: "https://i.ibb.co/GTyCh3K/cup5.jpg",
    rating: {
      rate: 4.4,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Cortado",
    price: 4.1,
    description:
      "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
    category: {
      hot: true,
      cold: false,
    },
    image: "https://i.ibb.co/gzqxYTm/cup13.jpg",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 7,
    title: "Red Eye",
    price: 4.7,
    description:
      "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
    category: {
      hot: true,
      cold: true,
    },
    image: "https://i.ibb.co/QvY2r6N/cup8.jpg",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
  {
    id: 8,
    title: "Galão",
    price: 6.1,
    description:
      "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
    category: {
      hot: true,
      cold: false,
    },
    image: "https://i.ibb.co/5F28sGc/cup9.jpg",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
  {
    id: 9,
    title: "Lungo",
    price: 3.6,
    description:
      "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/gR0JLCK/cup10.jpg",
    rating: {
      rate: 4.3,
      count: 120,
    },
  },
  {
    id: 10,
    title: "Macchiato",
    price: 5.8,
    description:
      "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
    category: {
      hot: true,
      cold: true,
    },
    image: "https://i.ibb.co/tKCW7qn/cup11.jpg",
    rating: {
      rate: 4.6,
      count: 120,
    },
  },
  {
    id: 11,
    title: "Mocha",
    price: 4.7,
    description:
      "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
    category: {
      hot: true,
      cold: false,
    },
    image: "https://i.ibb.co/z4HSK85/cup12.jpg",
    rating: {
      rate: 4.4,
      count: 120,
    },
  },
  {
    id: 12,
    title: "Ristretto",
    price: 5.2,
    description:
      "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/gzqxYTm/cup13.jpg",
    image: "https://i.ibb.co/gD19GnN/cup20.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 13,
    title: "Flat White",
    price: 5.8,
    description:
      "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
    category: {
      hot: true,
      cold: true,
    },
    image: "https://i.ibb.co/GRLrJMY/cup14.jpg",
    rating: {
      rate: 4.9,
      count: 120,
    },
  },
  {
    id: 14,
    title: "Affogato",
    price: 4.8,
    description:
      "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two. The affogato is extra delish served over a brownie.",
    category: {
      hot: true,
      cold: true,
    },
    image: "https://i.ibb.co/K29n6ms/cup15.jpg",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 15,
    title: "Café au Lait",
    price: 3.65,
    description:
      "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
    category: {
      hot: true,
      cold: false,
    },
    image: "https://i.ibb.co/ns4jjfL/cup16.jpg",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
  {
    id: 16,
    title: "Frappuccino",
    price: 7.2,
    description:
      "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. But not all Frapps are made the same: watch out for coffee-free versions. Unless you’re into that sorta thing.",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/sCR4R9S/cup17.jpg",
    rating: {
      rate: 4.9,
      count: 120,
    },
  },
  {
    id: 17,
    title: "Nitro",
    price: 6.38,
    description:
      "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/tXK8Phg/cup18.jpg",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 18,
    title: "Cold Brew",
    price: 5.5,
    description:
      "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
    category: {
      hot: false,
      cold: true,
    },
    image: "https://i.ibb.co/tq4X4V9/cup19.jpg",
    rating: {
      rate: 4.8,
      count: 120,
    },
  },
];

module.exports = allProducts;