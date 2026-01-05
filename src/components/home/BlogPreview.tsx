import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getRecentPosts } from '@/data/blogPosts';

export default function BlogPreview() {
  const posts = getRecentPosts(3);

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mb-2">
              Manifestation Insights
            </h2>
            <p className="text-muted-foreground">
              Tips, guides, and wisdom for your spiritual journey
            </p>
          </div>
          <Button variant="outline" asChild className="self-start sm:self-auto">
            <Link to="/blog" className="gap-2">
              Read All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {/* Image */}
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium mb-3 capitalize">
                  {post.category.replace('-', ' ')}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-medium mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime} min read
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
