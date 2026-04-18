import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestseller && (
              <span className="px-2 py-1 rounded-full bg-gold text-gold-foreground text-xs font-medium flex items-center gap-1">
                <Star className="h-3 w-3" /> Bestseller
              </span>
            )}
            {product.new && (
              <span className="px-2 py-1 rounded-full bg-sage text-sage-foreground text-xs font-medium">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                Sale
              </span>
            )}
          </div>

          {/* Quick Add Button - always visible on mobile, hover-reveal on desktop */}
          <div className="absolute inset-x-3 bottom-3 opacity-100 translate-y-0 transition-all duration-300 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
            <Button
              variant="default"
              size="sm"
              className="w-full gap-2 bg-background/90 backdrop-blur-sm text-foreground hover:bg-background"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="font-semibold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
