import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import monstera from "@/assets/monstera.jpg";
import snakePlant from "@/assets/snake-plant.jpg";
import fiddleLeaf from "@/assets/fiddle-leaf.jpg";
import pothos from "@/assets/pothos.jpg";

const Products = () => {
  const products = [
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
    {
      id: "monstera-2",
      name: "Variegated Monstera",
      price: "129.95",
      image: monstera,
      description: "Rare collector's edition with stunning variegation",
    },
    {
      id: "snake-plant-2",
      name: "Snake Plant Black Gold",
      price: "39.95",
      image: snakePlant,
      description: "Elegant variety with dark green and gold edges",
    },
    {
      id: "fiddle-leaf-2",
      name: "Fiddle Leaf Fig Bambino",
      price: "59.95",
      image: fiddleLeaf,
      description: "Compact version perfect for smaller spaces",
    },
    {
      id: "pothos-2",
      name: "Marble Queen Pothos",
      price: "29.95",
      image: pothos,
      description: "Beautiful white and green variegated trailing plant",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
            <p className="text-muted-foreground text-lg">
              Browse our complete collection of premium plants
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
