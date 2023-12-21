export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home.svg"
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "user.svg"
        }
      ]
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg"
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg"
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: "order.svg"
        },
        {
          id: 4,
          title: "Posts",
          url: "/posts",
          icon: "post.svg"
        }
      ]
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg"
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.svg"
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.svg"
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg"
        }
      ]
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg"
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg"
        }
      ]
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg"
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg"
        }
      ]
    }
  ];
  
export const topDealUsers = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1200px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
      username: "Brendan Eich",
      email: "brendan@gmail.com",
      amount: "6.128"
    },
    {
      id: 2,
      img: "https://www.ithistory.org/sites/default/files/honor-roll/donald_chamberlin.jpg",
      username: "Donald Chamberlin",
      email: "donald@gmail.com",
      amount: "4.556"
    },
    {
      id: 3,
      img: "https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg",
      username: "Jordan Walke",
      email: "jordan@gmail.com",
      amount: "3.108"
    },
    {
      id: 4,
      img: "https://pbs.twimg.com/profile_images/918348833205116928/V9ROYRNJ_400x400.jpg",
      username: "Rasmus Lerdorf",
      email: "rasmus@gmail.com",
      amount: "3.092"
    },
    {
      id: 5,
      img: "https://avatars.githubusercontent.com/u/463230?v=4",
      username: "Taylor Otwell",
      email: "taylor@gmail.com",
      amount: "2.345"
    },
    {
      id: 6,
      img: "https://i.pinimg.com/originals/e5/b3/22/e5b322e04fa4ffbd833091d0265ed8c9.jpg",
      username: "Raymond F. Boyce",
      email: "raymond@gmail.com",
      amount: "2.330"
    },
    {
      id: 7,
      img: "https://pbs.twimg.com/profile_images/1042861196653735937/RMAqOS_0_400x400.jpg",
      username: "Anders Hejlsberg",
      email: "anders@gmail.com",
      amount: "1.907"
    }
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "12.127",
    dataKey: "users",
    percentage: 43,
    chartData: [
      { name: "Sun", users: 450 },
      { name: "Mon", users: 500 },
      { name: "Tue", users: 390 },
      { name: "Wed", users: 630 },
      { name: "Thu", users: 600 },
      { name: "Fri", users: 490 },
      { name: "Sat", users: 550 }
    ]
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "311",
    dataKey: "products",
    percentage: 22,
    chartData: [
      { name: "Sun", products: 450 },
      { name: "Mon", products: 500 },
      { name: "Tue", products: 390 },
      { name: "Wed", products: 630 },
      { name: "Thu", products: 600 },
      { name: "Fri", products: 490 },
      { name: "Sat", products: 550 }
    ]
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$87.129",
    dataKey: "revenue",
    percentage: -11.5,
    chartData: [
      { name: "Sun", revenue: 450 },
      { name: "Mon", revenue: 500 },
      { name: "Tue", revenue: 390 },
      { name: "Wed", revenue: 630 },
      { name: "Thu", revenue: 600 },
      { name: "Fri", revenue: 490 },
      { name: "Sat", revenue: 550 }
    ]
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.55",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 450 },
      { name: "Mon", ratio: 500 },
      { name: "Tue", ratio: 390 },
      { name: "Wed", ratio: 630 },
      { name: "Thu", ratio: 600 },
      { name: "Fri", ratio: 490 },
      { name: "Sat", ratio: 550 }
    ]
  };
  
  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "lightgreen",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 5800,
      },
      {
        name: "Mon",
        profit: 5000,
      },
      {
        name: "Tue",
        profit: 2100,
      },
      {
        name: "Wed",
        profit: 2300,
      },
      {
        name: "Thu",
        profit: 1900,
      },
      {
        name: "Fri",
        profit: 2400,
      },
      {
        name: "Sat",
        profit: 3650,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visits",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 3900,
      },
      {
        name: "Mon",
        visit: 3100,
      },
      {
        name: "Tue",
        visit: 1500,
      },
      {
        name: "Wed",
        visit: 1350,
      },
      {
        name: "Thu",
        visit: 1400,
      },
      {
        name: "Fri",
        visit: 2000,
      },
      {
        name: "Sat",
        visit: 3800,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023",
      verified: true
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "+123 456 789",
      createdAt: "01.01.2023"
    }
  ];
  
  export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      title: "Playstation 5 Digital Edition",
      color: "white",
      producer: "Sony",
      price: "$599.99",
      createdAt: "01.01.2023",
      inStock: true
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      title: "Dell Laptop KR211822",
      color: "black",
      producer: "Dell",
      price: "$499.99",
      createdAt: "01.01.2023",
      inStock: true
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      title: "Samsung TV 4K SmartTV",
      color: "gray",
      producer: "Samsung",
      price: "$999.49",
      createdAt: "01.01.2023",
      inStock: true
    },
    {
      id: 4,
      img: "https://raylo.imgix.net/iphone-14-blue.png",
      title: "Apple Iphone 14 Pro Max",
      color: "white",
      producer: "Apple",
      price: "$799.49",
      createdAt: "01.01.2023",
      inStock: true
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      title: "Philips Hue Play Gradient",
      color: "rainbow",
      producer: "Philips",
      price: "$39.99",
      createdAt: "01.01.2023"
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      title: "Logitech MX Master 3",
      color: "black",
      producer: "Logitech",
      price: "$59.49",
      createdAt: "01.01.2023",
      inStock: true
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      title: "Rode Podcast Microphone",
      color: "gray",
      producer: "Rode",
      price: "$119.49",
      createdAt: "01.01.2023"
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      title: "Toshiba Split AC 2",
      color: "white",
      producer: "Toshiba",
      price: "$899.99",
      createdAt: "01.01.2023",
      inStock: true
    },
    {
      id: 9,
      img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
      title: "Sony Bravia KDL-47W805A",
      color: "black",
      producer: "Sony",
      price: "$970.49",
      createdAt: "01.01.2023"
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      title: "Acer Laptop 16 KL-4804",
      color: "black",
      producer: "Acer",
      price: "$599.99",
      createdAt: "01.01.2023",
      inStock: true
    }
  ];
  
  
  
  export const singleUser = {
    id: 1,
    title: "Michael Norton",
    img: "https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    info: {
      username: "Mike123",
      fullname: "Michael Norton",
      email: "m.n0rton@gmail.com",
      phone: "+123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" }
      ],
      data: [
        {
          name: "Sun",
          visits: 4010,
          clicks: 2400
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1400
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3900
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300
        }
      ]
    },
    activities: [
      {
        text: "Michael Norton purchased Playstation 5 Digital Edition",
        time: "3 days ago"
      },
      {
        text: "Michael Norton reviewed a product",
        time: "1 week ago"
      },
      {
        text: "Michael Norton purchased Sony Bravia KD-32w800",
        time: "3 weeks ago"
      },
      {
        text: "Michael Norton added 3 items into their wishlist",
        time: "1 month ago"
      },
      {
        text: "Michael Norton added 1 items into their wishlist",
        time: "2 month ago"
      },
      {
        text: "Michael Norton reviewed a product",
        time: "3 months ago"
      }
    ]
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Disc Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$599.99",
      producer: "Sony",
      export: "Japan"
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" }
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300
        }
      ]
    },
    activities: [
      {
        text: "Jack purchased Playstation 5 Disc Edition",
        time: "4 days ago"
      },
      {
        text: "Sean added Playstation 5 Disc Edition into their wishlist",
        time: "1 week ago"
      },
      {
        text: "Mike purchased Playstation 5 Disc Edition",
        time: "3 weeks ago"
      },
      {
        text: "Ann reviewed a product",
        time: "1 month ago"
      },
      {
        text: "Helen added Playstation 5 Disc Edition into their wishlist",
        time: "1 month ago"
      },
      {
        text: "Helen reviewed a product",
        time: "4 months ago"
      }
    ]
  };