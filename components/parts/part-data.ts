export type PartItem = {
  id: string;
  name: string;
  vin: string;
  category: string;
  brand: string;
  model: string;
  offers: number;
  image: string;
};

export const placeholderParts: PartItem[] = [
  {
    id: "p1",
    name: "Brembo Performance Brake Kit",
    vin: "BRK-TY-LC300",
    category: "Brakes",
    brand: "Toyota",
    model: "Land Cruiser 300",
    offers: 12,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p2",
    name: "Bosch Fuel Pump",
    vin: "FUEL-BMW-G05",
    category: "Fuel System",
    brand: "BMW",
    model: "X5",
    offers: 9,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p3",
    name: "Continental All-Season Tire",
    vin: "TIRE-255-55-R20",
    category: "Wheels & Tires",
    brand: "Volvo",
    model: "XC90",
    offers: 18,
    image: "https://images.unsplash.com/photo-1503736334966-3a5f5a2d8ea3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p4",
    name: "MagnaFlow Exhaust",
    vin: "EXH-FRD-MUS",
    category: "Exhaust",
    brand: "Ford",
    model: "Mustang",
    offers: 7,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p5",
    name: "NGK Iridium Spark Plug Set",
    vin: "SPK-HND-TURBO",
    category: "Engine",
    brand: "Honda",
    model: "Civic Type R",
    offers: 22,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p6",
    name: "Bilstein Adaptive Suspension",
    vin: "SUS-MBZ-GLE",
    category: "Suspension",
    brand: "Mercedes-Benz",
    model: "GLE",
    offers: 6,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p7",
    name: "Hella Matrix LED Headlight",
    vin: "LGT-AUD-Q8",
    category: "Lighting",
    brand: "Audi",
    model: "Q8",
    offers: 11,
    image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p8",
    name: "Denso HVAC Cabin Module",
    vin: "HVAC-LEX-RX",
    category: "Interior",
    brand: "Lexus",
    model: "RX",
    offers: 14,
    image: "https://images.unsplash.com/photo-1503736334966-3a5f5a2d8ea3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p9",
    name: "ZF 8-Speed Transmission Kit",
    vin: "TRN-JLR-RR",
    category: "Drivetrain",
    brand: "Land Rover",
    model: "Range Rover",
    offers: 4,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
  },
];
