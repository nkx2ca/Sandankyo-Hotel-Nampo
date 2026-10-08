export const GALLERY_IMAGES = {
  ja: [
    {
      id: 1,
      src: "/hero-1.jpeg",
      category: "周辺",
      title: "三段峡の渓谷美",
      description: "特別名勝に指定された三段峡の美しい景観"
    },
    {
      id: 2,
      src: "/hero-2.jpeg",
      category: "周辺",
      title: "黒淵",
      description: "三段峡を代表する景勝地"
    }
  ],
  en: [
    {
      id: 1,
      src: "/hero-1.jpeg",
      category: "Surroundings",
      title: "Sandankyo Gorge Beauty",
      description: "Beautiful scenery of Sandankyo, designated as a Special Place of Scenic Beauty"
    },
    {
      id: 2,
      src: "/hero-2.jpeg",
      category: "Surroundings",
      title: "Kurobuchi",
      description: "One of Sandankyo's most famous scenic spots"
    }
  ]
} as const;

export const GALLERY_CATEGORIES = {
  ja: ["全て", "施設", "客室", "料理", "周辺"],
  en: ["All", "Facilities", "Rooms", "Cuisine", "Surroundings"]
} as const;
