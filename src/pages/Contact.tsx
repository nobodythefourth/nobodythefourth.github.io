import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="page-container fade-in flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>contact</CardTitle>
        </CardHeader>
        <CardContent>
          <span>reach out for anything: </span>
          <a
            href="mailto:nobody.the.fourth@gmail.com"
            className="text-blue-600 hover:underline break-all"
          >
            nobody.the.fourth@gmail.com
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
