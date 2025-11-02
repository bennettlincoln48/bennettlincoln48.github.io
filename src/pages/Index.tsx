import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Truck, Leaf, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";
import indoorPlants from "@/assets/indoor-plants.jpg";
import outdoorPlants from "@/assets/outdoor-plants.jpg";
import monstera from "@/assets/monstera.jpg";
import snakePlant from "@/assets/snake-plant.jpg";
import fiddleLeaf from "@/assets/fiddle-leaf.jpg";
import pothos from "@/assets/pothos.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: "monstera",
      name: "Monstera Deliciosa",
      price: "49.95",
      image: monstera,
      description: "Popular tropical plant with iconic split leaves",
    },
    {
      id: "snake-plant",
      name: "Snake Plant",
      price: "34.95",
      image: snakePlant,
      description: "Low-maintenance air purifying plant",
    },
    {
      id: "fiddle-leaf",
      name: "Fiddle Leaf Fig",
      price: "79.95",
      image: fiddleLeaf,
      description: "Statement plant with large violin-shaped leaves",
    },
    {
      id: "pothos",
      name: "Golden Pothos",
      price: "24.95",
      image: pothos,
      description: "Easy-care trailing vine perfect for beginners",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
          <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold uppercase tracking-wider">Summer Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Discover over 1,000+ premium plants with expert care support
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">3-4 Day Delivery</h3>
                <p className="text-muted-foreground">Fast, secure shipping nationwide</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Care Tips</h3>
                <p className="text-muted-foreground">Comprehensive growing guides included</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Healthy Guarantee</h3>
                <p className="text-muted-foreground">30-day satisfaction promise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Trending Plants</h2>
              <p className="text-muted-foreground text-lg">Our most popular selections this season</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Shop by Collection</h2>
              <p className="text-muted-foreground text-lg">Find the perfect plants for your space</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/collections" className="group relative h-80 rounded-xl overflow-hidden">
                <img
                  src={indoorPlants}
                  alt="Indoor Plants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex items-end">
                  <div className="p-8 text-primary-foreground">
                    <h3 className="text-3xl font-bold mb-2">Indoor Plants</h3>
                    <p className="text-lg opacity-90">Perfect for homes and offices</p>
                  </div>
                </div>
              </Link>
              <Link to="/collections" className="group relative h-80 rounded-xl overflow-hidden">
                <img
                  src={outdoorPlants}
                  alt="Outdoor Plants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex items-end">
                  <div className="p-8 text-primary-foreground">
                    <h3 className="text-3xl font-bold mb-2">Outdoor Plants</h3>
                    <p className="text-lg opacity-90">Transform your garden oasis</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
