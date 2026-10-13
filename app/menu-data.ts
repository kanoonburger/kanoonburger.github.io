import { hiddenCategoryIds, hiddenItemIds } from "./data/menu-visibility";
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
    ar: "صنف",
    en: "items",
    he: "פריטים",
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

const beefSizeLabels = {
  small: { ar: "صغير — 100 غم لحمة", en: "Small — 100 g beef", he: "קטן — 100 גרם בשר בקר" },
  medium: { ar: "وسط — 150 غم لحمة", en: "Medium — 150 g beef", he: "בינוני — 150 גרם בשר בקר" },
  large: { ar: "كبير — 200 غم لحمة", en: "Large — 200 g beef", he: "גדול — 200 גרם בשר בקר" },
};

const beefPrices = (small: number, medium: number, large: number): PriceOption[] => [
  { label: beefSizeLabels.small, price: small },
  { label: beefSizeLabels.medium, price: medium },
  { label: beefSizeLabels.large, price: large },
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
        image: "/menu/crispy-chicken-burger-approved-20261013.webp",
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
          ar: "باجيت هوت دوغ كلاسيك",
          en: "Baguette Classic Hot Dog",
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
          ar: "باجيت ماشروم هوت دوغ",
          en: "Baguette Mushroom Hot Dog",
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
          ar: "باجيت هوت دوغ هالابينو",
          en: "Baguette Jalapeño Hot Dog",
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
          ar: "باجيت هوت دوغ حلقات البصل",
          en: "Baguette Onion Rings Hot Dog",
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
          ar: "باجيت شنيتسل",
          en: "Baguette Chicken Schnitzel",
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
          ar: "باجيت مسحب",
          en: "Baguette Musahab Chicken",
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
          ar: "باجيت فاهيتا تشيكن",
          en: "Baguette Chicken Fajita",
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
          ar: "باجيت زينجر",
          en: "Baguette Zinger Chicken",
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

// Local-preview menu revisions. Original product IDs are deliberately preserved.
const localized = (ar: string, en: string, he: string) => ({ ar, en, he });
const byId = (id: string) => menuCategories.flatMap((category) => category.items).find((item) => item.id === id);
const changePrice = (id: string, price: number) => { const item = byId(id); if (item) item.prices = fixedPrice(price); };
const removeId = (id: string) => { for (const category of menuCategories) category.items = category.items.filter((item) => item.id !== id); };
const option = (id: string, ar: string, en: string, he: string, price: number) => ({ id, label: localized(ar, en, he), price });
const beefAddOnGroup = {
  id: "extra-beef",
  label: localized("قطع لحمة إضافية (اختر الوزن والعدد)", "Extra beef patties (weight and quantity)", "תוספת קציצות בקר (משקל וכמות)"),
  kind: "quantity" as const,
  options: [
    option("100g", "لحمة 100 غم", "100 g beef patty", "קציצת בקר 100 גרם", 10),
    option("150g", "لحمة 150 غم", "150 g beef patty", "קציצת בקר 150 גרם", 12),
    option("200g", "لحمة 200 غم", "200 g beef patty", "קציצת בקר 200 גרם", 15),
  ],
};
const customBurgerGroup = {
  id: "custom-toppings", label: localized("إضافات على كيفك (اختيارية)", "Build-your-own toppings (optional)", "תוספות לבחירה (לא חובה)"), kind: "toggle" as const,
  options: [
    option("jalapeno", "هالابينو", "Jalapeño", "חלפיניו", 3),
    option("egg", "بيض عيون", "Fried egg", "ביצת עין", 5),
    option("avocado", "أفوكادو", "Avocado", "אבוקדו", 7),
    option("mozzarella", "موتزاريلا", "Mozzarella", "מוצרלה", 10),
    option("onion-rings", "حلقات بصل", "Onion rings", "טבעות בצל", 6),
    option("caramelized-onion", "بصل مكرمل", "Caramelized onion", "בצל מקורמל", 5),
    option("pineapple", "أناناس", "Pineapple", "אננס", 8),
  ],
};
for (const item of menuCategories[0].items) { item.addOnGroups = [beefAddOnGroup]; item.allowBulkQuantity = true; }
const mexicano = byId("BEEF007");
if (mexicano) { mexicano.slug = "mexicano-burger"; mexicano.name = localized("برغر ماكسيكانو", "Mexicano Burger", "בורגר מקסיקנו"); }
menuCategories[0].items.push({
  id: "BEEF010", slug: "monster-burger", name: localized("برغر الوحش", "Monster Burger", "בורגר המפלצת"),
  description: localized("برغر لحمة مع جبنة شيدر، أصابع موزاريلا، حلقات بصل، شرائح لحم وصوص كانون.", "Beef burger with cheddar, mozzarella sticks, onion rings, beef slices and Kanoon sauce.", "בורגר בקר עם צ׳דר, מקלות מוצרלה, טבעות בצל, פרוסות בשר ורוטב קאנון."),
  image: "/menu/monster-burger.webp", prices: [],
});
menuCategories[0].items.push({
  id: "BEEF009", slug: "build-your-own-beef-burger", name: localized("برغر على كيفك", "Build Your Own Burger", "בורגר בהרכבה אישית"),
  image: "/menu/classic-cheeseburger.webp", prices: beefPrices(20,25,32), addOnGroups: [customBurgerGroup, beefAddOnGroup], customOneAtATime: true,
});

changePrice("CHICKEN001", 30);
menuCategories[1].items.push(
  { id: "CHICKEN004", slug: "chicken-schnitzel-burger", name: localized("شنيتسل برغر", "Schnitzel Burger", "בורגר שניצל"), image: "/menu/chicken-schnitzel-burger.webp", prices: fixedPrice(25) },
  { id: "CHICKEN005", slug: "mexican-chicken-burger", name: localized("مكسيكي برغر", "Mexican Chicken Burger", "בורגר עוף מקסיקני"), image: "/menu/mexican-chicken-burger.webp", prices: fixedPrice(25) },
  { id: "CHICKEN006", slug: "super-crispy-burger", name: localized("سوبر كريسبي برغر", "Super Crispy Burger", "סופר קריספי בורגר"), image: "/menu/super-crispy-burger-approved-20261013.webp", prices: fixedPrice(25) },
);
changePrice("SANDWICH002", 20);
changePrice("SANDWICH003", 15);
changePrice("SANDWICH004", 20);
const hotDog = byId("SANDWICH003");
if (hotDog) { hotDog.slug = "mexicano-hot-dog"; hotDog.name = localized("باجيت ماكسيكانو هوت دوغ", "Baguette Mexicano Hot Dog", "בגט הוט דוג מקסיקנו"); }
menuCategories[2].items.push(
  { id: "SANDWICH009", slug: "creamy-chicken-sandwich", name: localized("باجيت دجاج كريمي", "Baguette Creamy Chicken", "בגט עוף קרמי"), image: "/menu/creamy-chicken-sandwich.webp", prices: fixedPrice(30) },
  { id: "SANDWICH010", slug: "grilled-chicken-steak-sandwich", name: localized("باجيت ستيك دجاج مشوي", "Baguette Grilled Chicken Steak", "בגט סטייק עוף צלוי"), image: "/menu/grilled-chicken-steak-sandwich.webp", prices: fixedPrice(20) },
);
removeId("FRIES004");
const chips = byId("FRIES003");
if (chips) chips.prices = [
  { label: sizeLabels.small, price: 7 },
  { label: sizeLabels.medium, price: 10 },
  { label: sizeLabels.large, price: 15 },
];
const friesCheeseGroup = { id: "nacho-cheese", label: localized("إضافة جبنة ناتشوز (اختياري)", "Add nacho cheese (optional)", "תוספת גבינת נאצ׳וס (לבחירה)"), kind: "toggle" as const,
  options: [option("nacho", "جبنة ناتشوز", "Nacho cheese", "גבינת נאצ׳וס", 5)] };
for (const item of menuCategories[3].items) item.addOnGroups = [friesCheeseGroup];

removeId("SNACK005");
const crispyWings = byId("SNACK001");
if (crispyWings) crispyWings.selection = { label: localized("اختر النكهة", "Choose flavor", "בחרו טעם"), options: [localized("عادي", "Classic", "רגיל"), localized("حار", "Spicy", "חריף")], required: true };
const bbqWings = byId("SNACK003");
if (bbqWings) bbqWings.selection = { label: localized("اختر النكهة", "Choose flavor", "בחרו טעם"), options: [localized("حلو", "Sweet", "מתוק"), localized("حار", "Spicy", "חריף")], required: true };
const potatoBalls = byId("SNACK007");
if (potatoBalls) { potatoBalls.slug = "crispy-potato-balls-10pcs"; potatoBalls.name = localized("10 كرات بطاطا", "10 Potato Balls", "10 כדורי תפוחי אדמה"); potatoBalls.description = undefined; }
const snackBox = byId("SNACK008");
if (snackBox) { snackBox.name = localized("سناك بوكس مكس", "Mixed Snacks Box", "מארז נשנושים מיקס"); snackBox.description = localized("قطعتان دجاج كريسبي، قطعتان موتزاريلا، حلقتا بصل، كرتا بطاطا، وبطاطا شيبس.", "2 crispy chicken strips, 2 mozzarella sticks, 2 onion rings, 2 potato balls and fries.", "2 רצועות עוף קריספי, 2 מקלות מוצרלה, 2 טבעות בצל, 2 כדורי תפוחי אדמה וצ׳יפס."); }
menuCategories[4].items.push({
  id: "SNACK009", slug: "sesame-chicken-sticks", name: localized("أصابع دجاج بالسمسم (5 قطع)", "Sesame Chicken Sticks (5 pcs)", "אצבעות עוף בשומשום (5 יחידות)"),
  description: localized("أصابع دجاج بسمسم مقرمشة تُقدّم مع صوص جانبي. السعر يُحدَّد لاحقًا.", "Crispy sesame chicken sticks served with a side dip. Price to be added later.", "אצבעות עוף שומשום קריספיות עם מטבל בצד. המחיר יתווסף בהמשך."),
  image: "/menu/sesame-chicken-sticks.webp", prices: fixedPrice(30)
});

const individual = menuCategories.find((category) => category.id === "special-meals");
if (individual) {
  individual.id = "individual-meals";
  individual.name = localized("وجبات فردية", "Individual Meals", "ארוחות אישיות");
  const chickenCheeseFries = individual.items.find((item) => item.id === "SPECIAL001");
  if (chickenCheeseFries) {
    chickenCheeseFries.description = localized(
      "بطاطا شيبس مغطاة باختيارك من الدجاج الكريسبي أو الشنيتسل، ثم تختار حار أو عادي، مع صوص كانون الخاص وصوص الجبنة.",
      "Fries topped with your choice of crispy chicken or schnitzel, then choose spicy or classic, with Kanoon sauce and cheese sauce.",
      "צ׳יפס עם בחירה בין עוף קריספי או שניצל, ולאחר מכן חריף או רגיל, עם רוטב קאנון ורוטב גבינה.",
    );
    chickenCheeseFries.selection = {
      label: localized("اختر نوع الدجاج", "Choose chicken type", "בחרו סוג עוף"),
      options: [localized("كريسبي", "Crispy", "קריספי"), localized("شنيتسل", "Schnitzel", "שניצל")],
      required: true,
    };
    chickenCheeseFries.addOnGroups = [
      {
        id: "special-spice-level",
        label: localized("اختر النكهة", "Choose flavor", "בחרו טעם"),
        kind: "single",
        required: true,
        options: [
          option("classic", "عادي", "Classic", "רגיל", 0),
          option("spicy", "حار", "Spicy", "חריף", 0),
        ],
      },
    ];
  }

  individual.items.push(
    {
      id: "MEAL001",
      slug: "caesar-salad",
      name: localized("سلطة سيزر", "Caesar Salad", "סלט קיסר"),
      description: localized(
        "سلطة سيزر طازجة ومقرمشة، متوفرة بدون دجاج أو مع دجاج، وبحجمين صغير وكبير.",
        "Fresh crunchy Caesar salad, available with or without chicken in small and large sizes.",
        "סלט קיסר טרי וקריספי, זמין עם או בלי עוף, בגדלים קטן וגדול.",
      ),
      image: "/menu/caesar-salad.webp",
      prices: [
        { label: localized("صغير بدون دجاج", "Small without chicken", "קטן ללא עוף"), price: 15 },
        { label: localized("كبير بدون دجاج", "Large without chicken", "גדול ללא עוף"), price: 20 },
        { label: localized("صغير مع دجاج", "Small with chicken", "קטן עם עוף"), price: 20 },
        { label: localized("كبير مع دجاج", "Large with chicken", "גדול עם עוף"), price: 30 },
      ],
      priceLabel: localized("اختر الحجم والنوع", "Choose size and type", "בחרו גודל וסוג"),
    },
    {
      id: "MEAL002",
      slug: "crispy-meal-3-pieces",
      name: localized("وجبة كريسبي 3 قطع", "3-Piece Crispy Meal", "ארוחת קריספי 3 יחידות"),
      description: localized("3 قطع كريسبي مع بطاطا وصوصات، ويمكنك إضافة قطع إضافية.", "3 crispy chicken pieces with fries and sauces, with optional extra pieces.", "3 יחידות קריספי עם צ׳יפס ורטבים, עם אפשרות להוסיף יחידות נוספות."),
      image: "/menu/crispy-meal-3-pieces.webp",
      prices: fixedPrice(20),
      addOnGroups: [
        {
          id: "crispy-meal-3-flavor",
          label: localized("اختر النكهة", "Choose flavor", "בחרו טעם"),
          kind: "single",
          required: true,
          options: [
            option("classic", "عادي", "Classic", "רגיל", 0),
            option("spicy", "حار", "Spicy", "חריף", 0),
          ],
        },
        {
          id: "crispy-meal-3-extra-piece",
          label: localized("إضافة قطع كريسبي", "Add extra crispy pieces", "הוספת יחידות קריספי"),
          kind: "quantity",
          options: [option("extra-piece", "+ قطعة كريسبي إضافية", "+ extra crispy piece", "+ יחידת קריספי נוספת", 5)],
        },
      ],
      customOneAtATime: true,
    },
    {
      id: "MEAL003",
      slug: "crispy-meal-5-pieces",
      name: localized("وجبة كريسبي 5 قطع", "5-Piece Crispy Meal", "ארוחת קריספי 5 יחידות"),
      description: localized("5 قطع كريسبي مع بطاطا وصوصات، ويمكنك إضافة قطع إضافية.", "5 crispy chicken pieces with fries and sauces, with optional extra pieces.", "5 יחידות קריספי עם צ׳יפס ורטבים, עם אפשרות להוסיף יחידות נוספות."),
      image: "/menu/crispy-meal-5-pieces.webp",
      prices: fixedPrice(30),
      addOnGroups: [
        {
          id: "crispy-meal-5-flavor",
          label: localized("اختر النكهة", "Choose flavor", "בחרו טעם"),
          kind: "single",
          required: true,
          options: [
            option("classic", "عادي", "Classic", "רגיל", 0),
            option("spicy", "حار", "Spicy", "חריף", 0),
          ],
        },
        {
          id: "crispy-meal-5-extra-piece",
          label: localized("إضافة قطع كريسبي", "Add extra crispy pieces", "הוספת יחידות קריספי"),
          kind: "quantity",
          options: [option("extra-piece", "+ قطعة كريسبي إضافية", "+ extra crispy piece", "+ יחידת קריספי נוספת", 5)],
        },
      ],
      customOneAtATime: true,
    },
  );
}
menuCategories.push({
  id: "kids-meals",
  name: localized("وجبات أطفال", "Kids Meals", "ארוחות ילדים"),
  items: [
    {
      id: "KIDS001",
      slug: "kids-hot-dog-meal",
      name: localized("وجبة أطفال هوت دوغ", "Kids Hot Dog Meal", "ארוחת ילדים הוט דוג"),
      description: localized("هوت دوغ مع بطاطا شيبس وعصير.", "Hot dog with fries and juice.", "הוט דוג עם צ׳יפס ומיץ."),
      image: "/menu/kids-hot-dog-meal-approved-20261013.png",
      prices: fixedPrice(20),
    },
    {
      id: "KIDS002",
      slug: "kids-musahab-meal",
      name: localized("وجبة أطفال مسحب", "Kids Musahab Meal", "ארוחת ילדים מוסחב"),
      description: localized("ساندويش مسحب مع بطاطا شيبس وعصير.", "Musahab sandwich with fries and juice.", "סנדוויץ׳ מוסחב עם צ׳יפס ומיץ."),
      image: "/menu/kids-musahab-meal-approved-20261013.png",
      prices: fixedPrice(20),
    },
    {
      id: "KIDS003",
      slug: "kids-classic-burger-meal",
      name: localized("وجبة أطفال برغر كلاسيك", "Kids Classic Burger Meal", "ארוחת ילדים בורגר קלאסי"),
      description: localized("برغر كلاسيك مع بطاطا شيبس وعصير.", "Classic burger with fries and juice.", "בורגר קלאסי עם צ׳יפס ומיץ."),
      image: "/menu/kids-classic-burger-meal-approved-20261013.jpeg",
      prices: fixedPrice(25),
    },
    {
      id: "KIDS004",
      slug: "kids-crispy-burger-meal",
      name: localized("وجبة أطفال برغر كريسبي", "Kids Crispy Burger Meal", "ארוחת ילדים בורגר קריספי"),
      description: localized("برغر كريسبي مع بطاطا شيبس وعصير.", "Crispy burger with fries and juice.", "בורגר קריספי עם צ׳יפס ומיץ."),
      image: "/menu/kids-crispy-burger-meal-approved-20261013.png",
      prices: fixedPrice(25),
    },
  ],
});
menuCategories.push({ id: "family-offers", name: localized("عروض عائلية", "Family Offers", "מבצעים משפחתיים"), items: [
  { id: "FAMILY005", slug: "five-classic-burgers-offer", name: localized("عرض اللمة", "Al-Lamma Family Offer", "מבצע אל-למה"),
    description: localized("5 تشيز برغر كلاسيك (100 غم للحبة) + بطاطا كبيرة + صوصات متنوعة + 5 علب تشات كولا.", "5 classic cheeseburgers (100 g each) + large fries + assorted sauces + 5 Chat Cola cans.", "5 צ׳יזבורגרים קלאסיים (100 גרם כל אחד) + צ׳יפס גדול + רטבים מגוונים + 5 פחיות צ׳אט קולה."),
    image: "/menu/family-five-classic-chat.webp", prices: fixedPrice(100) },
  { id: "FAMILY001", slug: "four-beef-burgers-offer", name: localized("متكتك", "Metaktak", "מטקטק"),
    description: localized("4 برغر لحمة (150 غم للحبة) + بطاطا كبيرة + 4 حلقات بصل + 4 كرات بطاطا + صوصات متنوعة + 4 علب تشات كولا.", "4 beef burgers (150 g each) + large fries + 4 onion rings + 4 potato balls + assorted sauces + 4 Chat Cola cans.", "4 המבורגרי בקר (150 גרם כל אחד) + צ׳יפס גדול + 4 טבעות בצל + 4 כדורי תפוחי אדמה + רטבים מגוונים + 4 פחיות צ׳אט קולה."),
    image: "/menu/family-four-beef-burgers-chat.webp", prices: fixedPrice(110) },
  { id: "FAMILY002", slug: "abu-shreek-box", name: localized("بوكس أبو شريك", "Abu Shreek Box", "בוקס אבו שריק"),
    description: localized("4 ميني برغر دجاج مشكّل + بطاطا كبيرة + 4 علب تشات كولا.", "4 assorted mini chicken burgers + large fries + 4 Chat Cola cans.", "4 מיני בורגר עוף מגוונים + צ׳יפס גדול + 4 פחיות צ׳אט קולה."),
    image: "/menu/family-abu-shreek-box-chat.webp", prices: fixedPrice(60) },
  { id: "FAMILY003", slug: "mixed-sandwich-offer", name: localized("مكس ساندويش", "Mixed Sandwich Offer", "מבצע מיקס סנדוויצ׳ים"),
    description: localized("2 باجيت هوت دوغ + 2 باجيت شنيتسل أو 2 باجيت زينجر حسب اختيارك + بطاطا + 4 علب تشات كولا.", "2 hot dog baguettes + your choice of 2 schnitzel or 2 zinger baguettes + fries + 4 Chat Cola cans.", "2 בגט הוט דוג + בחירה בין 2 בגט שניצל או 2 בגט זינגר + צ׳יפס + 4 פחיות צ׳אט קולה."),
    image: "/menu/family-mixed-sandwich-chat.webp", prices: fixedPrice(100), selection: { label: localized("اختر الساندويشين الإضافيين", "Choose the two extra sandwiches", "בחרו שני סנדוויצ׳ים נוספים"), required: true,
      options: [localized("2 شنيتسل", "2 schnitzel", "2 שניצל"), localized("2 زنجر", "2 zinger", "2 זינגר")] } },
  { id: "FAMILY004", slug: "half-and-half-burger-offer", name: localized("نص بنص", "Half & Half", "חצי חצי"),
    description: localized("2 برغر لحمة (150 غم للحبة) + 2 برغر كريسبي + بطاطا كبيرة + صوصات متنوعة + 4 علب تشات كولا.", "2 beef burgers (150 g each) + 2 crispy chicken burgers + large fries + assorted sauces + 4 Chat Cola cans.", "2 המבורגרי בקר (150 גרם כל אחד) + 2 בורגר עוף קריספי + צ׳יפס גדול + רטבים מגוונים + 4 פחיות צ׳אט קולה."),
    image: "/menu/family-half-and-half-chat.webp", prices: fixedPrice(110) },
  { id: "FAMILY006", slug: "qarmasha-crispy-family-offer", name: localized("قرمشة", "Qarmasha Crispy Offer", "מבצע קראנץ׳"),
    description: localized("4 برغر كريسبي + بطاطا كبيرة + 4 حلقات بصل + 4 كرات بطاطا + صوصات متنوعة + 4 علب تشات كولا.", "4 crispy chicken burgers + large fries + 4 onion rings + 4 potato balls + assorted sauces + 4 Chat Cola cans.", "4 בורגרי עוף קריספי + צ׳יפס גדול + 4 טבעות בצל + 4 כדורי תפוחי אדמה + רטבים מגוונים + 4 פחיות צ׳אט קולה."),
    image: "/menu/family-qarmasha-chat.webp", prices: fixedPrice(110) },
]});
menuCategories.push({ id: "drinks", name: localized("المشروبات", "Drinks", "משקאות"), items: [
  { id: "DRINK001", slug: "chat-cola", name: localized("تشات كولا", "Chat Cola", "צ׳אט קולה"), image: "/menu/chat-cola.webp", prices: fixedPrice(2) },
  { id: "DRINK002", slug: "xl-energy-drink", name: localized("إكس إل", "XL", "XL"), image: "/menu/xl-energy-drink-real-20261013.webp", prices: fixedPrice(5) },
  { id: "DRINK003", slug: "grape-juice", name: localized("عصير عنب", "Grape Juice", "מיץ ענבים"), image: "/menu/bravo-junior-grape-real-20261013.webp", prices: fixedPrice(2) },
  { id: "DRINK004", slug: "orange-juice", name: localized("عصير برتقال", "Orange Juice", "מיץ תפוזים"), image: "/menu/bravo-junior-orange-real-20261013.webp", prices: fixedPrice(2) },
  { id: "DRINK005", slug: "soda", name: localized("صودا تركية", "Turkish Soda", "סודה טורקית"), image: "/menu/uludag-turkish-soda-real-20261013.webp", prices: fixedPrice(2) },
  { id: "DRINK006", slug: "cola", name: localized("كولا", "Cola", "קולה"), image: "/menu/coca-cola-original-20261013.png", prices: fixedPrice(3) },
  { id: "DRINK007", slug: "sprite", name: localized("سبرايت", "Sprite", "ספרייט"), image: "", prices: fixedPrice(3) },
  { id: "DRINK008", slug: "cola-zero", name: localized("كولا زيرو", "Cola Zero", "קולה זירו"), image: "/menu/coca-cola-zero-20261013.png", prices: fixedPrice(3) },
  { id: "DRINK009", slug: "chocodose-mojito", name: localized("موهيتو ChocoDose", "ChocoDose Mojito", "מוחיטו ChocoDose"), image: "", prices: fixedPrice(5),
    addOnGroups: [{ id: "mojito-mixer", label: localized("اختر المشروب المضاف إلى الموهيتو", "Choose your mojito mixer", "בחרו משקה למוחיטו"), kind: "single", required: true,
      options: [option("sprite", "سبرايت", "Sprite", "ספרייט", 3), option("xl", "إكس إل", "XL", "XL", 5), option("soda", "صودا تركية", "Turkish Soda", "סודה טורקית", 2)] }] },
]});

// Kanoon menu visibility settings. Invisible products remain in the source, and
// can be restored at any time by removing their ID from menu-visibility.ts.
// Only the approved family and kids meal descriptions remain visible.
for (const category of menuCategories) {
  if (category.id !== "family-offers" && category.id !== "kids-meals") {
    for (const item of category.items) item.description = undefined;
  }
  category.items = category.items.filter((item) => !hiddenItemIds.includes(item.id));
}
for (let index = menuCategories.length - 1; index >= 0; index -= 1) {
  if (hiddenCategoryIds.includes(menuCategories[index].id)) menuCategories.splice(index, 1);
}
