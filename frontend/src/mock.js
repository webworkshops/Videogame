// Mock data for Videogames Then & Now

export const businessInfo = {
  name: "Videogames Then & Now",
  phone: "(708) 867-5309",
  email: "info@videogamesthennow.com",
  address: {
    street: "4850 N Harlem Ave",
    city: "Harwood Heights",
    state: "IL",
    zip: "60706",
    fullAddress: "4850 N Harlem Ave, Harwood Heights, IL 60706"
  },
  hours: [
    { day: "Monday", hours: "11:00 AM - 9:00 PM" },
    { day: "Tuesday", hours: "11:00 AM - 9:00 PM" },
    { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
    { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
    { day: "Friday", hours: "11:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 6:00 PM" }
  ],
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.9841928948686!2d-87.81268492348456!3d41.967824571216456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc3f1e1e1e1f%3A0x1234567890abcdef!2s4850%20N%20Harlem%20Ave%2C%20Harwood%20Heights%2C%20IL%2060706!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  rating: 4.2,
  reviewCount: "400+"
};

export const categories = [
  {
    id: 1,
    title: "Retro Consoles & Games",
    description: "NES, SNES, Game Boy, Sega Saturn, Famicom, and more classic systems and games",
    image: "https://images.unsplash.com/photo-1688127208725-9de0957e9975",
    icon: "Gamepad2"
  },
  {
    id: 2,
    title: "Modern Games",
    description: "Latest releases for Xbox, PlayStation, and Nintendo Switch",
    image: "https://images.unsplash.com/photo-1481772306665-d14161f65314",
    icon: "MonitorPlay"
  },
  {
    id: 3,
    title: "Accessories & Controllers",
    description: "Controllers, cables, batteries, and essential gaming accessories",
    image: "https://images.unsplash.com/photo-1538970495985-41e3903a5734",
    icon: "Joystick"
  },
  {
    id: 4,
    title: "Rare & Collectible Items",
    description: "Hard-to-find games, boxed PC games, and valuable collectibles",
    image: "https://images.unsplash.com/photo-1698226929845-b29f31278c1a",
    icon: "Star"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Michael R.",
    rating: 5,
    text: "Best retro game store in the Chicago area! Found a mint condition SNES cartridge I've been searching for. Staff is incredibly knowledgeable and friendly.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah K.",
    rating: 5,
    text: "Amazing selection of rare games. The prices are fair and the staff actually knows their stuff. This place is a treasure trove for collectors!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "David L.",
    rating: 4,
    text: "Great store with a solid selection of both retro and modern games. Found some Game Boy games in excellent condition. Will definitely be back.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Jennifer M.",
    rating: 5,
    text: "Stopped in while visiting Chicago and was blown away. The retro console section is incredible. Staff helped me find the perfect gift for my son.",
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Robert T.",
    rating: 4,
    text: "Fantastic local game shop! They have things you won't find anywhere else. Fair trade-in values and competitive pricing.",
    date: "1 month ago"
  },
  {
    id: 6,
    name: "Lisa W.",
    rating: 5,
    text: "This store is a nostalgic paradise! Found games from my childhood that I thought were lost forever. The staff's passion for gaming really shows.",
    date: "3 weeks ago"
  }
];

export const highlights = [
  {
    icon: "History",
    title: "Decades of Gaming",
    description: "From vintage Atari to the latest Switch releases"
  },
  {
    icon: "Users",
    title: "Expert Staff",
    description: "Knowledgeable gamers who truly love what they do"
  },
  {
    icon: "DollarSign",
    title: "Fair Pricing",
    description: "Competitive prices on both retro and modern games"
  },
  {
    icon: "MapPin",
    title: "Local & Trusted",
    description: "Serving Chicago's gaming community for years"
  }
];

export const aboutContent = {
  story: "Videogames Then & Now has been a cornerstone of the Chicago gaming community for years. What started as a passion for preserving gaming history has grown into one of the area's most beloved retro and modern game stores. We're not just a shop—we're a community hub for gamers, collectors, and anyone who appreciates the art and history of video games.",
  mission: "Our mission is simple: to provide gamers with access to the titles they're searching for, whether it's a rare Famicom cartridge or the latest PlayStation release. We take pride in curating our inventory, ensuring quality, and offering fair prices. Every item in our store has been carefully selected and tested.",
  expertise: "Our staff consists of genuine gaming enthusiasts who live and breathe video game history. We can help you track down that elusive game, recommend hidden gems, or simply chat about your favorite gaming memories. When you visit Videogames Then & Now, you're not just a customer—you're part of our gaming family."
};

export const inventoryInfo = {
  note: "Our inventory changes frequently as we continuously acquire new items. What you see today might be gone tomorrow, and tomorrow we might have that rare gem you've been searching for. We encourage you to call ahead if you're looking for something specific, or better yet, visit us in person to browse our ever-changing selection.",
  callToAction: "Can't find what you're looking for? Give us a call or stop by—we're always happy to help track down specific games or answer questions about availability."
};