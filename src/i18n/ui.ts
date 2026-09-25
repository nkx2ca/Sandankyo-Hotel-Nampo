export const UI = {
  ja: {
    'i18n': 'ENG',
    'title': '三段峡ホテル 南峰',
    'rooms': '客室',
    'cuisine': '料理',
    'facility': '館内施設',
    'gallery': 'ギャラリー',
    'access': 'アクセス',
    'news': 'お知らせ',
    'faq': 'よくあるご質問',
    'contact': 'お問い合わせ',
    'reservation': 'ご予約',
    'address': '〒731-3813 広島県山県郡安芸太田町柴木1734',
    'hotel-name': '三段峡ホテル 南峰',
    'restaurant-name': 'レストラン みずのと',
    'privacy-policy': '個人情報保護方針',
    'transaction-law': '特定商取引法に基づく表記',
    'accommodation-terms': '宿泊約款',
  },
  en: {
    'i18n': 'JP',
    'title': 'Sandankyo Hotel Nampo',
    'rooms': 'Rooms',
    'cuisine': 'Cuisine',
    'facility': 'Facility',
    'gallery': 'Gallery',
    'access': 'Access',
    'news': 'News',
    'faq': 'FAQ',
    'contact': 'Contact',
    'reservation': 'Reservation',
    'address': '〒731-3813 1734 Shibaki, Akiota-cho, Yamagata-gun, Hiroshima',
    'hotel-name': 'Sandankyo Hotel Nampo',
    'restaurant-name': 'Restaurant Mizunoto',
    'privacy-policy': 'Personal Information Protection Policy',
    'transaction-law': 'Statement Based on The Specified Commercial Transaction Law',
    'accommodation-terms': 'Terms and Conditions for Accommondation Contracts',
  },
} as const;

// ページコンテンツ（拡張用）
export const PAGE_CONTENT = {
  ja: {
    index: {
      heroTitle: '翠に染まる、癒しのひととき',
      heroSubtitle: 'A Moment of Stillness, Awash in Green',
      newsTitle: 'お知らせ',
      newsMore: 'お知らせ一覧を見る',
      concept: '「翠に染まる、癒しのひととき」',
      intro: [
        '渓流の清らかな水、瑞々しい草木の翠、',
        'そして、木々の間から差し込むやわらかな光。',
        '三段峡の自然が織りなす翠の世界に身を委ね、',
        '季節の移ろいを感じ、この地に触れながら、',
        '心ほどけるひとときをお過ごしください。'
      ]
    },
    faq: {
      pageTitle: 'よくあるご質問',
      intro: [
        'お客様からよくいただくご質問をまとめました。',
        'こちらに掲載されていないご質問は、<a href="/contact" class="contact-link">お問い合わせページ</a>よりお気軽にお問い合わせください。'
      ],
    },
    gallery: {
      pageTitle: 'ギャラリー',
      categories: {
        all: 'すべて',
        facilities: '館内施設',
        rooms: '客室',
        cuisine: '料理',
        surroundings: '周辺環境'
      }
    },
    contact: {
      pageTitle: 'お問い合わせ',
      phone: {
        title: 'お電話でのお問い合わせ',
        hotelName: '三段峡ホテル 南峰',
        number: 'TEL: 0826-28-2308',
      },
      location: {
        title: '所在地',
        address: '〒731-3813<br/>広島県山県郡安芸太田町柴木1734',
        access: '詳しいアクセス方法につきましては、<a href="/access" class="access-link">アクセスページ</a>をご覧ください。',
      },
      email: {
        title: 'メールでのお問い合わせ',
        description: 'メールでのお問い合わせは、下記の内容をご記入の上、お送りください。<br/>折り返し担当者よりご連絡させていただきます。<br/><br/>・お名前<br/>・ご連絡先（電話番号・メールアドレス）<br/>・お問い合わせ内容',
        address: 'contact@sandankyo.co.jp',
        note: '※ お問い合わせ内容により、回答までにお時間をいただく場合がございます。'
      },
      accessSection: {
        title: 'アクセス'
      },
      notice: {
        title: 'ご宿泊予約について',
        text: 'ご宿泊予約は、お電話またはオンライン予約システムにて承っております。<br/>オンライン予約は、当ページの「ご予約」ボタンよりお進みください。'
      }
    },
    comingSoon: {
      title: 'Coming Soon',
      message: '現在準備中です'
    },
    access: {
      pageTitle: 'アクセス',
      hotelName: '三段峡ホテル 南峰',
      address: '〒731-3813 広島県山県郡安芸太田町柴木1734',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1715475061796!2d132.20594251231256!3d34.599823372842934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aed2a59c04987%3A0xc78b5e19947974a4!2z5LiJ5q615bOh44Ob44OG44Or5Y2X5bOw!5e0!3m2!1sen!2sjp!4v1788572050472!5m2!1sen!2sjp',
      byCar: {
        title: '車でお越しの場合',
        items: [
          '広島市内から約1時間。',
          '中国自動車道「戸河内IC」より約15分。',
          '敷地内無料駐車場ご用意しております。<span class="note">※台数に限りがございます。予めご了承ください。</span>'
        ]
      },
      byPublicTransport: {
        title: '公共交通機関でお越しの場合',
        items: [
          '広島駅新幹線口から安芸太田町役場まで高速バス（新広益線）で約80分。安芸太田町役場からホテルまでタクシーで約5分。<br/><span class="note">※安芸太田町役場からの送迎はございません。予めご了承ください。</span>',
          '広島駅から広島バスセンター最寄り紙屋町東駅まで約10分。広島バスセンターからホテルまで高速バス（三段峡線）で約80分。'
        ]
      }
    }
  },
  en: {
    index: {
      heroTitle: 'A Moment of Stillness, Awash in Green',
      heroSubtitle: '翠に染まる、癒しのひととき',
      newsTitle: 'NEWS',
      newsMore: 'View All News',
      concept: 'A Moment of Stillness, Awash in Green',
      intro: [
        'Clear waters, fresh greenery,',
        'and soft sunlight through the trees.',
        'Slow down and unwind in Sandankyo.',
        'Feel the seasons, savor the culture, and enjoy a peaceful moment.'
      ]
    },
    faq: {
      pageTitle: 'Frequently Asked Questions',
      intro: [
        'Here are answers to frequently asked questions from our guests.',
        'If you have questions not listed here, please feel free to contact us through our <a href="/en/contact" class="contact-link">contact page</a>.'
      ],
    },
    gallery: {
      pageTitle: 'Gallery',
      categories: {
        all: 'All',
        facilities: 'Facilities',
        rooms: 'Rooms',
        cuisine: 'Cuisine',
        surroundings: 'Surroundings'
      }
    },
    contact: {
      pageTitle: 'Contact',
      phone: {
        title: 'Phone',
        hotelName: 'Sandankyo Hotel Nampo',
        number: 'TEL: 0826-28-2308',
      },
      location: {
        title: 'Location',
        address: '〒731-3813<br/>1734 Shibaki, Akiota-cho, Yamagata-gun, Hiroshima',
        access: 'For detailed access information, please see our <a href="/en/access" class="access-link">access page</a>.',
      },
      email: {
        title: 'Email',
        description: 'For email inquiries, please include the following information.<br/>Our staff will contact you shortly.<br/><br/>・Your name<br/>・Contact information (phone number and email address)<br/>・Inquiry details',
        address: 'contact@sandankyo.co.jp',
        note: '* Depending on the nature of your inquiry, it may take some time to respond.'
      },
      accessSection: {
        title: 'Access'
      },
      notice: {
        title: 'About Reservations',
        text: 'Reservations can be made by phone or through our online reservation system.<br/>For online reservations, please click the "Reservation" button on this page.'
      }
    },
    comingSoon: {
      title: 'Coming Soon',
      message: 'Currently under construction'
    },
    access: {
      pageTitle: 'Access',
      hotelName: 'Sandankyo Hotel Nampo',
      address: '〒731-3813 1734 Shibaki, Akiota-cho, Yamagata-gun, Hiroshima',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1715475061796!2d132.20594251231256!3d34.599823372842934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aed2a59c04987%3A0xc78b5e19947974a4!2z5LiJ5q615bOh44Ob44OG44Or5Y2X5bOw!5e0!3m2!1sen!2sjp!4v1788572050472!5m2!1sen!2sjp',
      byCar: {
        title: 'By Car',
        items: [
          'Approx. 1 hour from Hiroshima city center.',
          'Approx. 15 minutes from Togōchi IC on the Chūgoku Expressway.',
          'Free parking available on the premises.<span class="note">* Limited parking spaces available. Please note in advance.</span>'
        ]
      },
      byPublicTransport: {
        title: 'By Public Transportation',
        items: [
          'Approx. 80 minutes by express bus (Shin-Koeki Line) from Hiroshima Station Shinkansen Exit to Akiota Town Hall. Approx. 5 minutes by taxi from Akiota Town Hall to the hotel.<br/><span class="note">* Shuttle service from Akiota Town Hall is not available.</span>',
          'Approx. 10 minutes from Hiroshima Station to Kamiya-cho Higashi Station (nearest to Hiroshima Bus Center). Approx. 80 minutes by express bus (Sandankyo Line) from Hiroshima Bus Center to the hotel.'
        ]
      }
    }
  }
} as const;
