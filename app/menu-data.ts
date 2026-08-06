import type { MenuCategory, PriceOption } from "./types/menu";

export const labels = {
  brandArabic: "كانون",
  brandEnglish: "KANOON",
  menu: {
    ar: "المنيو",
    en: "Menu",
    he: "תפריט",
  },
  heroTitle: {
    ar: "برغر وأكثر،\nمحضّر على أصوله.",
    en: "Burgers and more,\nmade the Kanoon way.",
    he: "המבורגרים ועוד,\nבדרך של קאנון.",
  },
  heroCopy: {
    ar: "تصفّح الأصناف، شاهد الصور، واختار وجبتك على راحتك.",
    en: "Browse the menu, explore the photos, and find your next favorite.",
    he: "גלו את המנות, צפו בתמונות ובחרו את המועדפת עליכם.",
  },
  premium: {
    ar: "جودة مميزة • نكهة حقيقية",
    en: "Premium quality • Real flavor",
    he: "איכות פרימיום • טעם אמיתי",
  },
  categories: {
    ar: "الأقسام",
    en: "Categories",
    he: "קטגוריות",
  },
  items: {
    ar: "وجبة",
    en: "items",
    he: "מנות",
  },
  currency: {
    ar: "شيكل",
    en: "NIS",
    he: "₪",
  },
  spicy: {
    ar: "حار",
    en: "Spicy",
    he: "חריף",
  },
  language: {
    ar: "اللغة",
    en: "Language",
    he: "שפה",
  },
  backToTop: {
    ar: "العودة للأعلى",
    en: "Back to top",
    he: "חזרה למעלה",
  },
  footer: {
    ar: "كانون برغر وأكثر — طعم يجمعنا.",
    en: "Kanoon Burger & More — flavor brings us together.",
    he: "קאנון בורגר ועוד — הטעם שמחבר בינינו.",
  },
} satisfies Record<string, unknown>;

const sizeLabels = {
  small: { ar: "صغير", en: "Small", he: "קטן" },
  medium: { ar: "وسط", en: "Medium", he: "בינוני" },
  large: { ar: "كبير", en: "Large", he: "גדול" },
};

const beefPrices = (small: number, medium: number, large: number): PriceOption[] => [
  { label: sizeLabels.small, price: small },
  { label: sizeLabels.medium, price: medium },
  { label: sizeLabels.large, price: large },
];

const fixedPrice = (price: number): PriceOption[] => [
  {
    label: { ar: "السعر", en: "Price", he: "מחיר" },
    price,
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "beef-burgers",
    name: {
      ar: "برغر اللحمة",
      en: "Beef Burgers",
      he: "המבורגר בקר",
    },
    items: [
      {
        id: "BEEF001",
        slug: "classic-cheeseburger",
        name: {
          ar: "تشيز برغر كلاسيك",
          en: "Classic Cheeseburger",
          he: "צ׳יזבורגר קלאסי",
        },
        description: {
          ar: "قطعة لحم شهية مغطاة بجبنة المطعم الخاصة، تُقدّم مع الخس الطازج، البندورة، البصل والمخلل، وتكتمل بصوص مطعم كانون المميز.",
          en: "A juicy beef patty topped with Kanoon's signature cheese, fresh lettuce, tomato, onion, pickles and signature sauce.",
          he: "קציצת בקר עסיסית עם הגבינה המיוחדת של קאנון, חסה טרייה, עגבנייה, בצל, חמוצים ורוטב הבית.",
        },
        image: "/menu/classic-cheeseburger.webp",
        prices: beefPrices(20, 25, 32),
      },
      {
        id: "BEEF002",
        slug: "mozzarella-burger",
        name: {
          ar: "برغر موزاريلا",
          en: "Mozzarella Burger",
          he: "בורגר מוצרלה",
        },
        description: {
          ar: "قطعة لحم شهية مغطاة بجبنة المطعم الخاصة، تعلوها أصابع موزاريلا مقرمشة، وتُقدّم مع الخس الطازج، البندورة، البصل والمخلل، مع صوص مطعم كانون المميز.",
          en: "A juicy beef patty with Kanoon's signature cheese and crispy mozzarella sticks, served with fresh lettuce, tomato, onion, pickles and signature sauce.",
          he: "קציצת בקר עסיסית עם הגבינה המיוחדת של קאנון ומקלות מוצרלה קריספיים, חסה, עגבנייה, בצל, חמוצים ורוטב הבית.",
        },
        image: "/menu/mozzarella-burger.webp",
        prices: beefPrices(30, 35, 42),
      },
      {
        id: "BEEF003",
        slug: "beef-hot-dog-burger",
        name: {
          ar: "هوت دوغ برغر باللحم",
          en: "Beef Hot Dog Burger",
          he: "בורגר נקניקיות בקר",
        },
        description: {
          ar: "برغر لحم شهي مع هوت دوغ مشوي وجبنة مطعم كانون الخاصة، يُقدّم مع الخس الطازج، البندورة، البصل والمخلل، وتكتمل نكهته بصوص المطعم المميز.",
          en: "A beef burger with grilled hot dog and Kanoon's signature cheese, served with fresh lettuce, tomato, onion, pickles and signature sauce.",
          he: "בורגר בקר עם נקניקייה צלויה והגבינה המיוחדת של קאנון, חסה, עגבנייה, בצל, חמוצים ורוטב הבית.",
        },
        image: "/menu/beef-hot-dog-burger.webp",
        prices: beefPrices(25, 30, 37),
      },
      {
        id: "BEEF004",
        slug: "mushroom-burger",
        name: {
          ar: "مشروم برغر",
          en: "Mushroom Burger",
          he: "בורגר פטריות",
        },
        description: {
          ar: "قطعة لحم شهية مغطاة بجبنة مطعم كانون الخاصة، تعلوها حبات المشروم مع البصل المكرمل، وتُقدّم مع الخس الطازج، البندورة، البصل والمخلل، بالإضافة إلى صوص المطعم المميز.",
          en: "A juicy beef patty with Kanoon's signature cheese, mushrooms and caramelized onion, served with lettuce, tomato, fresh onion, pickles and signature sauce.",
          he: "קציצת בקר עסיסית עם הגבינה המיוחדת של קאנון, פטריות ובצל מקורמל, חסה, עגבנייה, בצל טרי, חמוצים ורוטב הבית.",
        },
        image: "/menu/mushroom-burger.webp",
        prices: beefPrices(28, 33, 40),
      },
      {
        id: "BEEF005",
        slug: "onion-rings-burger",
        name: {
          ar: "برغر حلقات البصل",
          en: "Onion Rings Burger",
          he: "בורגר טבעות בצל",
        },
        description: {
          ar: "قطعة لحم شهية تعلوها حلقات بصل مقلية ذهبية ومقرمشة، وتُقدّم مع الخس الطازج، البندورة، البصل والمخلل، وتكتمل بصوص الجبنة الغني وصوص مطعم كانون المميز.",
          en: "A juicy beef patty topped with golden crispy onion rings, fresh lettuce, tomato, onion and pickles, finished with cheese sauce and Kanoon's signature sauce.",
          he: "קציצת בקר עסיסית עם טבעות בצל זהובות וקריספיות, חסה, עגבנייה, בצל וחמוצים, רוטב גבינה ורוטב קאנון.",
        },
        image: "/menu/onion-rings-burger.webp",
        prices: beefPrices(25, 30, 37),
      },
      {
        id: "BEEF006",
        slug: "creamy-burger",
        name: {
          ar: "كريمي برغر",
          en: "Creamy Burger",
          he: "בורגר קרמי",
        },
        description: {
          ar: "قطعة لحم شهية مغطاة بجبنة مطعم كانون الخاصة وكريمة المطعم الغنية، تُقدّم مع الخس الطازج، البندورة، البصل والمخلل لتمنحك مذاقًا كريميًا مميزًا.",
          en: "A juicy beef patty with Kanoon's signature cheese and rich creamy sauce, served with fresh lettuce, tomato, onion and pickles.",
          he: "קציצת בקר עסיסית עם הגבינה המיוחדת של קאנון ורוטב קרמי עשיר, חסה, עגבנייה, בצל וחמוצים.",
        },
        image: "/menu/creamy-burger.webp",
        prices: beefPrices(30, 35, 40),
      },
      {
        id: "BEEF007",
        slug: "jalapeno-burger",
        name: {
          ar: "هالابينو برغر",
          en: "Jalapeño Burger",
          he: "בורגר חלפיניו",
        },
        description: {
          ar: "قطعة لحم شهية مغطاة بالجبنة وقطع الهالابينو الحارة، تُقدّم مع الخس الطازج، البندورة، البصل والمخلل، وتكتمل بصوص مطعم كانون المميز لنكهة حارة وغنية.",
          en: "A juicy beef patty with cheese and spicy jalapeño, served with fresh lettuce, tomato, onion, pickles and Kanoon's signature sauce.",
          he: "קציצת בקר עסיסית עם גבינה וחלפיניו חריף, חסה, עגבנייה, בצל, חמוצים ורוטב קאנון.",
        },
        image: "/menu/jalapeno-burger.webp",
        prices: beefPrices(25, 30, 37),
        spicy: true,
      },
      {
        id: "BEEF008",
        slug: "hawaiian-burger",
        name: {
          ar: "برغر هاواي",
          en: "Hawaiian Burger",
          he: "בורגר הוואי",
        },
        description: {
          ar: "قطعة لحم شهية تعلوها قطع الأناناس المشوية، وتُقدّم مع الخس الطازج، البندورة، البصل والمخلل، لتجمع بين النكهة الغنية واللمسة الاستوائية الحلوة.",
          en: "A juicy beef patty topped with grilled pineapple, served with fresh lettuce, tomato, onion and pickles for a rich tropical twist.",
          he: "קציצת בקר עסיסית עם אננס צלוי, חסה טרייה, עגבנייה, בצל וחמוצים, בנגיעה טרופית מתקתקה.",
        },
        image: "/menu/hawaiian-burger.webp",
        prices: beefPrices(28, 33, 37),
      },
    ],
  },
  {
    id: "chicken-burgers",
    name: {
      ar: "برغر الدجاج",
      en: "Chicken Burgers",
      he: "בורגר עוף",
    },
    items: [
      {
        id: "CHICKEN001",
        slug: "creamy-chicken-burger",
        name: {
          ar: "برغر كريمي دجاج",
          en: "Creamy Chicken Burger",
          he: "בורגר עוף קרמי",
        },
        description: {
          ar: "قطع دجاج شهية مغطاة بكريمة مطعم كانون الخاصة، تُقدّم مع الخس الطازج، البندورة، البصل والمخلل لمذاق كريمي غني ومميز.",
          en: "Tender chicken pieces in Kanoon's signature creamy sauce, served with fresh lettuce, tomato, onion and pickles.",
          he: "נתחי עוף ברוטב הקרמי המיוחד של קאנון, עם חסה טרייה, עגבנייה, בצל וחמוצים.",
        },
        image: "/menu/creamy-chicken-burger.webp",
        prices: fixedPrice(23),
      },
      {
        id: "CHICKEN002",
        slug: "crispy-chicken-burger",
        name: {
          ar: "كريسبي برغر",
          en: "Crispy Chicken Burger",
          he: "בורגר עוף קריספי",
        },
        description: {
          ar: "دجاج كريسبي بطبقة ذهبية ومقرمشة، يُقدّم مع الخس الطازج، البندورة، البصل والمخلل لمذاق مقرمش وشهي.",
          en: "Golden crispy chicken served with fresh lettuce, tomato, onion and pickles.",
          he: "עוף זהוב וקריספי עם חסה טרייה, עגבנייה, בצל וחמוצים.",
        },
        image: "/menu/crispy-chicken-burger.webp",
        prices: fixedPrice(23),
      },
      {
        id: "CHICKEN003",
        slug: "grilled-chicken-steak-burger",
        name: {
          ar: "ستيك برغر",
          en: "Grilled Chicken Steak Burger",
          he: "בורגר סטייק עוף",
        },
        description: {
          ar: "شرائح دجاج ستيك مشوية بعناية، تُقدّم مع الخس الطازج، البندورة، البصل والمخلل لمذاق خفيف وشهي.",
          en: "Grilled chicken steak strips served with fresh lettuce, tomato, onion and pickles.",
          he: "רצועות סטייק עוף צלויות עם חסה טרייה, עגבנייה, בצל וחמוצים.",
        },
        image: "/menu/grilled-chicken-steak-burger.webp",
        prices: fixedPrice(23),
      },
    ],
  },
  {
    id: "sandwiches",
    name: {
      ar: "الساندويشات",
      en: "Sandwiches",
      he: "סנדוויצ׳ים",
    },
    items: [
      {
        id: "SANDWICH001",
        slug: "classic-hot-dog",
        name: {
          ar: "هوت دوغ كلاسيك",
          en: "Classic Hot Dog",
          he: "הוט דוג קלאסי",
        },
        description: {
          ar: "هوت دوغ مشوي.",
          en: "Grilled hot dog.",
          he: "הוט דוג צלוי.",
        },
        image: "/menu/classic-hot-dog.webp",
        prices: fixedPrice(15),
      },
      {
        id: "SANDWICH002",
        slug: "mushroom-hot-dog",
        name: {
          ar: "ماشروم هوت دوغ",
          en: "Mushroom Hot Dog",
          he: "הוט דוג פטריות",
        },
        description: {
          ar: "هوت دوغ مشوي مع المشروم، الفليفلة والبصل المشوي.",
          en: "Grilled hot dog with mushrooms, bell pepper and grilled onion.",
          he: "הוט דוג צלוי עם פטריות, פלפל ובצל צלוי.",
        },
        image: "/menu/mushroom-hot-dog.webp",
        prices: fixedPrice(18),
      },
      {
        id: "SANDWICH003",
        slug: "jalapeno-hot-dog",
        name: {
          ar: "هوت دوغ هالابينو",
          en: "Jalapeño Hot Dog",
          he: "הוט דוג חלפיניו",
        },
        description: {
          ar: "هوت دوغ مشوي مع قطع الهالابينو الحارة لنكهة جريئة ومميزة.",
          en: "Grilled hot dog with spicy jalapeño for a bold kick.",
          he: "הוט דוג צלוי עם חלפיניו חריף לטעם נועז.",
        },
        image: "/menu/jalapeno-hot-dog.webp",
        prices: fixedPrice(18),
        spicy: true,
      },
      {
        id: "SANDWICH004",
        slug: "onion-rings-hot-dog",
        name: {
          ar: "هوت دوغ حلقات البصل",
          en: "Onion Rings Hot Dog",
          he: "הוט דוג טבעות בצל",
        },
        description: {
          ar: "هوت دوغ مشوي مع حلقات البصل المقلية الذهبية والمقرمشة.",
          en: "Grilled hot dog topped with golden crispy onion rings.",
          he: "הוט דוג צלוי עם טבעות בצל זהובות וקריספיות.",
        },
        image: "/menu/onion-rings-hot-dog.webp",
        prices: fixedPrice(18),
      },
      {
        id: "SANDWICH005",
        slug: "chicken-schnitzel-sandwich",
        name: {
          ar: "ساندويش شنيتسل",
          en: "Chicken Schnitzel Sandwich",
          he: "סנדוויץ׳ שניצל",
        },
        description: {
          ar: "صدر دجاج مقلي بطبقة ذهبية ومقرمشة، يُقدّم مع المايونيز، الخس الطازج، البندورة، البصل والمخلل.",
          en: "Golden crispy fried chicken breast with mayonnaise, fresh lettuce, tomato, onion and pickles.",
          he: "חזה עוף מטוגן וזהוב עם מיונז, חסה טרייה, עגבנייה, בצל וחמוצים.",
        },
        image: "/menu/chicken-schnitzel-sandwich.webp",
        prices: fixedPrice(20),
      },
      {
        id: "SANDWICH006",
        slug: "musahab-chicken-sandwich",
        name: {
          ar: "ساندويش مسحب",
          en: "Musahab Chicken Sandwich",
          he: "סנדוויץ׳ מוסחב עוף",
        },
        description: {
          ar: "قطع من صدر الدجاج المشوي مع الفليفلة والبصل المشويين والمخلل، وتكتمل بصوص الجبنة الخاص بمطعم كانون وصوص المطعم المميز.",
          en: "Grilled chicken breast with bell pepper, grilled onion and pickles, finished with Kanoon's cheese sauce and signature sauce.",
          he: "נתחי חזה עוף צלויים עם פלפל, בצל צלוי וחמוצים, בתוספת רוטב הגבינה ורוטב הבית של קאנון.",
        },
        image: "/menu/musahab-chicken-sandwich.webp",
        prices: fixedPrice(20),
      },
      {
        id: "SANDWICH007",
        slug: "chicken-fajita-sandwich",
        name: {
          ar: "ساندويش فاهيتا تشيكن",
          en: "Chicken Fajita Sandwich",
          he: "סנדוויץ׳ פאהיטה עוף",
        },
        description: {
          ar: "شرائح من صدر الدجاج المشوي مع الفليفلة، المشروم والبصل، متبلة ببهارات حارة وتُقدّم مع الصوص لمذاق غني وجريء.",
          en: "Grilled chicken breast with bell pepper, mushrooms and onion, seasoned with spicy fajita spices and sauce.",
          he: "חזה עוף צלוי עם פלפל, פטריות ובצל, בתיבול פאהיטה חריף ורוטב.",
        },
        image: "/menu/chicken-fajita-sandwich.webp",
        prices: fixedPrice(20),
        spicy: true,
      },
      {
        id: "SANDWICH008",
        slug: "zinger-chicken-sandwich",
        name: {
          ar: "ساندويش زينجر",
          en: "Zinger Chicken Sandwich",
          he: "סנדוויץ׳ זינגר",
        },
        description: {
          ar: "دجاج كريسبي حار بطبقة ذهبية ومقرمشة، يُقدّم مع الخس الطازج، المخلل والمايونيز.",
          en: "Spicy golden crispy chicken served with fresh lettuce, pickles and mayonnaise.",
          he: "עוף חריף, זהוב וקריספי עם חסה טרייה, חמוצים ומיונז.",
        },
        image: "/menu/zinger-chicken-sandwich.webp",
        prices: fixedPrice(20),
        spicy: true,
      },
    ],
  },
  {
    id: "fries",
    name: {
      ar: "البطاطا",
      en: "Fries",
      he: "צ׳יפס",
    },
    items: [
      {
        id: "FRIES001",
        slug: "curly-fries",
        name: {
          ar: "بطاطا كيرلي",
          en: "Curly Fries",
          he: "צ׳יפס מסולסל",
        },
        image: "/menu/curly-fries.webp",
        prices: [
          { label: sizeLabels.small, price: 12 },
          { label: sizeLabels.large, price: 22 },
        ],
      },
      {
        id: "FRIES002",
        slug: "potato-wedges",
        name: {
          ar: "بطاطا ويدجز",
          en: "Potato Wedges",
          he: "תפוחי אדמה וודג׳ס",
        },
        image: "/menu/potato-wedges.webp",
        prices: [
          { label: sizeLabels.small, price: 10 },
          { label: sizeLabels.large, price: 20 },
        ],
      },
      {
        id: "FRIES003",
        slug: "french-fries",
        name: {
          ar: "بطاطا شيبس",
          en: "French Fries",
          he: "צ׳יפס",
        },
        image: "/menu/french-fries.webp",
        prices: [
          { label: sizeLabels.small, price: 7 },
          { label: sizeLabels.large, price: 15 },
        ],
      },
      {
        id: "FRIES004",
        slug: "nacho-cheese-fries",
        name: {
          ar: "بطاطا شيبس بجبنة الناتشوز المميزة",
          en: "Fries with Signature Nacho Cheese",
          he: "צ׳יפס עם גבינת נאצ׳וס מיוחדת",
        },
        image: "/menu/nacho-cheese-fries.webp",
        prices: [
          { label: sizeLabels.small, price: 12 },
          { label: sizeLabels.large, price: 20 },
        ],
      },
    ],
  },
  {
    id: "snacks",
    name: {
      ar: "السناك",
      en: "Snacks",
      he: "נשנושים",
    },
    items: [
      {
        id: "SNACK001",
        slug: "crispy-chicken-wings-8pcs",
        name: {
          ar: "8 أجنحة دجاج كريسبي",
          en: "8 Crispy Chicken Wings",
          he: "8 כנפי עוף קריספיות",
        },
        description: {
          ar: "ثمانية أجنحة دجاج كريسبي بطبقة ذهبية ومقرمشة.",
          en: "Eight chicken wings in a golden crispy coating.",
          he: "שמונה כנפי עוף בציפוי זהוב וקריספי.",
        },
        image: "/menu/crispy-chicken-wings-8pcs.webp",
        prices: fixedPrice(20),
      },
      {
        id: "SNACK002",
        slug: "grilled-chicken-wings-8pcs",
        name: {
          ar: "8 أجنحة دجاج مشوية",
          en: "8 Grilled Chicken Wings",
          he: "8 כנפי עוף על הגריל",
        },
        description: {
          ar: "ثمانية أجنحة دجاج مشوية بنكهة غنية.",
          en: "Eight grilled chicken wings with rich flavor.",
          he: "שמונה כנפי עוף צלויות בטעם עשיר.",
        },
        image: "/menu/grilled-chicken-wings-8pcs.webp",
        prices: fixedPrice(20),
      },
      {
        id: "SNACK003",
        slug: "bbq-chicken-wings-8pcs",
        name: {
          ar: "8 أجنحة بصوص الباربكيو",
          en: "8 BBQ Chicken Wings",
          he: "8 כנפי עוף ברוטב ברביקיו",
        },
        description: {
          ar: "ثمانية أجنحة دجاج مغطاة بصوص الباربكيو الغني.",
          en: "Eight chicken wings coated in rich barbecue sauce.",
          he: "שמונה כנפי עוף ברוטב ברביקיו עשיר.",
        },
        image: "/menu/bbq-chicken-wings-8pcs.webp",
        prices: fixedPrice(20),
      },
      {
        id: "SNACK004",
        slug: "crispy-mozzarella-sticks-4pcs",
        name: {
          ar: "4 أصابع جبنة موزاريلا مقرمشة",
          en: "4 Crispy Mozzarella Sticks",
          he: "4 מקלות מוצרלה קריספיים",
        },
        description: {
          ar: "أربعة أصابع من جبنة الموزاريلا المغطاة بطبقة ذهبية ومقرمشة.",
          en: "Four mozzarella sticks in a golden crispy coating.",
          he: "ארבעה מקלות מוצרלה בציפוי זהוב וקריספי.",
        },
        image: "/menu/crispy-mozzarella-sticks-4pcs.webp",
        prices: fixedPrice(18),
      },
      {
        id: "SNACK005",
        slug: "crispy-chicken-strips-6pcs",
        name: {
          ar: "6 أصابع دجاج كريسبي",
          en: "6 Crispy Chicken Strips",
          he: "6 רצועות עוף קריספיות",
        },
        description: {
          ar: "ستة أصابع من الدجاج الكريسبي بطبقة ذهبية ومقرمشة.",
          en: "Six golden and crispy chicken strips.",
          he: "שש רצועות עוף זהובות וקריספיות.",
        },
        image: "/menu/crispy-chicken-strips-6pcs.webp",
        prices: fixedPrice(20),
      },
      {
        id: "SNACK006",
        slug: "crispy-onion-rings-8pcs",
        name: {
          ar: "8 حلقات بصل مقرمشة",
          en: "8 Crispy Onion Rings",
          he: "8 טבעות בצל קריספיות",
        },
        description: {
          ar: "ثماني حلقات بصل مقلية بطبقة ذهبية ومقرمشة.",
          en: "Eight fried onion rings in a golden crispy coating.",
          he: "שמונה טבעות בצל מטוגנות בציפוי זהוב וקריספי.",
        },
        image: "/menu/crispy-onion-rings-8pcs.webp",
        prices: fixedPrice(15),
      },
      {
        id: "SNACK007",
        slug: "crispy-potato-balls-8pcs",
        name: {
          ar: "8 كرات بطاطا مقرمشة",
          en: "8 Crispy Potato Balls",
          he: "8 כדורי תפוחי אדמה קריספיים",
        },
        description: {
          ar: "ثماني كرات بطاطا ذهبية ومقرمشة.",
          en: "Eight golden and crispy potato balls.",
          he: "שמונה כדורי תפוחי אדמה זהובים וקריספיים.",
        },
        image: "/menu/crispy-potato-balls-8pcs.webp",
        prices: fixedPrice(15),
      },
      {
        id: "SNACK008",
        slug: "snacks-box",
        name: {
          ar: "سناكس بوكس",
          en: "Snacks Box",
          he: "מארז נשנושים",
        },
        description: {
          ar: "بوكس سناكس متنوع يجمع بين حلقات البصل المقرمشة، أصابع الدجاج، أصابع الجبنة والبطاطا.",
          en: "A mixed snacks box with crispy onion rings, chicken strips, cheese sticks and fries.",
          he: "מארז נשנושים מגוון עם טבעות בצל קריספיות, רצועות עוף, מקלות גבינה וצ׳יפס.",
        },
        image: "/menu/snacks-box.webp",
        prices: fixedPrice(30),
      },
    ],
  },
  {
    id: "special-meals",
    name: {
      ar: "وجبات خاصة",
      en: "Special Meals",
      he: "מנות מיוחדות",
    },
    items: [
      {
        id: "SPECIAL001",
        slug: "chicken-cheese-fries",
        name: {
          ar: "تشيز فرايز تشيكن",
          en: "Chicken Cheese Fries",
          he: "צ׳יפס גבינה עם עוף",
        },
        description: {
          ar: "طبقنا الأكثر طلبًا: بطاطا شيبس مغطاة بقطع دجاج كريسبي باختيارك حار أو عادي، مع صوص مطعم كانون الخاص، صوص الجبنة المميز وقطع الهالابينو.",
          en: "Our most popular plate: fries topped with your choice of spicy or classic crispy chicken, Kanoon's signature sauce, cheese sauce and jalapeño.",
          he: "המנה המבוקשת ביותר שלנו: צ׳יפס עם עוף קריספי חריף או רגיל לבחירה, רוטב קאנון, רוטב גבינה וחלפיניו.",
        },
        image: "/menu/chicken-cheese-fries.webp",
        prices: [
          { label: sizeLabels.small, price: 20 },
          { label: sizeLabels.large, price: 30 },
        ],
        badge: {
          ar: "الأكثر طلبًا",
          en: "Most Popular",
          he: "הכי מבוקש",
        },
        selection: {
          label: {
            ar: "اختر الدجاج",
            en: "Choose your chicken",
            he: "בחרו סוג עוף",
          },
          options: [
            { ar: "عادي", en: "Classic", he: "רגיל" },
            { ar: "حار", en: "Spicy", he: "חריף" },
          ],
          required: true,
        },
      },
    ],
  },
];
