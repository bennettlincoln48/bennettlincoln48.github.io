import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import indoorPlants from "@/assets/indoor-plants.jpg";
import outdoorPlants from "@/assets/outdoor-plants.jpg";
import succulents from "@/assets/succulents.jpg";
import heroImage from "@/assets/hero-plants.jpg";

const Collections = () => {
  const collections = [
    {
      id: "indoor",
      name: "Indoor Plants",
      description: "Perfect for homes and offices, bringing nature inside",
      image: indoorPlants,
      count: "150+ plants",
    },
    {
      id: "outdoor",
      name: "Outdoor Plants",
      description: "Transform your garden with lush tropical varieties",
      image: outdoorPlants,
      count: "200+ plants",
    },
    {
      id: "succulents",
      name: "Succulents & Cacti",
      description: "Low-maintenance desert beauties for any space",
      image: succulents,
      count: "80+ plants",
    },
    {
      id: "tropical",
      name: "Tropical Collection",
      description: "Exotic plants that bring paradise home",
      image: heroImage,
      count: "120+ plants",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Collections</h1>
            <p className="text-muted-foreground text-lg">
              Curated selections to help you find the perfect plants for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link key={collection.id} to="/products">
                <Card className="group overflow-hidden border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
                  <div className="relative h-80">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                      <div className="p-6 text-primary-foreground w-full">
                        <div className="text-sm font-semibold mb-2 opacity-90">
                          {collection.count}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{collection.name}</h3>
                        <p className="text-lg opacity-90">{collection.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
