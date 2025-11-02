import monstera from "@/assets/monstera.jpg";
import snakePlant from "@/assets/snake-plant.jpg";
import fiddleLeaf from "@/assets/fiddle-leaf.jpg";
import pothos from "@/assets/pothos.jpg";
import succulents from "@/assets/succulents.jpg";
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    price: "49.95",
    image: monstera,
    description: "Popular tropical plant with iconic split leaves",
    detailedDescription: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical plant known for its large, glossy leaves with natural holes and splits. Native to Central America, this plant can grow into a magnificent statement piece. Its unique fenestrated leaves make it one of the most recognizable and sought-after houseplants.",
    rating: 4.8,
    reviews: 124,
    careLevel: "Easy to Moderate",
    size: "12-18 inches tall",
    light: "Bright, indirect light",
    water: "Water when top 2 inches of soil are dry"
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: "34.95",
    image: snakePlant,
    description: "Low-maintenance air purifying plant",
    detailedDescription: "The Snake Plant (Sansevieria) is one of the most popular and hardy houseplants, perfect for beginners. It's nearly indestructible and thrives on neglect. NASA research has shown it to be one of the best air-purifying plants, removing toxins like formaldehyde and benzene. Its upright, sword-shaped leaves add a modern architectural element to any space.",
    rating: 4.9,
    reviews: 98,
    careLevel: "Very Easy",
    size: "18-24 inches tall",
    light: "Low to bright indirect light",
    water: "Water every 2-3 weeks, drought tolerant"
  },
  {
    id: "fiddle-leaf",
    name: "Fiddle Leaf Fig",
    price: "79.95",
    image: fiddleLeaf,
    description: "Statement plant with large violin-shaped leaves",
    detailedDescription: "Make a bold statement with the Fiddle Leaf Fig (Ficus lyrata). Its large, violin-shaped leaves create a striking focal point in any room. This trendy plant has become an Instagram favorite and interior designer's go-to choice. With proper care, it can grow up to 6 feet indoors, creating a dramatic living sculpture in your home.",
    rating: 4.7,
    reviews: 156,
    careLevel: "Moderate to Challenging",
    size: "2-3 feet tall",
    light: "Bright, indirect light (very important)",
    water: "Water weekly, allow soil to dry slightly between waterings"
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    price: "24.95",
    image: pothos,
    description: "Easy-care trailing vine perfect for beginners",
    detailedDescription: "The Golden Pothos (Epipremnum aureum) is a trailing vine with heart-shaped, variegated leaves that's perfect for hanging baskets or shelves. Extremely easy to care for and nearly impossible to kill, making it ideal for beginners. It can tolerate low light and irregular watering. The cascading vines can grow several feet long, creating beautiful natural curtains of foliage.",
    rating: 4.9,
    reviews: 203,
    careLevel: "Very Easy",
    size: "Vines 6-12 inches long",
    light: "Low to bright indirect light",
    water: "Water when soil is mostly dry"
  },
  {
    id: "succulents",
    name: "Succulent Collection",
    price: "39.95",
    image: succulents,
    description: "Assorted mini succulents in decorative pots",
    detailedDescription: "This beautiful collection includes 5 different varieties of premium succulents, each in their own decorative pot. Succulents are perfect for small spaces, desks, or windowsills. They store water in their thick leaves, making them extremely drought-tolerant and low-maintenance. This variety pack includes popular types like Echeveria, Jade, and Aloe varieties.",
    rating: 4.8,
    reviews: 187,
    careLevel: "Very Easy",
    size: "2-4 inches each",
    light: "Bright light, some direct sun okay",
    water: "Water sparingly every 2-3 weeks"
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: "44.95",
    image: snakePlant,
    description: "Elegant flowering plant with air-purifying qualities",
    detailedDescription: "The Peace Lily (Spathiphyllum) is an elegant plant known for its beautiful white blooms and air-purifying abilities. It's one of the few houseplants that blooms reliably indoors. The glossy dark green leaves provide year-round beauty, while the distinctive white spathes appear throughout the year. NASA rates it as one of the top plants for removing airborne toxins.",
    rating: 4.7,
    reviews: 142,
    careLevel: "Easy",
    size: "12-16 inches tall",
    light: "Low to medium indirect light",
    water: "Keep soil consistently moist, will droop when thirsty"
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: "54.95",
    image: fiddleLeaf,
    description: "Virtually indestructible with glossy leaves",
    detailedDescription: "The ZZ Plant (Zamioculcas zamiifolia) is virtually indestructible and perfect for forgetful plant parents. Its thick, glossy leaves store water, allowing it to survive weeks without watering. The plant's upright growth and shiny foliage add a modern, sophisticated touch to any space. It tolerates low light better than most plants and is highly resistant to pests and diseases.",
    rating: 4.9,
    reviews: 165,
    careLevel: "Very Easy",
    size: "18-24 inches tall",
    light: "Low to bright indirect light",
    water: "Water every 2-3 weeks"
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    price: "64.95",
    image: monstera,
    description: "Bold burgundy leaves in a modern silhouette",
    detailedDescription: "The Rubber Plant (Ficus elastica) features large, glossy leaves that can be deep green or burgundy. This fast-growing plant can become a stunning floor plant, reaching up to 8 feet indoors. Its bold, architectural leaves make a strong design statement. The Rubber Plant is also excellent at purifying indoor air and is relatively easy to care for once established.",
    rating: 4.6,
    reviews: 118,
    careLevel: "Easy to Moderate",
    size: "2-3 feet tall",
    light: "Bright, indirect light",
    water: "Water when top inch of soil is dry"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
