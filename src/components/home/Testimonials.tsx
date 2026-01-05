import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'New York',
    content: 'The Starter Pack completely changed my morning routine. I\'ve manifested so much positivity since I started using these tools!',
    rating: 5,
    product: 'Manifestation Starter Pack',
  },
  {
    id: 2,
    name: 'Alex K.',
    location: 'Los Angeles',
    content: 'Drawing a daily card has become my favorite ritual. The cat illustrations are adorable and the messages are exactly what I need to hear.',
    rating: 5,
    product: 'Cat Tarot Manifesting Cards',
  },
  {
    id: 3,
    name: 'Jordan R.',
    location: 'Seattle',
    content: 'As someone new to manifestation, this shop made me feel so welcome. The crystals are beautiful and the energy is amazing!',
    rating: 5,
    product: 'Clear Quartz Crystal',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
            Words From Our Manifestors
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real stories from our community of dreamers and believers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-gold/30 mb-4" />

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">
                  {testimonial.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
