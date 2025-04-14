
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Code } from "lucide-react";

const Socials = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Connect with me professionally",
      icon: <Linkedin className="h-10 w-10 text-[#0A66C2]" />,
      url: "https://linkedin.com/in/yourusername",
      color: "bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20",
      buttonText: "Connect on LinkedIn"
    },
    {
      name: "GitHub",
      description: "Check out my code and projects",
      icon: <Github className="h-10 w-10 text-[#171515]" />,
      url: "https://github.com/yourusername",
      color: "bg-[#171515]/10 hover:bg-[#171515]/20",
      buttonText: "Follow on GitHub"
    },
    {
      name: "Kaggle",
      description: "Explore my data science work",
      icon: <Code className="h-10 w-10 text-[#20BEFF]" />,
      url: "https://kaggle.com/yourusername",
      color: "bg-[#20BEFF]/10 hover:bg-[#20BEFF]/20",
      buttonText: "View Kaggle Profile"
    },
    // Add more as needed
  ];

  return (
    <div className="page-container fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Connect With Me</h1>
        <p className="text-muted-foreground mb-8">
          Find me across the web and let's connect!
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {socialLinks.map((social, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`${social.color}`}>
                <div className="flex items-center gap-4">
                  {social.icon}
                  <div>
                    <CardTitle>{social.name}</CardTitle>
                    <CardDescription className="text-foreground/70">
                      {social.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="pt-6">
                <Button asChild className="w-full">
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    {social.buttonText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Me</h2>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out via email or other platforms
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Socials;
