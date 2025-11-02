import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Truck, ShieldCheck, Leaf } from "lucide-react";
import { toast } from "sonner";
import monstera from "@/assets/monstera.jpg";
import snakePlant from "@/assets/snake-plant.jpg";
import fiddleLeaf from "@/assets/fiddle-leaf.jpg";
import pothos from "@/assets/pothos.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  const products: Record<string, any> = {
    monstera: {
      name: "Monstera Deliciosa",
      price: "49.95",
      image: monstera,
      description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical plant known for its large, glossy leaves with natural holes and splits.",
      rating: 4.8,
      reviews: 124,
    },
    "snake-plant": {
      name: "Snake Plant",
      price: "34.95",
      image: snakePlant,
      description: "One of the most popular and hardy houseplants, the Snake Plant is perfect for beginners. It's nearly indestructible and thrives on neglect.",
      rating: 4.9,
      reviews: 98,
    },
    "fiddle-leaf": {
      name: "Fiddle Leaf Fig",
      price: "79.95",
      image: fiddleLeaf,
      description: "Make a bold statement with the Fiddle Leaf Fig. Its large, violin-shaped leaves create a striking focal point in any room.",
      rating: 4.7,
      reviews: 156,
    },
    pothos: {
      name: "Golden Pothos",
      price: "24.95",
      image: pothos,
      description: "The Golden Pothos is a trailing vine with heart-shaped leaves that's perfect for hanging baskets or shelves. Extremely easy to care for.",
      rating: 4.9,
      reviews: 203,
    },
  };

  const product = products[id || "monstera"] || products.monstera;

  const handleAddToCart = () => {
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
              ← Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="text-4xl font-bold text-primary mb-6">${product.price}</div>

              <p className="text-muted-foreground text-lg mb-8">{product.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-accent" />
                  <span>Free shipping on orders over $75</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span>30-day healthy plant guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-5 w-5 text-accent" />
                  <span>Includes care instructions</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>

          <Card className="p-8 border-border">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="care">Care Guide</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">About This Plant</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description} This beautiful plant will arrive healthy and ready to thrive in your home. 
                  Each plant is carefully selected, inspected, and packaged by our expert team to ensure it arrives 
                  in perfect condition.
                </p>
              </TabsContent>
              
              <TabsContent value="care" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Care Instructions</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Light:</strong> Bright, indirect light. Can tolerate some direct morning sun.
                  </div>
                  <div>
                    <strong className="text-foreground">Water:</strong> Allow top 2 inches of soil to dry between waterings.
                  </div>
                  <div>
                    <strong className="text-foreground">Humidity:</strong> Moderate to high humidity preferred.
                  </div>
                  <div>
                    <strong className="text-foreground">Temperature:</strong> 65-85°F (18-29°C)
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We ship Monday through Wednesday to ensure your plant arrives during the week. All plants are 
                  carefully packaged with eco-friendly materials and arrive with a 30-day healthy plant guarantee. 
                  Most orders arrive within 3-4 business days via our specialized plant shipping partners.
                </p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
