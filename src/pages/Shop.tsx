import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, LayoutGrid } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { products, categories, getProductsByCategory } from '@/data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  const filteredProducts = getProductsByCategory(selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-olive text-peach py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Shop All Products
              </h1>
              <p className="font-body text-peach/80 max-w-xl mx-auto text-lg">
                Curated spiritual tools to elevate your manifestation practice
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-lavender" />
                  <h2 className="font-display text-xl font-bold">Categories</h2>
                </div>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-body text-sm transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-lavender/20 text-lavender font-medium'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs ${selectedCategory === category.id ? 'text-lavender' : 'text-muted-foreground'}`}>
                        ({category.count})
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8">
                <p className="font-body text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-body text-sm text-muted-foreground hidden sm:block">View:</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setGridCols(3)}
                    className={gridCols === 3 ? 'text-lavender' : 'text-muted-foreground'}
                  >
                    <Grid3X3 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setGridCols(4)}
                    className={gridCols === 4 ? 'text-lavender' : 'text-muted-foreground'}
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`grid gap-6 ${
                    gridCols === 3 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16">
                  <p className="font-display text-xl text-muted-foreground">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
