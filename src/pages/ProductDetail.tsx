import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Minus, Plus, Check, Star, ChevronLeft, ChevronRight, Package, Sparkles, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { getProductById, products, Product } from '@/data/products';
import { getAssetUrl } from '@/lib/utils';
import ProductCard from '@/components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState<'video' | number>(product?.video ? 'video' : 0);
  const [isAdded, setIsAdded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const mediaItems = [
    ...(product?.video ? [{ type: 'video' as const, src: product.video }] : []),
    ...(product?.images ?? []).map(img => ({ type: 'image' as const, src: img })),
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevMedia = useCallback(() => setLightboxIndex(i => i === null ? null : (i - 1 + mediaItems.length) % mediaItems.length), [mediaItems.length]);
  const nextMedia = useCallback(() => setLightboxIndex(i => i === null ? null : (i + 1) % mediaItems.length), [mediaItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevMedia();
      else if (e.key === 'ArrowRight') nextMedia();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, prevMedia, nextMedia]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-lavender transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-lavender transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                {selectedItem === 'video' && product.video ? (
                  <video
                    src={getAssetUrl(product.video)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => openLightbox(0)}
                  />
                ) : (
                  <img
                    src={getAssetUrl(product.images[selectedItem as number] || product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => openLightbox((product.video ? 1 : 0) + (selectedItem as number))}
                  />
                )}
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.bestseller && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" /> Bestseller
                    </Badge>
                  )}
                  {product.new && (
                    <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {(product.video || product.images.length > 1) && (
                <div className="flex gap-3">
                  {product.video && (
                    <button
                      onClick={() => setSelectedItem('video')}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors relative ${selectedItem === 'video' ? 'border-lavender' : 'border-transparent'}`}
                    >
                      <video src={getAssetUrl(product.video)} className="w-full h-full object-cover" muted />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-foreground border-b-[5px] border-b-transparent ml-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedItem(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedItem === index ? 'border-lavender' : 'border-transparent'}`}
                    >
                      <img
                        src={getAssetUrl(img)}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <p className="font-body text-sm text-lavender uppercase tracking-wider mb-2">
                  {product.category.replace('-', ' ')}
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-lavender">
                  £{product.price % 1 === 0 ? product.price : product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="font-body text-xl text-muted-foreground line-through">
                    £{product.originalPrice % 1 === 0 ? product.originalPrice : product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="outline" className="border-destructive text-destructive">
                    Save £{(product.originalPrice - product.price) % 1 === 0 ? (product.originalPrice - product.price) : (product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              {/* Bundle Items */}
              {product.bundleItems && (
                <div className="bg-muted/50 rounded-xl p-4">
                  <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5 text-lavender" />
                    Bundle Includes:
                  </h3>
                  <ul className="space-y-2">
                    {product.bundleItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-lavender" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Product Details */}
              {product.details && (
                <div>
                  <h3 className="font-display font-bold text-foreground mb-3">Product Details:</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <Sparkles className="h-4 w-4 text-lavender mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 font-body font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className={`flex-1 gap-2 ${isAdded ? 'bg-green-600 hover:bg-green-600' : 'bg-primary hover:bg-primary/90'}`}
                  disabled={!product.inStock}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-5 w-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>

              {/* Stock Status */}
              <p className={`font-body text-sm ${product.inStock ? 'text-green-600' : 'text-destructive'}`}>
                {product.inStock ? `✓ In Stock${product.stockCount ? ` (${product.stockCount} available)` : ''}` : '✗ Out of Stock'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-4 py-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && mediaItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/88 flex items-center justify-center cursor-none"
            onClick={closeLightbox}
            onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
          >
            {/* Media */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
              >
                {mediaItems[lightboxIndex].type === 'video' ? (
                  <video
                    src={getAssetUrl(mediaItems[lightboxIndex].src)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
                  />
                ) : (
                  <img
                    src={getAssetUrl(mediaItems[lightboxIndex].src)}
                    alt={product.name}
                    className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Prev button */}
            {mediaItems.length > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); prevMedia(); }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next button */}
            {mediaItems.length > 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); nextMedia(); }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Dot indicators */}
            {mediaItems.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
                {mediaItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            )}

            {/* Custom X cursor */}
            <div
              className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <X className="h-5 w-5 text-white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
