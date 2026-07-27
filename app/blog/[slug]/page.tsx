import { notFound } from 'next/navigation';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Params = {
  params: Promise<{ slug: string }>;
};

const WORDPRESS_POSTS_URL = 'https://blog.dotcreative.co.ke/wp-json/wp/v2/posts'

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  author: number;
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
    'author'?: Array<{
      id: number;
      name: string;
      description: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    'wp:term'?: Array<Array<{ name: string; slug: string }>>;
  };
}

export async function generateStaticParams() {
  /** Build must succeed even if blog.dotcreative.co.ke is unreachable (DNS/offline CI). Pages render on-demand. */
  try {
    const res = await fetch(`${WORDPRESS_POSTS_URL}?per_page=100`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const posts = await res.json()
    if (!Array.isArray(posts)) return []
    return posts.map((post: { slug: string }) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params

  let postData: Post[]
  try {
    const res = await fetch(
      `${WORDPRESS_POSTS_URL}?slug=${encodeURIComponent(slug)}&_embed&fields=id,slug,title,content,excerpt,date,author,_embedded`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return notFound()
    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) return notFound()
    postData = data as Post[]
  } catch {
    return notFound()
  }

  if (!postData.length) return notFound()

  const post: Post = postData[0];
  const author = post._embedded?.['author']?.[0];
  const image = post._embedded?.['wp:featuredmedia']?.[0];
  const categories = post._embedded?.['wp:term']?.[0] || [];

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

  const readingTime = getReadingTime(post.content.rendered);

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section with Cover Image */}
      <section className="relative">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/blog">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/40 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Cover Image */}
        {image && (
          <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.source_url})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Article Meta Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <div className="max-w-4xl mx-auto">
                {categories.length > 0 && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    {categories[0].name}
                  </Badge>
                )}
                
                <h1 
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  {author && (
                    <div className="flex items-center space-x-3">
                      {author.avatar_urls?.['96'] && (
                        <img
                          src={author.avatar_urls['96']}
                          alt={author.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                        />
                      )}
                      <div>
                        <div className="flex items-center text-sm font-medium">
                          <User className="w-4 h-4 mr-1" />
                          {author.name}
                        </div>
                        {author.description && (
                          <div className="text-xs text-white/70 mt-1">
                            {author.description.substring(0, 50)}...
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {readingTime} min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Image Fallback */}
        {!image && (
          <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              {categories.length > 0 && (
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  {categories[0].name}
                </Badge>
              )}
              
              <h1 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                {author && (
                  <div className="flex items-center space-x-3">
                    {author.avatar_urls?.['96'] && (
                      <img
                        src={author.avatar_urls['96']}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-border"
                      />
                    )}
                    <div>
                      <div className="flex items-center text-sm font-medium">
                        <User className="w-4 h-4 mr-1" />
                        {author.name}
                      </div>
                      {author.description && (
                        <div className="text-xs text-muted-foreground/70 mt-1">
                          {author.description.substring(0, 50)}...
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.date)}
                </div>
                
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {readingTime} min read
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Article Body */}
          <div 
            className="prose prose-lg md:prose-xl max-w-none
                       prose-headings:font-bold prose-headings:text-foreground
                       prose-h1:text-3xl md:prose-h1:text-4xl
                       prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                       prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-foreground prose-strong:font-semibold
                       prose-blockquote:border-l-4 prose-blockquote:border-primary/30 
                       prose-blockquote:bg-accent/30 prose-blockquote:px-6 prose-blockquote:py-4 
                       prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                       prose-code:bg-accent prose-code:px-2 prose-code:py-1 prose-code:rounded
                       prose-pre:bg-accent prose-pre:border prose-pre:border-border
                       prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
                       prose-ul:my-6 prose-ol:my-6
                       prose-li:my-2 prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Share this article
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          {author && author.description && (
            <div className="mt-12 p-8 bg-accent/30 rounded-xl border border-border/50">
              <div className="flex items-start space-x-4">
                {author.avatar_urls?.['96'] && (
                  <img
                    src={author.avatar_urls['96']}
                    alt={author.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-border"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">About {author.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {author.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
