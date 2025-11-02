import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-grow py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

            <Card className="p-12 text-center border-border">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any plants yet. Start shopping to fill your cart!
              </p>
              <Link to="/products" data-testid="link-browse-products">
                <Button size="lg" className="bg-accent hover:bg-accent/90" data-testid="button-browse-products">
                  Browse Products
                </Button>
              </Link>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <Button 
              variant="outline" 
              onClick={clearCart}
              data-testid="button-clear-cart"
            >
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="p-6 border-border" data-testid={`cart-item-${item.id}`}>
                  <div className="flex gap-6">
                    <Link to={`/product/${item.id}`} data-testid={`link-product-image-${item.id}`}>
                      <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </Link>

                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link to={`/product/${item.id}`} data-testid={`link-product-name-${item.id}`}>
                            <h3 className="font-semibold text-xl hover:text-primary transition-colors" data-testid={`text-item-name-${item.id}`}>
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3 border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            data-testid={`button-decrease-${item.id}`}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-semibold w-8 text-center" data-testid={`text-quantity-${item.id}`}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            data-testid={`button-increase-${item.id}`}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary" data-testid={`text-item-total-${item.id}`}>
                            ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ${item.price} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 border-border sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span data-testid="text-subtotal">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-accent">{total >= 75 ? 'FREE' : '$9.99'}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary" data-testid="text-total">
                        ${(total + (total >= 75 ? 0 : 9.99)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {total < 75 && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-center">
                      Add <span className="font-semibold">${(75 - total).toFixed(2)}</span> more for FREE shipping!
                    </p>
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 mb-4"
                  data-testid="button-checkout"
                >
                  Proceed to Checkout
                </Button>

                <Link to="/products" data-testid="link-continue-shopping">
                  <Button variant="outline" size="lg" className="w-full" data-testid="button-continue-shopping">
                    Continue Shopping
                  </Button>
                </Link>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Free shipping on orders over $75</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>30-day healthy plant guarantee</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
