import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Users, Award } from "lucide-react";
import indoorPlants from "@/assets/indoor-plants.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${indoorPlants})` }}
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Plantology</h1>
            <p className="text-xl opacity-95">
              Your trusted partner in bringing nature home
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded with a passion for plants and a commitment to quality, Plantology USA has grown 
                into one of the nation's leading online plant nurseries. We believe that everyone deserves 
                access to beautiful, healthy plants that can transform their living spaces.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of horticultural experts carefully selects and nurtures each plant, ensuring that 
                when it arrives at your door, it's ready to thrive. We're not just selling plants – we're 
                sharing our love for greenery and helping you create the indoor or outdoor oasis of your dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center border-border">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  Every plant is hand-selected and inspected for health and vitality
                </p>
              </Card>

              <Card className="p-6 text-center border-border">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customer Care</h3>
                <p className="text-muted-foreground">
                  We're here to support you every step of your plant parenting journey
                </p>
              </Card>

              <Card className="p-6 text-center border-border">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building a thriving community of plant lovers across the nation
                </p>
              </Card>

              <Card className="p-6 text-center border-border">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to providing the best plants and service in the industry
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-muted-foreground">Plant Varieties</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3-4</div>
                <div className="text-muted-foreground">Days Delivery</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
