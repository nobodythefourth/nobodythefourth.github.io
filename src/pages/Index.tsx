
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = () => {
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectedPath(value);
  };

  return (
    <div className="min-h-[150vh] bg-background">
      <div className="h-screen flex items-center justify-center sticky top-0">
        <h1 
          className={`text-7xl md:text-8xl font-bold tracking-tighter transition-all duration-700 transform
            ${scrolled ? 'opacity-0 translate-y-[-50px]' : 'opacity-100 translate-y-0'}`}
        >
          playground
        </h1>
      </div>

      <div className={`min-h-screen flex flex-col items-center justify-center bg-background transition-all duration-700
        ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'}`}>
        <div className="text-center space-y-8 max-w-3xl mx-auto px-4">
          <p className="text-xl text-muted-foreground">
            A little corner of the web where I share my thoughts, projects, and connect with the world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <div className="w-full sm:w-64">
              <Select onValueChange={handleSelectChange} value={selectedPath}>
                <SelectTrigger>
                  <SelectValue placeholder="Where to?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="/about">About Me</SelectItem>
                  <SelectItem value="/socials">My Socials</SelectItem>
                  <SelectItem value="/blog">My Blog</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleNavigate} 
              disabled={!selectedPath}
              className="w-full sm:w-auto"
            >
              Let's Go <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
