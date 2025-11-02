import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  detailedDescription?: string;
  rating?: number;
  reviews?: number;
  careLevel?: string;
  size?: string;
  light?: string;
  water?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, price, image, description } = props;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const product: Product = {
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      description: props.description || "",
      detailedDescription: props.detailedDescription,
      rating: props.rating,
      reviews: props.reviews,
      careLevel: props.careLevel,
      size: props.size,
      light: props.light,
      water: props.water,
    };
    addToCart(product);
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
      <Link to={`/product/${id}`} data-testid={`link-product-${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`} data-testid={`link-product-title-${id}`}>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${price}</span>
          <Button 
            size="sm" 
            className="bg-accent hover:bg-accent/90"
            onClick={handleAddToCart}
            data-testid={`button-add-cart-${id}`}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
