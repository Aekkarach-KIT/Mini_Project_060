// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "CPU INTEL CORE I7-8700K",
    category: "CPU",
    price: 377.49,
    description:
      "The Nike Air Presto Women's Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0122384/A0122384OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0122384/A0122384OK_BIG_1.jpg"
    ]
  },
  {
    id: 2,
    name: "CPU AMD AM4 RYZEN5 2600",
    category: "CPU",
    price: 119.43,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",

    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0112438/A0112438OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0112438/A0112438OK_BIG_1.jpg"
    ]
  },
  {
    id: 3,
    name: "CPU INTEL CORE I5-9400F",
    category: "CPU",
    price: 148.14,
    description:
     "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0122674/A0122674OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0122674/A0122674OK_BIG_1.jpg"
    ]
  },
  {
    id: 4,
    name: "CPU INTEL CORE I7-9700K",
    category: "CPU",
    price: 404.70,
    description:
    "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter."
    ,

    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0120400/A0120400OK_BIG_1.jpg"
    ]
  },
  {
    id: 5,
    name: "CPU AMD AM4 RYZEN5 2600X",
    category: "CPU",
    price: 161.58,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
      

    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0112439/A0112439OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0112439/A0112439OK_BIG_1.jpg"
    ]
  },

  {
    id: 7,
    name: "CPU INTEL CORE I5-8500",
    category: "CPU",
    price: 209.22,
    description: "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: false,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0111230/A0111230OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0111230/A0111230OK_BIG_1.jpg"
    ]
  },
  {
    id: 8,
    name: "CPU INTEL CORE I5-9400",
    category: "CPU",
    price: 179.90,
    description: "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0126093/A0126093OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0126093/A0126093OK_BIG_1.jpg"
    ]
  },
  {
    id: 9,
    name: "CPU AMD AM4 RYZEN7 3700X",
    category: "CPU",
    price: 332.93,
    description: "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0126929/A0126929OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0126929/A0126929OK_BIG_2.jpg"
    ]
  },
  {
    id: 10,
    name: "CPU AMD AM4 RYZEN9 3900X",
    category: "CPU",
    price: 516.19,
    description: "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",

    popular: true,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0126931/A0126931OK_BIG_1.jpg"
    ]
  },
  {
    id: 11,
    name: "CPU AMD AM4 RYZEN5 3600X",
    category: "CPU",
    price: 234.88,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: false,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0127022/A0127022OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0127022/A0127022OK_BIG_2.jpg"
    ]
  },
  {
    id: 12,
    name: "CPU AMD AM4 RYZEN9 3950X",
    category: "CPU",
    price: 812.46,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",

    popular: false,
    imageUrls: [
      "https://img.advice.co.th/images_nas/pic_product4/A0129136/A0129136OK_BIG_1.jpg",
      "https://img.advice.co.th/images_nas/pic_product4/A0129136/A0129136OK_BIG_2.jpg"
    ]
  },
  {
    id: 13,
    name: "CPU INTEL CORE I5 - 8600",
    categories: "CPU",
    price: 202.20,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0111231/A0111231OK_BIG_1.jpg",

      ],
  },
  {
    id: 14,
    name: "MSI Z390 GODLIKE",
    categories: "Mainboard",
    price: 375.08,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0119678/A0119678OK_BIG_1.jpg",

      ],
  },
  {
    id: 15,
    name: "ASROCK Z390 TAICHI",
    categories: "Mainboard",
    price: 228.77,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0119221/A0119221OK_BIG_1.jpg",

      ],
  },
  {
    id: 16,
    name: "GIGABYTE Z390 AORUS ELITE",
    categories: "Mainboard",
    price: 163.41,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0119229/A0119229OK_BIG_1.jpg",

      ],
  },
  {
    id: 17,
    name: "GIGABYTE H370 AORUS GAMING 3 WIFI",
    categories: "Mainboard",
    price: 127.98,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0111618/A0111618OK_BIG_1.jpg",

      ],
  },
  {
    id: 18,
    name: "GIGABYTE H370 AORUS GAMING3",
    categories: "Mainboard",
    price: 106.60,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0112136/A0112136OK_BIG_1.jpg",

      ],
  },
  {
    id: 19,
    name: "GIGABYTE H370 HD3",
    categories: "Mainboard",
    price: 97.43,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0112296/A0112296OK_BIG_1.jpg",

      ],
  },
  {
    id: 20,
    name: "ASROCK H370 PRO 4",
    categories: "Mainboard",
    price: 51.62,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0111624/A0111624OK_BIG_1.jpg",

      ],
  },
  {
    id: 21,
    name: "SAMSUNG 860 QVO 4TB",
    categories: "Solid State Drive",
    price: 555.89,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0123801/A0123801OK_BIG_1.jpg",

      ],
  },
  {
    id: 22,
    name: "WD Blue 2TB 3D NAND",
    categories: "Solid State Drive",
    price: 317.65,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0123742/A0123742OK_BIG_1.jpg",

      ],
  },
  {
    id: 23,
    name: "SAMSUNG 860 PRO 1TB",
    categories: "Solid State Drive",
    price: 280.09,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    popular: true,
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0119221/A0119221OK_BIG_1.jpg",

      ],
  },
  {
    id: 24,
    name: "AMSUNG 970 EVO Plus M.2 PCIe 1TB",
    categories: "Solid State Drive",
    price: 201.28,
    description:
      "Higher performance. Incredible technology. Intelligent Ryzen™ processors just got even smarter.",
    imageUrls: [
        "https://img.advice.co.th/images_nas/pic_product4/A0114078/A0114078OK_BIG_1.jpg",

      ],
  },


  
];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "CPU",
    icon: "memory"
  },
  {
    name: "Mainboard",
    icon: "memory"
  },
  {
    name: "VGA Card",
    icon: "menu_book"
  },
  {
    name: "Memory",
    icon: "computer"
  },
  {
    name: "Harddisk",
    icon: "computer"
  },
  {
    name: "Solid State Drive",
    icon: "computer"
  },
  {
    name: "Power Supply",
    icon: "computer"
  },
  {
    name: "Case",
    icon: "computer"
  },
  {
    name: "CPU Cooler",
    icon: "computer"
  },
  {
    name: "Monitor",
    icon: "computer"
  }

];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };
