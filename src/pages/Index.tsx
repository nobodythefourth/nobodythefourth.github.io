import { useState, useEffect } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
          

        </div>
      </div>
    </div>
  );
};

export default Index;
