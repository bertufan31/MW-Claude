import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProductGrid from '@/components/products/ProductGrid';
import { getBestsellerProducts } from '@/data/products';

export default function FeaturedProducts() {
  const products = getBestsellerProducts().slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-2">
              Bestselling Products
            </h2>
            <p className="text-muted-foreground">
              The most loved items from our community of manifestors
            </p>
          </div>
          <Button variant="outline" asChild className="self-start sm:self-auto">
            <Link to="/shop" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <ProductGrid products={products} columns={4} />
      </div>
    </section>
  );
}
