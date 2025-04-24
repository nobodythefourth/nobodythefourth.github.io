
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
    <div className="min-h-[150vh] bg-black text-[#F1F0FB]">
      <div className="h-screen flex items-center justify-center sticky top-0">
        <h1 
          className={`text-7xl md:text-8xl font-bold tracking-tighter transition-all duration-700 transform
            ${scrolled ? 'opacity-0 translate-y-[-50px]' : 'opacity-100 translate-y-0'} 
            text-[#F1F0FB]`}
        >
          my playground
        </h1>
      </div>

      <div className={`min-h-screen flex flex-col items-center justify-center bg-black transition-all duration-700
        ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'}`}>
        <div className="text-center space-y-8 max-w-3xl mx-auto px-4">
          <p className="text-xl text-[#C8C8C9]">
            A little corner of the web where I share my thoughts, projects, and connect with the world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <div className="w-full sm:w-64">
              <Select onValueChange={handleSelectChange} value={selectedPath}>
                <SelectTrigger className="bg-[#222] text-[#F1F0FB] border-[#333]">
                  <SelectValue placeholder="Where to?" />
                </SelectTrigger>
                <SelectContent className="bg-[#222] text-[#F1F0FB] border-[#333]">
                  <SelectItem value="/about">About Me</SelectItem>
                  <SelectItem value="/socials">My Socials</SelectItem>
                  <SelectItem value="/blog">My Blog</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleNavigate} 
              disabled={!selectedPath}
              className="w-full sm:w-auto bg-[#333] text-[#F1F0FB] hover:bg-[#444]"
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

