export interface Winery {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  specialties: string[];
  address: string;
  phone: string;
  website: string;
  hours: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  location: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
}

export const wineries: Winery[] = [
  {
    id: "aridus-wine",
    name: "Aridus Wine Company",
    description: "Boutique winery specializing in small-batch, handcrafted wines from Arizona's finest vineyards.",
    image: "https://www.americascuisine.com/mobile_App/gallery/4239/app_pic1.jpg",
    rating: 5,
    specialties: ["Pinot Noir", "Chardonnay", "Rosé"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0102",
    website: "www.ariduswine.com",
    hours: "Daily 11am - 8pm"
  },
  {
    id: "wine-collective",
    name: "The Wine Collective of Scottsdale",
    description: "Representing many different Arizona wineries, offering the most comprehensive selection of local wines under one roof.",
    image: "https://lh3.googleusercontent.com/p/AF1QipMj4es0m3n-5gvc-QPY28V_nCcijSDd9umJlwYg=s1360-w1360-h1020-rw",
    rating: 5,
    specialties: ["Arizona Wine Collection", "Tastings", "Wine Education"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0107",
    website: "www.winecollectivescottsdale.com",
    hours: "Daily 10am - 10pm"
  },
  {
    id: "carlson-creek",
    name: "Carlson Creek",
    description: "Family-owned vineyard producing exceptional wines that showcase Arizona's unique growing conditions.",
    image: "https://www.carlsoncreek.com/wp-content/uploads/2019/04/Carlson-Creek-Winery-bottles.jpg",
    rating: 5,
    specialties: ["Merlot", "Viognier", "Petite Sirah"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0103",
    website: "www.carlsoncreek.com",
    hours: "Mon-Sat 11am - 9pm, Sun 12pm - 8pm"
  },
  {
    id: "los-milics",
    name: "Los Milics Vineyards",
    description: "Artisanal wines crafted with passion, featuring unique varietals perfectly suited to Arizona's climate.",
    image: "https://losmilicsvineyards.com/wp-content/uploads/2024/03/los-milics-3-bottles-news-blade.jpeg",
    rating: 5,
    specialties: ["Grenache", "Mourvèdre", "Picpoul Blanc"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0105",
    website: "www.losmilics.com",
    hours: "Tue-Sun 11am - 9pm"
  },
  {
    id: "arizona-stronghold",
    name: "Arizona Stronghold Vineyards",
    description: "Award-winning wines crafted from Arizona's high-desert terroir, featuring bold reds and crisp whites.",
    image: "https://www.wherewhenwine.com/logos/profile/e208f7c864c83187f735934cb39b126d.jpeg",
    rating: 5,
    specialties: ["Cabernet Sauvignon", "Sangiovese", "Sauvignon Blanc"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0101",
    website: "www.azstronghold.com",
    hours: "Daily 11am - 9pm"
  },
  {
    id: "salvatore-vineyards",
    name: "Salvatore Vineyards",
    description: "Traditional winemaking meets Arizona innovation, producing elegant wines with distinctive character.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXED4T6S1ezWdCe5NYVkLGSTbBImTg5sO8IQ&s",
    rating: 5,
    specialties: ["Barbera", "Nebbiolo", "Vermentino"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0106",
    website: "www.salvatorevineyards.com",
    hours: "Daily 10am - 9pm"
  },
  {
    id: "ldv-winery",
    name: "LDV Winery",
    description: "Premier Arizona winery offering innovative wines and gourmet food pairings in an intimate setting.",
    image: "https://ldvwinery.com/images/10-2021exp-scottsdale-388_425x239.jpg",
    rating: 5,
    specialties: ["Syrah", "Gewürztraminer", "Tempranillo"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0104",
    website: "www.ldvwinery.com",
    hours: "Daily 11am - 10pm"
  },
];

export const events: Event[] = [
  {
    id: "harvest-festival",
    title: "Arizona Wine Harvest Festival",
    date: "October 15, 2024",
    category: "Festival",
    description: "Celebrate the harvest season with special tastings, live music, and local artisans at all seven wineries.",
    image: "https://bellwine.com/wp-content/uploads/2021/09/7-21-ever-wonder-what-the-stages-of-harvest-include-1080x675.jpg",
    location: "All Wine Trail Locations",
    price: "$25 per person"
  },
  {
    id: "wine-dine",
    title: "Wine & Dine Experience",
    date: "November 3, 2024",
    category: "Dinner",
    description: "Multi-course dinner featuring Arizona wines paired with locally-sourced cuisine by renowned chefs.",
    image: "https://media.istockphoto.com/id/1137741978/photo/lesbian-couple-or-friends-drinking-wine-at-kitchen.jpg?s=612x612&w=0&k=20&c=lVttHrdQtI2mUMIlLzeqjLBulRT-KXYYRwUE7EupMOY=",
    location: "LDV Winery",
    price: "$85 per person"
  },
  {
    id: "wine-masterclass",
    title: "Arizona Wine Masterclass",
    date: "November 18, 2024",
    category: "Education",
    description: "Learn about Arizona's unique terroir and winemaking techniques from local vintners and sommeliers.",
    image: "https://www.vinography.com/wp-content/uploads/2020/11/mava_winemaker_dinner_2018.jpg",
    location: "Arizona Stronghold Vineyards",
    price: "$45 per person"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria & James T.",
    location: "Phoenix, AZ",
    quote: "An absolutely incredible experience! The quality of Arizona wines surprised us, and the walkable trail made it perfect for a romantic weekend.",
    rating: 5,
    initials: "MJ"
  },
  {
    id: "2",
    name: "Sarah K.",
    location: "Los Angeles, CA",
    quote: "The passport program added such a fun element to our wine adventure. Each winery had its own unique character and excellent wines!",
    rating: 5,
    initials: "SK"
  },
  {
    id: "3",
    name: "David R.",
    location: "Scottsdale, AZ",
    quote: "As locals, we thought we knew Scottsdale well, but the wine trail showed us a whole new side of our city. Outstanding wines and hospitality!",
    rating: 5,
    initials: "DR"
  }
];
