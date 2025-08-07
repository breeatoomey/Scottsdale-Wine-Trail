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
    id: "arizona-stronghold",
    name: "Arizona Stronghold Vineyards",
    description: "Award-winning wines crafted from Arizona's high-desert terroir, featuring bold reds and crisp whites.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Cabernet Sauvignon", "Sangiovese", "Sauvignon Blanc"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0101",
    website: "www.azstronghold.com",
    hours: "Daily 11am - 9pm"
  },
  {
    id: "aridus-wine",
    name: "Aridus Wine Company",
    description: "Boutique winery specializing in small-batch, handcrafted wines from Arizona's finest vineyards.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Pinot Noir", "Chardonnay", "Rosé"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0102",
    website: "www.ariduswine.com",
    hours: "Daily 11am - 8pm"
  },
  {
    id: "carlson-creek",
    name: "Carlson Creek",
    description: "Family-owned vineyard producing exceptional wines that showcase Arizona's unique growing conditions.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Merlot", "Viognier", "Petite Sirah"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0103",
    website: "www.carlsoncreek.com",
    hours: "Mon-Sat 11am - 9pm, Sun 12pm - 8pm"
  },
  {
    id: "ldv-winery",
    name: "LDV Winery",
    description: "Premier Arizona winery offering innovative wines and gourmet food pairings in an intimate setting.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Syrah", "Gewürztraminer", "Tempranillo"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0104",
    website: "www.ldvwinery.com",
    hours: "Daily 11am - 10pm"
  },
  {
    id: "los-milics",
    name: "Los Milics Vineyards",
    description: "Artisanal wines crafted with passion, featuring unique varietals perfectly suited to Arizona's climate.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Grenache", "Mourvèdre", "Picpoul Blanc"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0105",
    website: "www.losmilics.com",
    hours: "Tue-Sun 11am - 9pm"
  },
  {
    id: "salvatore-vineyards",
    name: "Salvatore Vineyards",
    description: "Traditional winemaking meets Arizona innovation, producing elegant wines with distinctive character.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Barbera", "Nebbiolo", "Vermentino"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0106",
    website: "www.salvatorevineyards.com",
    hours: "Daily 10am - 9pm"
  },
  {
    id: "wine-collective",
    name: "The Wine Collective of Scottsdale",
    description: "Representing many different Arizona wineries, offering the most comprehensive selection of local wines under one roof.",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    specialties: ["Arizona Wine Collection", "Tastings", "Wine Education"],
    address: "Downtown Scottsdale",
    phone: "(480) 555-0107",
    website: "www.winecollectivescottsdale.com",
    hours: "Daily 10am - 10pm"
  }
];

export const events: Event[] = [
  {
    id: "harvest-festival",
    title: "Arizona Wine Harvest Festival",
    date: "October 15, 2024",
    category: "Festival",
    description: "Celebrate the harvest season with special tastings, live music, and local artisans at all seven wineries.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250",
    location: "All Wine Trail Locations",
    price: "$25 per person"
  },
  {
    id: "wine-dine",
    title: "Wine & Dine Experience",
    date: "November 3, 2024",
    category: "Dinner",
    description: "Multi-course dinner featuring Arizona wines paired with locally-sourced cuisine by renowned chefs.",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250",
    location: "LDV Winery",
    price: "$85 per person"
  },
  {
    id: "wine-masterclass",
    title: "Arizona Wine Masterclass",
    date: "November 18, 2024",
    category: "Education",
    description: "Learn about Arizona's unique terroir and winemaking techniques from local vintners and sommeliers.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250",
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
