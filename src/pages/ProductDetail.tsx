import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, ShieldCheck, Leaf, Sun, Droplets } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/products" data-testid="link-browse-all-products">
              <Button size="lg">Browse All Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-back-to-products">
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
              <h1 className="text-4xl font-bold mb-4" data-testid="text-product-name">{product.name}</h1>
              
              {product.careLevel && (
                <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                  {product.careLevel}
                </Badge>
              )}

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 0)
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

              <div className="text-4xl font-bold text-primary mb-6" data-testid="text-product-price">
                ${product.price}
              </div>

              {product.size && (
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Size: </span>
                  <span className="font-medium">{product.size}</span>
                </div>
              )}

              <p className="text-muted-foreground text-lg mb-8" data-testid="text-product-description">
                {product.detailedDescription || product.description}
              </p>

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
                {product.light && (
                  <div className="flex items-center space-x-3">
                    <Sun className="h-5 w-5 text-accent" />
                    <span>{product.light}</span>
                  </div>
                )}
                {product.water && (
                  <div className="flex items-center space-x-3">
                    <Droplets className="h-5 w-5 text-accent" />
                    <span>{product.water}</span>
                  </div>
                )}
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
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
                  {product.detailedDescription || product.description} This beautiful plant will arrive healthy and ready to thrive in your home. 
                  Each plant is carefully selected, inspected, and packaged by our expert team to ensure it arrives 
                  in perfect condition.
                </p>
              </TabsContent>
              
              <TabsContent value="care" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Care Instructions</h3>
                <div className="space-y-4 text-muted-foreground">
                  {product.light && (
                    <div>
                      <strong className="text-foreground">Light:</strong> {product.light}
                    </div>
                  )}
                  {product.water && (
                    <div>
                      <strong className="text-foreground">Water:</strong> {product.water}
                    </div>
                  )}
                  <div>
                    <strong className="text-foreground">Humidity:</strong> Moderate to high humidity preferred.
                  </div>
                  <div>
                    <strong className="text-foreground">Temperature:</strong> 65-85°F (18-29°C)
                  </div>
                  {product.careLevel && (
                    <div>
                      <strong className="text-foreground">Care Level:</strong> {product.careLevel}
                    </div>
                  )}
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
