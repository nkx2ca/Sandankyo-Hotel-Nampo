export const GALLERY_IMAGES = {
  ja: [
    {
      id: 1,
      src: "/hero-sandankyo-gorge.jpeg",
      category: "周辺",
      title: "三段峡の渓谷美",
      description: "特別名勝に指定された三段峡の美しい景観"
    },
    {
      id: 2,
      src: "/kurobuchi.jpg",
      category: "周辺",
      title: "黒淵",
      description: "三段峡を代表する景勝地"
    },
    {
      id: 3,
      src: "/hotel_extelia.jpg",
      category: "施設",
      title: "ホテル外観",
      description: "三段峡の自然に囲まれたホテル"
    },
    {
      id: 4,
      src: "/moss.jpg",
      category: "周辺",
      title: "苔むす渓谷",
      description: "瑞々しい自然の美しさ"
    },
    {
      id: 5,
      src: "/opening.jpg",
      category: "施設",
      title: "館内",
      description: "落ち着いた雰囲気の館内"
    },
    {
      id: 6,
      src: "/340001_02F.jpeg",
      category: "料理",
      title: "お料理",
      description: "地元の食材を使用した会席料理"
    },
    {
      id: 7,
      src: "/mtaira190300257.jpg",
      category: "周辺",
      title: "三段峡の四季",
      description: "季節ごとに表情を変える渓谷"
    }
  ],
  en: [
    {
      id: 1,
      src: "/hero-sandankyo-gorge.jpeg",
      category: "Surroundings",
      title: "Sandankyo Gorge Beauty",
      description: "Beautiful scenery of Sandankyo, designated as a Special Place of Scenic Beauty"
    },
    {
      id: 2,
      src: "/kurobuchi.jpg",
      category: "Surroundings",
      title: "Kurobuchi",
      description: "One of Sandankyo's most famous scenic spots"
    },
    {
      id: 3,
      src: "/hotel_extelia.jpg",
      category: "Facilities",
      title: "Hotel Exterior",
      description: "Hotel surrounded by nature of Sandankyo"
    },
    {
      id: 4,
      src: "/moss.jpg",
      category: "Surroundings",
      title: "Moss-covered Gorge",
      description: "Fresh natural beauty"
    },
    {
      id: 5,
      src: "/opening.jpg",
      category: "Facilities",
      title: "Interior",
      description: "Calm atmosphere inside"
    },
    {
      id: 6,
      src: "/340001_02F.jpeg",
      category: "Cuisine",
      title: "Cuisine",
      description: "Kaiseki cuisine using local ingredients"
    },
    {
      id: 7,
      src: "/mtaira190300257.jpg",
      category: "Surroundings",
      title: "Four Seasons of Sandankyo",
      description: "Gorge that changes expression with each season"
    }
  ]
} as const;

export const GALLERY_CATEGORIES = {
  ja: ["全て", "施設", "客室", "料理", "周辺"],
  en: ["All", "Facilities", "Rooms", "Cuisine", "Surroundings"]
} as const;
