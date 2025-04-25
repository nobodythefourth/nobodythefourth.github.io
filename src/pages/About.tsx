
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
            <CardTitle>who i am</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>i am a nobody who is here to help others, since in doing so I help myself</p>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>skills & expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              i graduated UC Berkeley with a bachelors in math.<br/>
              i enjoy building and exploring the frontier of technology.<br/>
              i enjoy leading and shaping the world in a way I deem fit. that is power. people have trusted me with it.<br/>
              i love studying people too.<br/>
              <br/>
              in essence, i am a nerd and a geek who loves to lead.
            </p>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8">
        </div>
      </div>
    </div>
  );
};

export default About;
