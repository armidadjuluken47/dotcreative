'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 6;

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface Author {
  id: number;
  name: string;
  avatar_urls: {
    [key: string]: string;
  };
}

interface Post {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  excerpt: { rendered: string };
  categories: number[];
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'author'?: Author[];
    'wp:term'?: Array<Array<{ name: string; slug: string }>>;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        'https://blog.dotcreative.co.ke/wp-json/wp/v2/categories?per_page=20&orderby=count&order=desc'
      );
      if (!res.ok) throw new Error('Failed to fetch categories');
      const data = await res.json();
      setCategories(data.filter((cat: Category) => cat.count > 0));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchPosts = async (categoryId?: string, resetPosts = false) => {
    try {
      setLoading(true);
      const categoryParam = categoryId && categoryId !== 'all' ? `&categories=${categoryId}` : '';
      const currentPage = resetPosts ? 1 : page;
      
      const res = await fetch(
        `https://blog.dotcreative.co.ke/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=${PAGE_SIZE}${categoryParam}`
      );

      if (!res.ok) throw new Error('Failed to fetch posts');

      const data = await res.json();

      if (!data.length || data.length < PAGE_SIZE) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      if (resetPosts) {
        setPosts(data);
        setPage(2);
      } else {
        setPosts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const newPosts = data.filter((p: Post) => !existingIds.has(p.id));
          return [...prev, ...newPosts];
        });
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setPage(1);
    setHasMore(true);
    const categoryId = categorySlug === 'all' ? undefined : categories.find(cat => cat.slug === categorySlug)?.id.toString();
    fetchPosts(categoryId, true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  const loadMore = () => {
    const categoryId = selectedCategory === 'all' ? undefined : categories.find(cat => cat.slug === selectedCategory)?.id.toString();
    fetchPosts(categoryId, false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Latest Blog Posts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover insights, trends, and expert knowledge from our team
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="mb-12">
          <TabsList className="grid grid-cols-auto justify-center mb-8 bg-card/50 backdrop-blur-sm border border-border/50 p-2 rounded-xl">
            <TabsTrigger 
              value="all" 
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                "data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25",
                "hover:bg-accent/50"
              )}
            >
              All Posts
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.slug}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25",
                  "hover:bg-accent/50"
                )}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Blog Posts */}
        <InfiniteScroll
          dataLength={posts.length}
          next={loadMore}
          hasMore={hasMore && !loading}
          loader={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-xl" />
                  <div className="space-y-2 p-4">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          }
          endMessage={
            posts.length > 0 ? (
              <p className="text-center text-muted-foreground mt-12 text-lg">
                🎉 You've reached the end! No more posts to load.
              </p>
            ) : (
              <p className="text-center text-muted-foreground mt-12 text-lg">
                📝 No posts available in this category yet.
              </p>
            )
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const imageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
              const author = post._embedded?.['author']?.[0];
              const postCategories = post._embedded?.['wp:term']?.[0] || [];
              const readingTime = getReadingTime(post.excerpt.rendered);

              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card/60 backdrop-blur-sm group-hover:scale-[1.02] h-full flex flex-col">
                    {/* Featured Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${image || '/placeholder.jpg'})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Categories Badge */}
                      {postCategories.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm"
                          >
                            {postCategories[0].name}
                          </Badge>
                        </div>
                      )}

                      {/* Reading Time */}
                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant="outline" 
                          className="bg-black/40 text-white border-white/20 backdrop-blur-sm"
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {readingTime} min read
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex-1 space-y-4">
                        {/* Title */}
                        <h2
                          className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />

                        {/* Excerpt */}
                        <div
                          className="text-muted-foreground line-clamp-3 text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ 
                            __html: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 120) + '...' 
                          }}
                        />
                      </div>

                      {/* Meta Information - Always at bottom */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-4">
                        {/* Author */}
                        <div className="flex items-center space-x-3">
                          {author?.avatar_urls?.['48'] && (
                            <img
                              src={author.avatar_urls['48']}
                              alt={author.name}
                              className="w-8 h-8 rounded-full object-cover border-2 border-border"
                            />
                          )}
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="w-3 h-3 mr-1" />
                            <span className="font-medium">{author?.name || 'DotCreative'}</span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          <time dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* Loading State */}
        {loading && posts.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <div className="space-y-2 p-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
