
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

// Simulated blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    date: "2025-03-10",
    readTime: "5 min read",
    category: "Development",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Advanced Data Science Techniques",
    excerpt: "Explore advanced techniques in data science and machine learning.",
    date: "2025-02-15",
    readTime: "8 min read",
    category: "Data Science",
    tags: ["Python", "Machine Learning", "Data"]
  },
  {
    id: 3,
    title: "The Future of AI",
    excerpt: "Thoughts on where artificial intelligence is headed in the next decade.",
    date: "2025-01-20",
    readTime: "6 min read",
    category: "Technology",
    tags: ["AI", "Future Tech", "Innovation"]
  }
];

// Sample categories
const categories = ["All", "Development", "Data Science", "Technology"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="page-container fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">My Blog</h1>
        <p className="text-muted-foreground mb-8">
          Thoughts, ideas, and learnings I want to share with the world
        </p>
        
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="w-full justify-start overflow-auto py-1">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-6">
              {category === activeCategory && (
                <div className="grid gap-6">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <BlogPostCard key={post.id} post={post} />
                    ))
                  ) : (
                    <p className="text-center py-12 text-muted-foreground">
                      No posts in this category yet. Check back soon!
                    </p>
                  )}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            This blog is a work in progress. More articles coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

// Blog post card component
const BlogPostCard = ({ post }: { post: any }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">{post.title}</CardTitle>
        <CardDescription className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center">
            <CalendarDays className="mr-1 h-3 w-3" />
            {formattedDate}
          </span>
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {post.readTime}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Blog;
