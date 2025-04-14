
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState("");

  const handleNavigate = () => {
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectedPath(value);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-3xl mx-auto px-4 fade-in">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Welcome to my <span className="text-primary">playground</span>
        </h1>
        
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
  );
};

export default Index;
