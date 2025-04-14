
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-container fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Who I Am</CardTitle>
            <CardDescription>A brief introduction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Hello! I'm a passionate [Your Profession/Interest] with a keen interest in [Your Interests]. 
              I love building things, solving problems, and continuously learning new technologies.
            </p>
            <p>
              With experience in [Your Skills/Experience], I enjoy tackling complex challenges and creating 
              elegant solutions. When I'm not coding, you can find me [Your Hobbies/Activities].
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
            <CardDescription>What I bring to the table</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Soft Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Experience & Education</CardTitle>
            <CardDescription>My professional journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Experience</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <div className="font-medium">Position Title</div>
                  <div className="text-sm text-muted-foreground">Company Name • 2020 - Present</div>
                  <p className="mt-1">Brief description of your role and accomplishments.</p>
                </div>
                <div>
                  <div className="font-medium">Previous Position</div>
                  <div className="text-sm text-muted-foreground">Previous Company • 2018 - 2020</div>
                  <p className="mt-1">Brief description of your role and accomplishments.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Education</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <div className="font-medium">Degree Name</div>
                  <div className="text-sm text-muted-foreground">University Name • Graduation Year</div>
                  <p className="mt-1">Brief description of your studies and achievements.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link to="/socials">Connect With Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
